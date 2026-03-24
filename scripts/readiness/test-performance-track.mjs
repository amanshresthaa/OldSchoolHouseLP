import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { performance } from "node:perf_hooks"
import { spawn } from "node:child_process"

const rootDir = process.cwd()
const outputDir = path.join(rootDir, "test-results", "vitest")
const resultsFile = path.join(outputDir, "results.json")
const summaryFile = path.join(outputDir, "performance-summary.json")

async function runVitest() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      "pnpm",
      ["exec", "vitest", "run", "--config", "vitest.config.ts", "--coverage"],
      {
        cwd: rootDir,
        env: process.env,
        stdio: "inherit",
      }
    )

    child.on("error", reject)
    child.on("exit", (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`Vitest exited with code ${code ?? "unknown"}`))
    })
  })
}

function getFileDuration(entry) {
  if (
    typeof entry?.time === "number" &&
    Number.isFinite(entry.time) &&
    entry.time >= 0
  ) {
    return entry.time
  }

  if (
    typeof entry?.duration === "number" &&
    Number.isFinite(entry.duration) &&
    entry.duration >= 0
  ) {
    return entry.duration
  }

  return 0
}

function getSlowestFiles(testResults) {
  return [...testResults]
    .map((entry) => ({
      file: path.relative(rootDir, path.resolve(rootDir, entry.name ?? "")),
      durationMs: Math.round(getFileDuration(entry)),
      assertionCount: Array.isArray(entry.assertionResults)
        ? entry.assertionResults.length
        : 0,
    }))
    .sort((left, right) => right.durationMs - left.durationMs)
    .slice(0, 10)
}

async function main() {
  await mkdir(outputDir, { recursive: true })

  const start = performance.now()
  await runVitest()
  const durationMs = Math.round(performance.now() - start)

  const rawResults = await readFile(resultsFile, "utf8")
  const parsedResults = JSON.parse(rawResults)
  const testResults = Array.isArray(parsedResults.testResults)
    ? parsedResults.testResults
    : []

  const summary = {
    generatedAt: new Date().toISOString(),
    durationMs,
    suiteCount:
      typeof parsedResults.numTotalTestSuites === "number"
        ? parsedResults.numTotalTestSuites
        : testResults.length,
    testCount:
      typeof parsedResults.numTotalTests === "number"
        ? parsedResults.numTotalTests
        : 0,
    failed: Boolean(parsedResults.success === false),
    slowestFiles: getSlowestFiles(testResults),
  }

  await writeFile(summaryFile, `${JSON.stringify(summary, null, 2)}\n`)

  console.log("Vitest performance summary")
  console.log(`- Duration: ${summary.durationMs}ms`)
  console.log(`- Suites: ${summary.suiteCount}`)
  console.log(`- Tests: ${summary.testCount}`)
  console.log("- Slowest files:")

  for (const file of summary.slowestFiles) {
    console.log(
      `  - ${file.file}: ${file.durationMs}ms (${file.assertionCount} assertions)`
    )
  }
}

main().catch((error) => {
  console.error("Failed to track test performance.")
  console.error(error)
  process.exit(1)
})
