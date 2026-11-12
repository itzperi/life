const fs = require('fs');
const path = require('path');
const C = require('../config');

const CSS = fs.readFileSync(path.join(__dirname, '../assets/style.css'), 'utf8').replace(/\s*\n\s*/g, '');

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Replace {{TOKEN}} with the confirmed fact, or a visible "[to confirm]" chip.
const TOKEN_RE = /\{\{([A-Z_]+)\}\}/g;
function tok(htmlSafe) {
  return htmlSafe.replace(TOKEN_RE, (m, k) => {
    const v = C.facts[k];
    if (v) return esc(v);
    return `<mark class="ph" title="To be confirmed by Lifeline Placements">[${esc(C.factLabels[k] || k.toLowerCase())}: to confirm]</mark>`;
  });
}
// Plain text with tokens -> safe HTML
const t = (s) => tok(esc(s));
// Plain text for schema/meta: returns null if an unconfirmed token remains.
function plain(s) {
  let missing = false;
  const out = String(s).replace(TOKEN_RE, (m, k) => { if (C.facts[k]) return C.facts[k]; missing = true; return ''; });
  return missing ? null : out;
}
const hasToken = (s) => /\{\{[A-Z_]+\}\}/.test(s);

const ICON = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.4-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.5l.4-.4.3-.5v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/></svg>',
  logo: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0f766e"/><path d="M5 17h5l2.5-6 4 11 3-8 1.5 3H27" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const waHref = (text) => `https://wa.me/${C.wa}?text=${encodeURIComponent(text || 'Hi Lifeline Placements, I need staff.')}`;
const callBtn = (loc, label = 'Call ' + C.phoneDisplay, cls = '') => `<a class="btn btn-call ${cls}" href="tel:${C.tel}" data-loc="${loc}">${ICON.phone}${esc(label)}</a>`;
const waBtn = (loc, text, label = 'WhatsApp us', cls = '') => `<a class="btn btn-wa ${cls}" href="${esc(waHref(text))}" data-loc="${loc}">${ICON.wa}${esc(label)}</a>`;
const ctaRow = (loc, waText) => `<div class="cta-row">${waBtn(loc, waText, 'WhatsApp your requirement')}${callBtn(loc)}</div>`;

function addressText() {
  const a = C.address;
  if (a.confirmed) return `${a.street}, ${a.locality}, ${a.city} ${a.postalCode}, ${a.region}`;
  return `${a.locality}, ${a.city}, ${a.region}`;
}
function addressHtml() {
  const a = C.address;
  if (a.confirmed) return esc(addressText());
  return `${esc(a.locality)}, ${esc(a.city)}, ${esc(a.region)} <mark class="ph" title="To be confirmed by Lifeline Placements">[full street address and PIN: to confirm]</mark>`;
}

const INDUSTRY_OPTS = () => require('../data/industries').map((i) => i.name);
const CITY_OPTS = () => require('../data/cities').map((c) => c.name);

function quoteForm({ industry = '', city = '', id = 'quote' } = {}) {
  const opt = (list, sel) => list.map((v) => `<option${v === sel ? ' selected' : ''}>${esc(v)}</option>`).join('');
  return `<form class="quote" id="quote-form" action="https://wa.me/${C.wa}" method="get"${C.leadEndpoint ? ` data-endpoint="${esc(C.leadEndpoint)}"` : ''}>
<h2 id="${id}">Get a quote on WhatsApp</h2>
<p class="fine" style="margin-top:0">Fill five details. WhatsApp opens with your message ready to send. Nothing is sent until you press send.</p>
<div class="row">
<div class="field"><label for="f-ind">Industry</label><select id="f-ind" name="industry" required><option value="">Choose industry</option>${opt(INDUSTRY_OPTS(), industry)}<option>Other</option></select></div>
<div class="field"><label for="f-role">Role needed</label><input id="f-role" name="role" required placeholder="e.g. machine operators" autocomplete="off"></div>
<div class="field"><label for="f-n">How many people</label><input id="f-n" name="headcount" required inputmode="numeric" pattern="[0-9]{1,5}" placeholder="e.g. 25"></div>
<div class="field"><label for="f-city">Work location</label><select id="f-city" name="city" required><option value="">Choose city</option>${opt(CITY_OPTS(), city)}<option>Other Tamil Nadu district</option></select></div>
<div class="field"><label for="f-by">Needed by</label><select id="f-by" name="by" required><option value="">Choose</option><option>Within a week</option><option>Within 2 weeks</option><option>Within a month</option><option>Just planning</option></select></div>
<div class="field"><label for="f-name">Your name or company</label><input id="f-name" name="name" required autocomplete="organization" placeholder="e.g. Priya, ABC Components"></div>
</div>
<div class="cta-row"><button class="btn btn-wa" type="submit">${ICON.wa}Send on WhatsApp</button>${callBtn('form', 'Or call ' + C.phoneDisplay, 'btn-ghost')}</div>
<p class="fine">For employers hiring staff. Looking for a job? See <a href="/jobs/">jobs</a>. We use your details only to reply to this enquiry. <a href="/privacy/">Privacy notice</a>.</p>
</form>`;
}

function breadcrumbs(items) {
  if (!items || items.length < 2) return '';
  return `<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${items.map((b, i) => `<li>${i < items.length - 1 ? `<a href="${b.path}">${esc(b.name)}</a>` : `<span aria-current="page">${esc(b.name)}</span>`}</li>`).join('')}</ol></nav>`;
}

function header() {
  const links = [['/industries/', 'Industries'], ['/cities/', 'Cities'], ['/guides/', 'Guides'], ['/about/', 'About'], ['/contact/', 'Contact']];
  return `<a class="skip" href="#main">Skip to content</a>
<header class="hdr"><div class="wrap">
<a class="logo" href="/">${ICON.logo}<span>Lifeline Placements</span></a>
<nav class="nav" aria-label="Main">${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</nav>
<details class="menu"><summary aria-label="Open menu">Menu</summary><div class="menu-list">${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}<a href="/jobs/">Jobs (for job seekers)</a></div></details>
${callBtn('header', 'Call', 'btn-sm')}
</div></header>`;
}

function footer() {
  const inds = require('../data/industries');
  const cities = require('../data/cities');
  return `<footer class="ftr"><div class="wrap cols3">
<div>
<h2>Lifeline Placements</h2>
<p>Manpower supply and recruitment for employers across Tamil Nadu.</p>
<p class="ta" lang="ta">தமிழ்நாடு முழுவதும் நிறுவனங்களுக்கு நம்பகமான பணியாளர்கள்.</p>
<p><strong>Lifeline Placements</strong><br>${addressHtml()}<br>
Phone / WhatsApp: <a href="tel:${C.tel}" data-loc="footer">${C.phoneDisplay}</a><br>
<a href="${esc(waHref())}" data-loc="footer">Chat on WhatsApp</a><br>
Email: <a href="mailto:${C.email}">${C.email}</a></p>
</div>
<div><h2>Industries</h2><ul>${inds.slice(0, 8).map((i) => `<li><a href="/industries/${i.slug}/">${esc(i.name)}</a></li>`).join('')}<li><a href="/industries/">All industries</a></li></ul></div>
<div><h2>Cities</h2><ul>${cities.slice(0, 8).map((c) => `<li><a href="/cities/${c.slug}/">${esc(c.name)}</a></li>`).join('')}<li><a href="/cities/">All cities</a></li></ul>
<h2>More</h2><ul><li><a href="/guides/">Hiring guides</a></li><li><a href="/jobs/">Jobs (for job seekers)</a></li><li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li><li><a href="/privacy/">Privacy</a></li></ul></div>
</div>
<div class="wrap"><p style="margin-top:12px;font-size:.85rem">© ${new Date(C.updated).getFullYear()} Lifeline Placements. Content updated ${C.updatedDisplay}.</p></div>
</footer>
<div class="sbar" role="navigation" aria-label="Quick contact"><a class="c" href="tel:${C.tel}" data-loc="sticky_bar">${ICON.phone}Call</a><a class="w" href="${esc(waHref())}" data-loc="sticky_bar">${ICON.wa}WhatsApp</a></div>`;
}

// ---------- JSON-LD ----------
function orgNode(full) {
  const a = C.address;
  const address = { '@type': 'PostalAddress', addressLocality: a.city, addressRegion: a.region, addressCountry: a.country };
  if (a.confirmed) { address.streetAddress = `${a.street}, ${a.locality}`; address.postalCode = a.postalCode; }
  const node = {
    '@type': 'EmploymentAgency',
    '@id': `${C.url}/#org`,
    name: C.name,
    alternateName: C.alternateName,
    url: `${C.url}/`,
    telephone: C.tel,
    email: C.email,
    logo: `${C.url}/assets/logo-512.png`,
    image: `${C.url}/assets/og-default.png`,
    address,
    areaServed: { '@type': 'State', name: 'Tamil Nadu', containedInPlace: { '@type': 'Country', name: 'India' } },
  };
  if (full) {
    node.description = 'Lifeline Placements is a Chennai-based manpower supply and recruitment agency. It supplies staff to employers across Tamil Nadu through permanent placement, contract staffing and bulk hiring.';
    node.founder = { '@type': 'Person', name: C.founder.name };
    node.knowsAbout = require('../data/industries').map((i) => i.name);
    node.contactPoint = { '@type': 'ContactPoint', telephone: C.tel, contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Tamil'] };
  }
  if (C.sameAs.length) node.sameAs = C.sameAs;
  return node;
}
function crumbNode(items) {
  return { '@type': 'BreadcrumbList', itemListElement: items.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: C.url + b.path })) };
}
function faqNode(faqs) {
  const qa = faqs.map((f) => ({ q: plain(f.q), a: plain(f.a) })).filter((f) => f.q && f.a);
  if (!qa.length) return null;
  return { '@type': 'FAQPage', mainEntity: qa.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}
const ld = (nodes) => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) }).replace(/</g, '\\u003c')}</script>`;

function faqHtml(faqs, heading = 'Frequently asked questions') {
  return `<section class="faq" aria-labelledby="faq-h"><div class="wrap"><h2 id="faq-h">${esc(heading)}</h2>${faqs.map((f) => `<h3>${t(f.q)}</h3><div class="a"><p>${t(f.a)}</p></div>`).join('')}</div></section>`;
}

function finalCta(waText, title = 'Need staff? Message us now.') {
  return `<section class="final"><div class="wrap"><h2>${esc(title)}</h2><p>Send the role, how many people and when you need them. We reply on WhatsApp during working hours.</p><div class="cta-row">${waBtn('final_cta', waText, 'WhatsApp ' + C.phoneDisplay)}${callBtn('final_cta')}</div></div></section>`;
}

function page({ path: p, title, description, h1Html = '', body, crumbs = [], schema = [], noindex = false, ogType = 'website' }) {
  const canonical = C.url + p;
  const gaTag = C.ga4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${C.ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${C.ga4}');</script>` : '';
  const nodes = [orgNode(p === '/'), crumbs.length > 1 ? crumbNode(crumbs) : null, ...schema];
  return `<!doctype html>
<html lang="en-IN" data-wa="${C.wa}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="Lifeline Placements">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${C.url}/assets/og-default.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Lifeline Placements: manpower supply across Tamil Nadu, WhatsApp ${C.phoneDisplay}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0f766e">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<style>${CSS}</style>
${ld(nodes)}
${gaTag}
<script src="/assets/site.js" defer></script>
</head>
<body>
${header()}
${breadcrumbs(crumbs)}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

module.exports = { C, esc, t, tok, plain, hasToken, ICON, waHref, callBtn, waBtn, ctaRow, quoteForm, faqHtml, finalCta, page, orgNode, crumbNode, faqNode, ld, addressText, addressHtml };
