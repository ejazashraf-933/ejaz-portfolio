// Renders design/covers/*.html to public/projects/<name>.webp
// Usage: node design/render.mjs [name ...]   (no names = render all)

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = dirname(fileURLToPath(import.meta.url));
const coversDir = join(root, "covers");
const outDir = join(root, "..", "public", "projects");
const tmp = join(tmpdir(), "portfolio-covers");

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);
const chrome = chromeCandidates.find((p) => existsSync(p));
if (!chrome) throw new Error("Chrome not found. Set CHROME_PATH.");

mkdirSync(tmp, { recursive: true });
mkdirSync(outDir, { recursive: true });

const requested = process.argv.slice(2);
const names = readdirSync(coversDir)
  .filter((f) => f.endsWith(".html"))
  .map((f) => f.replace(/\.html$/, ""))
  .filter((n) => requested.length === 0 || requested.includes(n));

for (const name of names) {
  const png = join(tmp, `${name}.png`);
  rmSync(png, { force: true });
  spawnSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=2",
      "--window-size=1200,900",
      "--virtual-time-budget=6000",
      `--user-data-dir=${join(tmp, "profile")}`,
      `--screenshot=${png}`,
      pathToFileURL(join(coversDir, `${name}.html`)).href,
    ],
    { stdio: "ignore" },
  );
  if (!existsSync(png)) {
    console.error(`x ${name}: screenshot failed`);
    continue;
  }
  const out = join(outDir, `${name}.webp`);
  const info = await sharp(png).resize(2400, 1800, { fit: "cover" }).webp({ quality: 84 }).toFile(out);
  console.log(`ok ${name} -> public/projects/${name}.webp (${Math.round(info.size / 1024)} KB)`);
}
