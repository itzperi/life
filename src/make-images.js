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

const mark = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0f766e"/><path d="M5 17h5l2.5-6 4 11 3-8 1.5 3H27" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const jobs = [
  ['og-default.png', 1200, 630, `<div style="width:1200px;height:630px;background:linear-gradient(135deg,#0f766e,#115e59);color:#fff;font-family:Segoe UI,Arial,sans-serif;padding:70px 80px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between">
<div style="display:flex;align-items:center;gap:22px">${mark(84).replace('fill="#0f766e"', 'fill="#ffffff"').replace('stroke="#fff"', 'stroke="#0f766e"')}<div style="font-size:46px;font-weight:800">Lifeline Placements</div></div>
<div><div style="font-size:64px;font-weight:800;line-height:1.1">Manpower supply for<br>employers across Tamil Nadu</div>
<div style="font-size:30px;margin-top:22px;color:#ccfbf1">Factory · BPO · Office · Housekeeping · Hospital · Retail · Logistics</div></div>
<div style="font-size:40px;font-weight:800">WhatsApp / Call +91 99622 99076</div></div>`],
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
