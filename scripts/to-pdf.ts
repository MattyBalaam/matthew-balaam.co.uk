import { spawn } from "node:child_process";
import { join } from "node:path";
import { chromium } from "playwright";

const PUBLIC_DIR = join(process.cwd(), "public");
const PDF_PATH = join(PUBLIC_DIR, "Matthew-Balaam_Developer.pdf");
const URL = "http://localhost:3000/cv"; // Change if your serve port is different

async function savePDF(url: string, outputPath: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  let retries = 5;
  let delay = 300;

  for (let i = 0; i < retries; i++) {
    try {
      await page.goto(url, { waitUntil: "load" });
      break;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((res) => setTimeout(res, delay));
    }
  }

  await page.pdf({ path: outputPath, format: "A4", pageRanges: "1" });
  await browser.close();
  console.log(`PDF saved to ${outputPath}`);
}

async function main() {
  const serveProcess = spawn("pnpm", ["start"], { stdio: "inherit" });

  try {
    await savePDF(URL, PDF_PATH);
  } finally {
    serveProcess.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
