// One-off: renders the OG image, logo and touch icon to PNG with headless Chrome/Edge. Run: node src/make-images.js
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const OUT = path.join(__dirname, 'static', 'assets');
fs.mkdirSync(OUT, { recursive: true });
const browsers = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'];
const bin = browsers.find((b) => fs.existsSync(b));
if (!bin) throw new Error('No Chrome or Edge found');

const FONT = 'file:///' + path.join(__dirname, 'static/assets/fonts/archivo-latin.woff2').split(path.sep).join('/');
const mark = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0f766e"/><path d="M5 17h5l2.5-6 4 11 3-8 1.5 3H27" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const jobs = [
  ['og-default.png', 1200, 630, `<style>@font-face{font-family:A;src:url(${FONT});font-weight:400 850;font-stretch:75% 100%}</style><div style="width:1200px;height:630px;background:#0e2a27;color:#fff;font-family:A,Arial,sans-serif;box-sizing:border-box;position:relative">
<div style="height:22px;background:linear-gradient(180deg,#ffc21a 0 22%,#c9d3d1 22% 40%,#ffc21a 40% 60%,#c9d3d1 60% 78%,#ffc21a 78%)"></div>
<div style="padding:52px 72px 0;display:flex;align-items:center;gap:20px">${mark(76)}<div style="font-size:48px;font-weight:800;font-stretch:75%">Lifeline <span style="color:#ffc21a">Crew</span></div></div>
<div style="padding:30px 72px 0;font-size:84px;line-height:.98;font-weight:850;font-stretch:75%">Manpower supply for<br>employers across Tamil Nadu</div>
<div style="padding:24px 72px 0;font-size:32px;color:#a9c4be">Helpers in 48 hours. Skilled roles in 7 days.</div>
<div style="position:absolute;left:72px;bottom:46px;font-size:38px;font-weight:800"><span style="background:#15803d;padding:10px 22px;border-radius:12px">WhatsApp +91 99622 99076</span></div></div>`],
  ['logo-512.png', 512, 512, `<div style="width:512px;height:512px">${mark(512)}</div>`],
  ['apple-touch-icon.png', 180, 180, `<div style="width:180px;height:180px;background:#0f766e">${mark(180).replace('rx="8"', 'rx="0"')}</div>`],
];
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'llimg-'));
for (const [name, w, h, html] of jobs) {
  const f = path.join(tmp, name + '.html');
  fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;overflow:hidden}</style></head><body>${html}</body></html>`);
  execFileSync(bin, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--window-size=${w},${h}`, `--screenshot=${path.join(OUT, name)}`, 'file:///' + f.replace(/\\/g, '/')], { stdio: 'ignore' });
  console.log('wrote', name);
}
fs.writeFileSync(path.join(__dirname, 'static', 'favicon.svg'), mark(32));
console.log('wrote favicon.svg');
