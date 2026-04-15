import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"

const ROOT_DIR = process.cwd()
const MAX_BYTES = 250 * 1024
const MAX_LINES = 1000
const STAGED_PATHS = process.argv.slice(2)

const IGNORED_DIRECTORIES = new Set([
  ".git",
  ".next",
  ".next-local",
  ".factory",
  "node_modules",
  "coverage",
  "test-results",
  "playwright-report",
  "blob-report",
  "out",
  "build",
])

const IGNORED_FILENAMES = new Set([
  ".DS_Store",
  "pnpm-lock.yaml",
  "package-lock.json",
  "yarn.lock",
  "tsconfig.tsbuildinfo",
])

const IGNORED_PATH_PREFIXES = ["public/menus/theoldschoolhousemenu-standalone"]

const TEXT_EXTENSIONS = new Set([
  "",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".css",
  ".yml",
  ".yaml",
  ".txt",
  ".html",
  ".svg",
])

const BINARY_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
  ".ico",
  ".pdf",
  ".zip",
  ".gz",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
  ".mp4",
  ".mov",
  ".mp3",
])

async function collectFiles(directoryPath, collectedFiles = []) {
  const entries = await readdir(directoryPath, { withFileTypes: true })

  for (const entry of entries) {
    const absolutePath = path.join(directoryPath, entry.name)
    const relativePath = path.relative(ROOT_DIR, absolutePath)

    if (entry.isDirectory()) {
      if (shouldIgnorePath(relativePath, entry.name)) {
        continue
      }

      await collectFiles(absolutePath, collectedFiles)
      continue
    }

    if (!entry.isFile()) {
      continue
    }

    if (IGNORED_FILENAMES.has(entry.name)) {
      continue
    }

    if (shouldIgnorePath(relativePath, entry.name)) {
      continue
    }

    const extension = path.extname(entry.name).toLowerCase()

    if (BINARY_EXTENSIONS.has(extension)) {
      continue
    }

    collectedFiles.push({
      absolutePath,
      relativePath,
    })
  }

  return collectedFiles
}

function shouldIgnorePath(
  relativePath,
  baseName = path.basename(relativePath)
) {
  if (!relativePath || relativePath === ".") {
    return false
  }

  if (IGNORED_DIRECTORIES.has(baseName) || IGNORED_FILENAMES.has(baseName)) {
    return true
  }

  return IGNORED_PATH_PREFIXES.some(
    (ignoredPrefix) =>
      relativePath === ignoredPrefix ||
      relativePath.startsWith(`${ignoredPrefix}/`)
  )
}

async function collectProvidedPath(inputPath, collectedFiles) {
  const absolutePath = path.resolve(ROOT_DIR, inputPath)
  const fileStats = await stat(absolutePath)
  const relativePath = path.relative(ROOT_DIR, absolutePath)
  const baseName = path.basename(absolutePath)

  if (shouldIgnorePath(relativePath, baseName)) {
    return collectedFiles
  }

  if (fileStats.isDirectory()) {
    return collectFiles(absolutePath, collectedFiles)
  }

  if (!fileStats.isFile()) {
    return collectedFiles
  }

  const extension = path.extname(baseName).toLowerCase()

  if (BINARY_EXTENSIONS.has(extension)) {
    return collectedFiles
  }

  collectedFiles.push({
    absolutePath,
    relativePath,
  })

  return collectedFiles
}

async function getLineCount(filePath) {
  const content = await readFile(filePath, "utf8")

  if (content.length === 0) {
    return 0
  }

  return content.split(/\r?\n/).length
}

async function main() {
  const files = []
  const seenRelativePaths = new Set()
  const scanTargets = STAGED_PATHS.length > 0 ? STAGED_PATHS : [ROOT_DIR]
  const violations = []

  for (const target of scanTargets) {
    const collectedFiles =
      target === ROOT_DIR
        ? await collectFiles(ROOT_DIR, [])
        : await collectProvidedPath(target, [])

    for (const file of collectedFiles) {
      if (seenRelativePaths.has(file.relativePath)) {
        continue
      }

      seenRelativePaths.add(file.relativePath)
      files.push(file)
    }
  }

  for (const file of files) {
    const fileStats = await stat(file.absolutePath)

    if (fileStats.size > MAX_BYTES) {
      violations.push(
        `${file.relativePath}: ${fileStats.size} bytes exceeds ${MAX_BYTES} bytes`
      )
      continue
    }

    const extension = path.extname(file.absolutePath).toLowerCase()

    if (!TEXT_EXTENSIONS.has(extension)) {
      continue
    }

    const lineCount = await getLineCount(file.absolutePath)

    if (lineCount > MAX_LINES) {
      violations.push(
        `${file.relativePath}: ${lineCount} lines exceeds ${MAX_LINES} lines`
      )
    }
  }

  if (violations.length > 0) {
    console.error(
      [
        "Large file scan failed.",
        `Limits: ${MAX_BYTES} bytes max, ${MAX_LINES} lines max.`,
        ...violations.map((violation) => `- ${violation}`),
      ].join("\n")
    )
    process.exit(1)
  }

  console.log(
    `Large file scan passed for ${files.length} files (max ${MAX_BYTES} bytes / ${MAX_LINES} lines).`
  )
}

main().catch((error) => {
  console.error("Large file scan failed with an unexpected error.")
  console.error(error)
  process.exit(1)
})
