// Acceptance checks for dist/. Run after build: node src/check.js
const fs = require('fs');
const path = require('path');
const C = require('./config');
const DIST = path.join(__dirname, '..', 'dist');

const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) files.push(p); } })(DIST);

const urlOf = (f) => { const rel = path.relative(DIST, f).replace(/\\/g, '/'); return rel === 'index.html' ? '/' : rel === '404.html' ? '/404.html' : '/' + rel.replace(/index\.html$/, ''); };
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const smUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(C.url, '')));
const results = []; const titles = {}; const descs = {}; const fails = [];
const fail = (u, msg) => fails.push(`${u}: ${msg}`);
const sentences = {};
const BANNED = /\b(best|leading|no\.? ?1|world-class|seamless(?! steel)|cutting-edge)\b|100%/gi;

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8'); const u = urlOf(f); const is404 = u === '/404.html';
  const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) fail(u, `${h1} H1 tags`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const tl = dec(title).length, dl = dec(desc).length;
  if (!is404 && (tl < 50 || tl > 60)) fail(u, `title ${tl} chars`);
  if (!is404 && (dl < 150 || dl > 160)) fail(u, `description ${dl} chars`);
  (titles[title] = titles[title] || []).push(u); (descs[desc] = descs[desc] || []).push(u);
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!is404 && canon !== C.url + u) fail(u, `canonical ${canon}`);
  if (is404 && !/noindex/.test(html)) fail(u, '404 not noindex');
  for (const og of ['og:title', 'og:description', 'og:url', 'og:image']) if (!html.includes(`property="${og}"`)) fail(u, `missing ${og}`);
  const lds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = [];
  if (!lds.length) fail(u, 'no JSON-LD');
  for (const m of lds) { try { const j = JSON.parse(m[1]); if (j['@context'] !== 'https://schema.org') fail(u, 'bad @context'); (j['@graph'] || [j]).forEach((n) => types.push(n['@type'])); } catch (e) { fail(u, 'invalid JSON-LD: ' + e.message); } }
  if (/"@type":"(Review|AggregateRating)"/.test(html)) fail(u, 'review/rating markup present');
  if (!html.includes(`href="tel:${C.tel}"`)) fail(u, 'no tel link');
  if (!html.includes(`https://wa.me/${C.wa}`)) fail(u, 'no WhatsApp link');
  if (!html.includes(C.phoneDisplay)) fail(u, 'phone display missing');
  const visible = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  const badPhone = visible.match(/(?:\+?91[\s-]?)?(?:0?99622[\s-]?99076|98847[\s-]?63475)/g) || [];
  const odd = badPhone.filter((p) => p !== C.phoneDisplay && p !== '99622 99076');
  if (odd.length) fail(u, 'other phone formats: ' + [...new Set(odd)].join(', '));
  const telLinks = [...html.matchAll(/href="tel:([^"]+)"/g)].map((m) => m[1]).filter((x) => x !== C.tel);
  if (telLinks.length) fail(u, 'other tel targets ' + telLinks.join(','));
  const waLinks = [...html.matchAll(/href="https:\/\/wa\.me\/(\d+)/g)].map((m) => m[1]).filter((x) => x !== C.wa);
  if (waLinks.length) fail(u, 'other wa targets');
  // internal links
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const l = m[1]; if (l.startsWith('//')) continue;
    const target = l.endsWith('/') ? path.join(DIST, l, 'index.html') : path.join(DIST, l);
    if (!fs.existsSync(target)) fail(u, 'broken link ' + l);
  }
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt="[^"]+"/.test(m[0])); if (imgs.length) fail(u, `${imgs.length} images without alt`);
  if (!is404 && !smUrls.has(u)) fail(u, 'not in sitemap');
  const main = (html.match(/<main[^>]*>([\s\S]*)<\/main>/) || [])[1] || '';
  const text = main.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ');
  const words = text.split(' ').filter(Boolean).length;
  const ph = (html.match(/class="ph"/g) || []).length;
  const banned = (text.match(BANNED) || []);
  if (banned.length) fail(u, 'hype words: ' + [...new Set(banned)].join(', '));
  if (/security guard/i.test(text) && !/PSARA/.test(text)) fail(u, 'mentions security guards without PSARA caveat');
  for (const s of text.split(/(?<=[.?!])\s+/)) { const k = s.trim(); if (k.split(' ').length >= 9) (sentences[k] = sentences[k] || new Set()).add(u); }
  results.push({ u, tl, dl, words, ph, types: types.join('+'), bytes: Buffer.byteLength(html) });
}
for (const [k, v] of Object.entries(titles)) if (v.length > 1) fail(v.join(','), 'duplicate title');
for (const [k, v] of Object.entries(descs)) if (v.length > 1) fail(v.join(','), 'duplicate description');
const pageUrls = new Set(results.map((r) => r.u));
for (const s of smUrls) if (!pageUrls.has(s)) fail(s, 'in sitemap but no page');
// orphan check: every page linked from at least one other page
const inbound = {};
for (const f of files) { const html = fs.readFileSync(f, 'utf8'); const u = urlOf(f); for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) if (m[1] !== u) inbound[m[1]] = true; }
for (const r of results) if (r.u !== '/' && r.u !== '/404.html' && !inbound[r.u]) fail(r.u, 'orphan page');
// home links to every industry and city page
const home = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
for (const r of results) if (/^\/(industries|cities)\/.+\//.test(r.u) && !home.includes(`href="${r.u}"`)) fail(r.u, 'not linked from home');

const shared = Object.entries(sentences).filter(([, v]) => v.size >= 4 && v.size < results.length - 5).sort((a, b) => b[1].size - a[1].size);

console.log(`Pages checked: ${results.length}  |  Sitemap URLs: ${smUrls.size}`);
console.table(results.map((r) => ({ url: r.u, title: r.tl, desc: r.dl, words: r.words, placeholders: r.ph, kb: (r.bytes / 1024).toFixed(1), schema: r.types })));
console.log(`\nSentences repeated on 4+ pages (boilerplate check): ${shared.length}`);
shared.slice(0, 12).forEach(([s, v]) => console.log(`  [${v.size}] ${s.slice(0, 110)}`));
console.log(fails.length ? `\nFAILURES (${fails.length}):\n  ` + fails.join('\n  ') : '\nALL CHECKS PASSED');
process.exitCode = fails.length ? 1 : 0;
