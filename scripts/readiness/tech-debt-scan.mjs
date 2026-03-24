import { readdirSync, readFileSync } from "node:fs"
import { extname, join, relative } from "node:path"

const repoRoot = process.cwd()
const includeExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".css",
  ".yml",
  ".yaml",
])
const ignoredDirectories = new Set([
  ".git",
  ".next",
  ".factory",
  ".husky",
  "node_modules",
  "coverage",
  "dist",
  "build",
  "out",
])
const debtMarkers = ["TO" + "DO", "FIX" + "ME", "HA" + "CK", "XX" + "X"]
const markerPattern = new RegExp(`\\b(${debtMarkers.join("|")})\\b`)

function walk(directoryPath) {
  const entries = readdirSync(directoryPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) {
      continue
    }

    const entryPath = join(directoryPath, entry.name)

    if (entry.isDirectory()) {
      files.push(...walk(entryPath))
      continue
    }

    if (!includeExtensions.has(extname(entry.name))) {
      continue
    }

    files.push(entryPath)
  }

  return files
}

const findings = []

for (const filePath of walk(repoRoot)) {
  const relativePath = relative(repoRoot, filePath)
  const lines = readFileSync(filePath, "utf8").split("\n")

  lines.forEach((line, index) => {
    const match = line.match(markerPattern)

    if (!match) {
      return
    }

    if (
      relativePath === "oldschoolhouselp-readiness-report.md" ||
      relativePath === "oldschoolhouselp-readiness-report (2).md"
    ) {
      return
    }

    findings.push({
      file: relativePath,
      line: index + 1,
      marker: match[1],
      content: line.trim(),
    })
  })
}

if (findings.length === 0) {
  console.log(
    `Tech-debt scan passed with no ${debtMarkers.join("/")} markers found.`
  )
  process.exit(0)
}

console.error("Tech-debt markers found:")
for (const finding of findings) {
  console.error(
    `- ${finding.file}:${finding.line} [${finding.marker}] ${finding.content}`
  )
}
process.exit(1)
