// Renderiza os 12 posts de posts.html em PNG 1080×1350 → posts/png/post-XX.png
// uso: node posts/render.mjs   (requer playwright + chromium)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(here, 'png'), { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const page = await browser.newPage({ viewport: { width: 1200, height: 1500 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(here, 'posts.html'));
await page.evaluate(() => document.fonts.ready);
await page.waitForLoadState('networkidle');

for (let i = 1; i <= 12; i++) {
  const id = String(i).padStart(2, '0');
  await page.locator(`#post-${id}`).screenshot({ path: join(here, 'png', `post-${id}.png`) });
  console.log('post-' + id);
}
await browser.close();
