import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { performance } from "node:perf_hooks"
import { spawn } from "node:child_process"

const rootDir = process.cwd()
const outputDir = path.join(rootDir, "test-results", "build")
const summaryFile = path.join(outputDir, "performance-summary.json")

async function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("pnpm", ["exec", "next", "build"], {
      cwd: rootDir,
      env: process.env,
      stdio: "inherit",
    })

    child.on("error", reject)
    child.on("exit", (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`Build exited with code ${code ?? "unknown"}`))
    })
  })
}

async function main() {
  await mkdir(outputDir, { recursive: true })

  const start = performance.now()
  await runBuild()
  const durationMs = Math.round(performance.now() - start)

  const summary = {
    generatedAt: new Date().toISOString(),
    durationMs,
    ci: Boolean(process.env.CI),
  }

  await writeFile(summaryFile, `${JSON.stringify(summary, null, 2)}\n`)

  console.log("Build performance summary")
  console.log(`- Duration: ${summary.durationMs}ms`)
  console.log(`- CI mode: ${summary.ci}`)
}

main().catch((error) => {
  console.error("Failed to track build performance.")
  console.error(error)
  process.exit(1)
})
