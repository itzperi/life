// Minimal local static server with gzip, for previews and Lighthouse. Run: node src/serve.js [port]
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const DIST = path.join(__dirname, '..', 'dist');
const PORT = Number(process.argv[2] || process.env.PORT || 8080);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
const redirects = Object.fromEntries(fs.readFileSync(path.join(DIST, '_redirects'), 'utf8').trim().split('\n').map((l) => l.split(' ')));
http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  if (redirects[u]) { res.writeHead(301, { Location: redirects[u] }); return res.end(); }
  let f = path.join(DIST, u);
  if (!f.startsWith(DIST)) { res.writeHead(400); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) {
    if (!u.endsWith('/')) { res.writeHead(301, { Location: u + '/' }); return res.end(); }
    f = path.join(f, 'index.html');
  }
  let status = 200;
  if (!fs.existsSync(f)) { f = path.join(DIST, '404.html'); status = 404; }
  const type = TYPES[path.extname(f)] || 'application/octet-stream';
  let body = fs.readFileSync(f);
  const headers = { 'Content-Type': type, 'Cache-Control': /\/assets\//.test(u) ? 'public, max-age=2592000' : 'no-cache' };
  if (/gzip/.test(req.headers['accept-encoding'] || '') && /text|javascript|xml|svg/.test(type)) { body = zlib.gzipSync(body); headers['Content-Encoding'] = 'gzip'; }
  res.writeHead(status, headers); res.end(body);
}).listen(PORT, () => console.log(`Serving dist/ on http://localhost:${PORT}`));
