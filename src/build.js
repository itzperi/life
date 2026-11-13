// Static site generator for lifelineplacements.com. Run: node src/build.js  -> writes ./dist
const fs = require('fs');
const path = require('path');
const L = require('./lib/layout');
const { composer, firstLower, C, esc, t, tok, plain, ICON, indIcon, waHref, waNeed, waChip, ctaRow, pickerChips, quoteForm, faqHtml, finalCta, page, faqNode, howToNode, waBtn, callBtn, addressHtml, mapsUrl } = L;
const industries = require('./data/industries');
const cities = require('./data/cities');
const guides = require('./data/guides');
const services = require('./data/services').filter((s) => s.slug !== 'payroll-outsourcing' || C.payrollOutsourcing);

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const pages = []; // registry: {path, title, description, keyword, type}

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

function write(rel, html) {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
function emit(p, opts, meta) {
  pages.push({ path: p, title: opts.title, description: opts.description, keyword: meta.keyword, type: meta.type, noindex: !!opts.noindex, faqs: meta.faqs || [], summary: meta.summary || '' });
  write(p === '/' ? 'index.html' : p.replace(/^\//, '') + 'index.html', page({ path: p, ...opts }));
}
const indBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
const HOME = { name: 'Home', path: '/' };
const updated = `<p class="meta">${ICON.clock}Updated ${C.updatedDisplay} · Lifeline Crew, ${esc(C.address.locality)}, ${esc(C.address.city)}</p>`;
const lc = (s) => (/^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);

// ---------- shared blocks ----------
const STEPS = (what) => [
  ['Send the requirement', `WhatsApp or call ${C.phoneDisplay} with the role, how many people, the location and the date you need them${what ? ' for ' + what : ''}.`],
  ['Get a written quote', 'We confirm wages, shifts, the hiring model and our charges in writing. Turnaround: {{TURNAROUND}}.'],
  ['Interview shortlisted people', 'We screen candidates against your checklist and send profiles. You interview and select.'],
  ['Joining and follow-up', 'We coordinate documents and joining day. Replacement terms if someone leaves: {{REPLACEMENT}}.'],
];
const steps = (what) => `<section class="alt"><div class="wrap"><h2>How hiring through Lifeline works</h2>
<ol class="steps">${STEPS(what).map(([h, x]) => `<li><strong>${esc(h)}</strong>${t(x)}</li>`).join('')}</ol></div></section>`;

const SERVICE_CTX = { 'permanent-placement': 'on permanent placement', 'contract-staffing': 'on contract staffing', 'bulk-hiring': 'in a bulk hiring drive', 'payroll-outsourcing': 'on payroll outsourcing' };
// Right-hand hero card: tap a chip to open WhatsApp with a message about that exact need.
const heroCard = (title, chips, note = 'WhatsApp opens with your message ready. Add headcount and location, then send.') =>
  `<aside class="hero-card" aria-label="${esc(title)}"><p class="hc-title">${ICON.chat}${esc(title)}</p>${chips}<p class="hc-note">${esc(note)}</p></aside>`;

const linkCards = (items, base, iconFn, sub) => `<div class="grid grid-ic">${items.map((x) => `<a class="card card-ic" href="/${base}/${x.slug}/"><span class="ic">${iconFn(x)}</span><span><span class="ct">${esc(x.name)}</span>${sub ? `<small>${esc(sub(x))}</small>` : ''}</span>${ICON.arrow}</a>`).join('')}</div>`;
const roleList = (ind) => ind.roles.flatMap((g) => g.items);

const TURN = C.facts.TURNAROUND || '';
const turnParts = TURN.match(/(\d+)\s*hours?.*?(\d+)\s*days?/i);
const stats = [
  C.googleRating ? { n: `${C.googleRating.rating}<span>★</span>`, l: `Google rating from ${C.googleRating.count} reviews`, s: `as of ${C.googleRating.asOf}` } : null,
  turnParts ? { n: `${turnParts[1]}<span>hrs</span>`, l: 'to supply helpers', s: 'owner-confirmed turnaround' } : null,
  turnParts ? { n: `${turnParts[2]}<span>days</span>`, l: 'for skilled roles', s: 'profiles to your inbox' } : null,
  { n: `${industries.length}`, l: 'industries served', s: 'factories to hospitals' },
  { n: `${cities.length}`, l: 'Tamil Nadu cities and districts', s: 'served from Chennai' },
].filter(Boolean);
const statStrip = `<div class="stats">${stats.map((s) => `<div class="stat"><b>${s.n}</b><span>${esc(s.l)}</span><small>${esc(s.s)}</small></div>`).join('')}</div>`;

const MODEL_FACTS = {
  'permanent-placement': ['Yours', 'A one-time fee after joining'],
  'contract-staffing': ['Ours', 'A monthly invoice: wages, PF, ESI and our charge'],
  'bulk-hiring': ['Yours or ours', 'Per hire, or monthly if on contract'],
  'payroll-outsourcing': ['Ours', 'A monthly fee for running payroll'],
};

// Dot map of the 20 districts, plotted from real coordinates, with lines from the Chennai office.
const GEO = {
  chennai: [13.08, 80.27, 10, 4, 'start'], tiruvallur: [13.14, 79.91, -9, -4, 'end'], kanchipuram: [12.83, 79.70, -9, 4, 'end'],
  chengalpattu: [12.69, 79.98, 9, 13, 'start'], vellore: [12.92, 79.13, -9, -6, 'end'], hosur: [12.74, 77.83, -9, 4, 'end'],
  krishnagiri: [12.52, 78.21, 9, 4, 'start'], salem: [11.66, 78.15, 9, 4, 'start'], namakkal: [11.22, 78.17, 9, 4, 'start'],
  erode: [11.34, 77.72, -9, 2, 'end'], tiruppur: [11.11, 77.34, -9, -6, 'end'], coimbatore: [11.02, 76.96, 0, 19, 'middle'],
  karur: [10.96, 78.08, 9, 5, 'start'], dindigul: [10.36, 77.98, -9, 4, 'end'], tiruchirappalli: [10.79, 78.70, 0, 19, 'middle'],
  thanjavur: [10.79, 79.14, 9, 4, 'start'], madurai: [9.93, 78.12, 9, 4, 'start'], thoothukudi: [8.76, 78.13, 9, 6, 'start'],
  tirunelveli: [8.71, 77.76, -9, 4, 'end'], nagercoil: [8.18, 77.41, 9, 4, 'start'],
};
// Approximate state outline (coast and borders), traced from a few known points. Decorative; the caption says it is approximate.
const TN_OUTLINE = [[13.55,80.32],[13.08,80.29],[12.62,80.19],[11.93,79.83],[11.4,79.76],[10.85,79.85],[10.3,79.86],[10.0,79.3],[9.74,79.0],[9.3,79.1],[9.1,78.6],[8.78,78.16],[8.5,78.12],[8.08,77.54],[8.3,77.2],[9.0,77.15],[9.5,77.25],[10.0,77.15],[10.3,76.9],[10.7,76.8],[11.0,76.6],[11.4,76.4],[11.65,76.6],[11.8,76.95],[12.0,77.45],[12.25,77.6],[12.6,77.55],[12.85,77.95],[12.95,78.3],[13.05,78.55],[12.95,79.0],[13.2,79.4],[13.35,79.85]];
const px = (lat, lon) => [Math.round((lon - 75.6) * 100 + 10), Math.round((13.5 - lat) * 100 + 20)];
function tnMap() {
  const hq = px(GEO.chennai[0], GEO.chennai[1]);
  const pts = cities.filter((c) => GEO[c.slug]).map((c) => ({ c, g: GEO[c.slug], p: px(GEO[c.slug][0], GEO[c.slug][1]) }));
  return `<figure class="tn-map"><svg viewBox="0 0 590 600" role="img" aria-labelledby="tnm-t"><title id="tnm-t">Map of the 20 Tamil Nadu cities and districts Lifeline Crew serves from its Chennai office</title>
<path class="tn-land" d="M${TN_OUTLINE.map(([la, lo]) => px(la, lo).join(' ')).join('L')}Z"/>
<g class="tn-lines">${pts.filter((x) => x.c.slug !== 'chennai').map((x) => `<path d="M${hq[0]} ${hq[1]}L${x.p[0]} ${x.p[1]}"/>`).join('')}</g>
${pts.map((x) => `<a href="/cities/${x.c.slug}/" class="tn-pt${x.c.slug === 'chennai' ? ' tn-hq' : ''}"><circle cx="${x.p[0]}" cy="${x.p[1]}" r="${x.c.slug === 'chennai' ? 10 : 6}"/><text x="${x.p[0] + x.g[2]}" y="${x.p[1] + x.g[3]}" text-anchor="${x.g[4]}">${esc(x.c.name)}</text></a>`).join('')}
</svg><figcaption>City positions are to scale; the state outline is approximate. Chennai is our office, and every other district is served from there.</figcaption></figure>`;
}

// ---------------- HOME ----------------
const homeFaqs = [
  { q: 'How much does a manpower agency charge in Chennai?', a: "For permanent placement, published market rates run from about 8.33% to 16.67% of the hire's annual CTC. For contract staffing, agencies add a monthly service charge to wages, PF and ESI, plus 18% GST. Rates depend on role, volume and duration. Lifeline Crew's fee is {{FEE}}. WhatsApp your role for a written quote." },
  { q: 'How fast can Lifeline Crew supply staff?', a: 'Speed depends on the role, the location and the wage offered. Helpers and housekeeping staff near Chennai usually close faster than skilled operators or nurses in smaller towns. Our turnaround: {{TURNAROUND}}. Send the role, headcount, location and joining date on WhatsApp and we will give you a date in writing.' },
  { q: 'Do you do bulk hiring?', a: 'Yes. Lifeline Crew handles bulk hiring for factories, warehouses, BPOs and retail chains across Tamil Nadu, from our Chennai office. Tell us the roles, headcount per shift, wage and joining date.[[ Largest order size so far: {{CAPACITY}}.]] Our bulk hiring checklist explains what to prepare before the drive starts.' },
  { q: 'What is the replacement guarantee?', a: "If a placed person leaves or does not work out within the agreed window, the agency finds a replacement. Market practice in India ranges from 30 to 90 days for permanent placement. For contract staff, replacement continues for the life of the contract. Lifeline Crew's replacement terms are {{REPLACEMENT}}." },
  { q: 'Contract staffing or permanent placement: which is better?', a: 'Contract staffing suits seasonal peaks, projects and roles where volume is uncertain; the worker stays on the agency payroll and you pay monthly. Permanent placement suits long-term and skilled roles; the worker joins your payroll and you pay the agency once. Many employers use both. Our comparison guide sets out costs and rules.' },
  { q: 'What documents do I need to hire through an agency?', a: 'For contract staffing you sign a service agreement and share your work-order details. If the contractor has 50 or more contract workers, it needs a licence under the OSH Code, and you may have principal-employer duties. Workers bring identity, address, bank and education documents. We send a checklist with every quote.' },
  { q: 'Which agency supplies housekeeping, security, BPO and factory staff in Chennai?', a: 'Lifeline Crew supplies housekeeping, BPO and call-centre, office and factory staff to employers in Chennai and across Tamil Nadu. Security guards are different: only agencies holding a PSARA licence may supply them, so ask any agency for that licence. WhatsApp +91 99622 99076 with your requirement.' },
];
{
  const homeSummary = `<strong>Lifeline Crew</strong> is a manpower supply and recruitment agency based in ${esc(C.address.locality)}, Chennai. We supply factory workers, BPO and call-centre staff, office and front-desk staff, housekeeping, retail, hospital and warehouse staff to employers across Tamil Nadu, through permanent placement, contract staffing and bulk hiring. Turnaround: ${tok('{{TURNAROUND}}')}.`;
  const body = `<section class="hero hero-home"><div class="wrap hero-grid">
<div class="hero-copy">
<p class="pill">${ICON.pin}Aminjikarai, Chennai. Supplying staff across Tamil Nadu</p>
<h1>Manpower supply and recruitment agency for employers across Tamil Nadu</h1>
<p class="ta" lang="ta">தமிழ்நாடு முழுவதும் நிறுவனங்களுக்கு பணியாளர்களை வழங்குகிறோம்</p>
<p class="summary">${homeSummary}</p>
${ctaRow('hero', DEFAULT_WA())}
${C.googleRating ? `<a class="rating" href="${esc(C.googleRating.url)}" rel="noopener"><span class="stars">${ICON.star.repeat(5)}</span><span><strong>${C.googleRating.rating} on Google</strong>, ${C.googleRating.count} reviews (as of ${C.googleRating.asOf})</span></a>` : ''}
</div>
${composer({ loc: 'hero_home', title: 'Build your staff request' })}
</div></section>

${turnParts ? `<section class="board" aria-labelledby="board-h"><div class="wrap board-grid">
<div><h2 id="board-h">How fast we supply</h2><p>Confirmed turnaround from the day we agree your requirement in writing.</p></div>
<dl class="board-rows">
<div><dt>Helpers: loaders, packers and general helpers</dt><dd><b>${turnParts[1]}</b> hours</dd></div>
<div><dt>Skilled roles: operators, nurses, accounts, IT, supervisors</dt><dd><b>${turnParts[2]}</b> days</dd></div>
</dl></div></section>` : ''}

<section aria-labelledby="models-h"><div class="wrap">
<h2 id="models-h">Four ways to hire through Lifeline Crew</h2>
<p class="lead">Pick the model that fits the role. Each has its own page with what is included, costs and common questions.</p>
<div class="models">${services.map((s) => { const m = MODEL_FACTS[s.slug] || ['', '']; return `<article class="model"><span class="ic">${ICON[s.icon]}</span><h3><a href="/services/${s.slug}/">${esc(s.name)}</a></h3><p>${esc(s.short)}</p><dl><div><dt>Whose payroll</dt><dd>${m[0]}</dd></div><div><dt>You pay</dt><dd>${m[1]}</dd></div></dl>${waChip('home_models', `Ask about ${lc(s.name)}`, s.waText)}</article>`; }).join('')}</div>
<p><a class="link" href="/guides/contract-vs-permanent-vs-payroll-staffing/">Compare contract, permanent and payroll staffing ${ICON.arrow}</a></p>
</div></section>

<section class="alt" aria-labelledby="ind-h"><div class="wrap">
<h2 id="ind-h">Industries we supply staff to</h2>
<p class="lead">Open an industry for the roles we fill and the questions employers ask, or tap the green button to message us about that industry straight away.</p>
<ul class="ind-list">${industries.map((x) => `<li><a class="ind-link" href="/industries/${x.slug}/"><span class="ic">${indIcon(x.slug)}</span><span><span class="ct">${esc(x.name)}</span><small>${esc(roleList(x).slice(0, 3).join(', '))}</small></span></a><a class="ind-wa" href="${esc(waHref(waNeed(`staff for ${x.name}`, '\nRole: ')))}" data-loc="home_industry" aria-label="WhatsApp us about ${esc(x.name)} staff">${ICON.wa}</a></li>`).join('')}</ul>
</div></section>

<section class="cities-sec" aria-labelledby="city-h"><div class="wrap map-grid">
<div><h2 id="city-h">Twenty districts, one Chennai office</h2>
<p class="lead">Every line on the map starts at our office in Aminjikarai. Each city page covers its industrial estates, local industries and the roles employers there hire.</p>
<ul class="city-list">${cities.map((c) => `<li><a href="/cities/${c.slug}/">${esc(c.name)}</a></li>`).join('')}</ul></div>
${tnMap()}
</div></section>

${steps('')}

<section id="quote-sec" class="quote-sec"><div class="wrap quote-grid">
<div><h2>Prefer a form? Six fields, one WhatsApp message</h2><p class="lead">The form writes the message for you so nothing gets missed: industry, role, headcount, location, date and your name.</p>
<ul class="ticks"><li>${ICON.shield}Written quote before you commit</li><li>${ICON.clock}Turnaround: ${tok('{{TURNAROUND}}')}</li><li>${ICON.users}Permanent, contract, bulk or payroll</li></ul></div>
${quoteForm({ id: 'quote' })}</div></section>

${faqHtml(homeFaqs)}

<section class="alt"><div class="wrap"><h2>Hiring guides</h2><div class="grid grid-lg">${guides.map((g) => `<a class="card card-guide" href="/guides/${g.slug}/"><span class="ic">${ICON.book}</span><span class="ct">${esc(g.h1)}</span><small>${esc(g.description)}</small></a>`).join('')}</div></div></section>

${finalCta(DEFAULT_WA())}`;
  emit('/', {
    title: 'Manpower Supply Agency in Tamil Nadu | Lifeline Crew',
    description: 'Lifeline Crew supplies factory, BPO, office, housekeeping, hospital and retail staff to employers across Tamil Nadu. WhatsApp +91 99622 99076 for a quote today.',
    body,
    schema: [faqNode(homeFaqs), howToNode(`${C.url}/#howto`, 'How to hire staff through Lifeline Crew', STEPS(''))],
  }, { keyword: 'manpower agency tamil nadu', type: 'home', faqs: homeFaqs });
}
function DEFAULT_WA() { return 'Hi Lifeline Crew, I need staff.\nRole: \nHow many: \nWork location: \nNeeded by: '; }

// ---------------- SERVICES ----------------
for (const s of services) {
  const p = `/services/${s.slug}/`;
  const crumbs = [HOME, { name: 'Services', path: '/services/' }, { name: s.name, path: p }];
  const g = guideBySlug[s.guide];
  const others = services.filter((x) => x !== s);
  const body = `<section class="hero"><div class="wrap hero-grid">
<div class="hero-copy"><span class="ic ic-xl">${ICON[s.icon]}</span>
<h1>${esc(s.h1)}</h1>
<p class="ta" lang="ta">${esc(s.tamil)}</p>
<p class="summary">${t(s.summary)}</p>
${ctaRow('hero', s.waText)}
${updated}</div>
${composer({ loc: 'hero_service', title: `Request ${lc(s.name)}`, ctx: SERVICE_CTX[s.slug] || '' })}
</div></section>

<section><div class="wrap cols">
<div><h2>What ${lc(s.name)} includes</h2><ul class="ticks ticks-col">${s.included.map((x) => `<li>${ICON.shield}<span>${t(x)}</span></li>`).join('')}</ul></div>
<div><h2>When ${lc(s.name)} suits you</h2><ul class="ticks ticks-col">${s.suits.map((x) => `<li>${ICON.userCheck}<span>${t(x)}</span></li>`).join('')}</ul>
<div class="note"><h3>What does ${lc(s.name)} cost?</h3><p>${t(s.cost)}</p></div></div>
</div></section>

${steps(lc(s.name))}

<section><div class="wrap"><h2>${esc(s.name)} by industry</h2>
${linkCards(s.relatedIndustries.map((x) => indBySlug[x]).filter(Boolean), 'industries', (x) => indIcon(x.slug), (x) => roleList(x).slice(0, 3).join(', '))}
${g ? `<p><a class="link" href="/guides/${g.slug}/">Read the guide: ${esc(g.h1)} ${ICON.arrow}</a></p>` : ''}
</div></section>

${faqHtml(s.faqs, `${s.name}: questions employers ask`)}

<section class="quote-sec"><div class="wrap">${quoteForm({ service: s.name })}</div></section>

<section class="alt"><div class="wrap"><h2>Other hiring models</h2><div class="grid grid-lg">${others.map((o) => `<a class="card card-ic" href="/services/${o.slug}/"><span class="ic">${ICON[o.icon]}</span><span><span class="ct">${esc(o.name)}</span><small>${esc(o.short)}</small></span>${ICON.arrow}</a>`).join('')}</div></div></section>

${finalCta(s.waText, `Ready to start ${lc(s.name)}? Message us now.`)}`;
  emit(p, {
    title: s.title, description: s.description, body, crumbs, waContext: { label: `${s.name}: send my requirement`, text: s.waText },
    schema: [
      { '@type': 'Service', '@id': `${C.url}${p}#service`, name: s.name, serviceType: s.name, description: plain(s.summary) || s.description, provider: { '@id': `${C.url}/#org` }, areaServed: { '@type': 'State', name: 'Tamil Nadu' }, audience: { '@type': 'BusinessAudience', name: 'Employers in Tamil Nadu' }, url: C.url + p, availableChannel: { '@type': 'ServiceChannel', serviceUrl: `https://wa.me/${C.wa}`, servicePhone: { '@type': 'ContactPoint', telephone: C.tel } } },
      faqNode(s.faqs),
    ],
  }, { keyword: s.primaryKeyword, type: 'service', faqs: s.faqs, summary: s.summary });
}

emit('/services/', {
  title: 'Staffing Services Across Tamil Nadu | Lifeline Crew',
  description: 'Permanent placement, contract staffing, bulk hiring and payroll outsourcing for employers across Tamil Nadu. Compare the models, then WhatsApp us your role.',
  crumbs: [HOME, { name: 'Services', path: '/services/' }],
  schema: [{ '@type': 'ItemList', name: 'Staffing services', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${C.url}/services/${s.slug}/` })) }],
  body: `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>Staffing Services for Employers in Tamil Nadu</h1><p class="ta" lang="ta">எங்கள் சேவைகள்</p>
<p class="summary">Lifeline Crew offers ${services.length} hiring models: ${services.map((s) => lc(s.name)).join(', ').replace(/, ([^,]*)$/, ' and $1')}. Permanent placement puts the person on your payroll for a one-time fee. Contract staffing and payroll outsourcing keep people on our payroll for a monthly charge. Bulk hiring fills many roles for one start date.</p>${ctaRow('hero', DEFAULT_WA())}</div>
${composer({ loc: 'hero_services' })}</div></section>
<section><div class="wrap"><div class="grid grid-svc">${services.map((s) => `<article class="card svc"><span class="ic ic-lg">${ICON[s.icon]}</span><h2 class="h3"><a href="/services/${s.slug}/">${esc(s.name)}</a></h2><p>${esc(s.short)}</p><div class="svc-cta"><a class="link" href="/services/${s.slug}/">Details ${ICON.arrow}</a>${waChip('services_hub', 'Enquire', s.waText)}</div></article>`).join('')}</div></div></section>
<section class="alt"><div class="wrap"><h2>Which hiring model should I choose?</h2>
<div class="tbl"><table><thead><tr><th>Model</th><th>Whose payroll</th><th>How you pay</th><th>Suits</th></tr></thead><tbody>
<tr><td><strong><a href="/services/permanent-placement/">Permanent placement</a></strong></td><td>Yours</td><td>One-time fee after joining</td><td>Long-term and skilled roles</td></tr>
<tr><td><strong><a href="/services/contract-staffing/">Contract staffing</a></strong></td><td>Lifeline's</td><td>Monthly invoice</td><td>Peaks, projects, helper and operator roles</td></tr>
<tr><td><strong><a href="/services/bulk-hiring/">Bulk hiring</a></strong></td><td>Either</td><td>Per hire or monthly</td><td>Many similar roles for one start date</td></tr>
${C.payrollOutsourcing ? '<tr><td><strong><a href="/services/payroll-outsourcing/">Payroll outsourcing</a></strong></td><td>Lifeline\'s</td><td>Monthly invoice</td><td>People you have already chosen</td></tr>' : ''}
</tbody></table></div>
<p><a class="link" href="/guides/contract-vs-permanent-vs-payroll-staffing/">Read the full comparison guide ${ICON.arrow}</a></p></div></section>
${finalCta(DEFAULT_WA())}`,
}, { keyword: 'staffing services tamil nadu', type: 'hub' });

// ---------------- INDUSTRIES ----------------
for (const ind of industries) {
  const p = `/industries/${ind.slug}/`;
  const crumbs = [HOME, { name: 'Industries', path: '/industries/' }, { name: ind.name, path: p }];
  const waText = waNeed(`staff for ${ind.name}`, '\nRole: ');
  const body = `<section class="hero"><div class="wrap hero-grid">
<div class="hero-copy"><span class="ic ic-xl">${indIcon(ind.slug)}</span>
<h1>${esc(ind.h1)}</h1>
<p class="ta" lang="ta">${esc(ind.tamil)}</p>
<p class="summary">${t(ind.summary)}</p>
${ctaRow('hero', waText)}
${updated}</div>
${composer({ loc: 'hero_role', title: `Request ${lc(ind.name)} staff`, roles: roleList(ind).slice(0, 8), ctx: `(${ind.name})` })}
</div></section>

<section><div class="wrap"><h2>Roles we supply</h2>
<p class="lead">Tap any role to send us a WhatsApp message about it. Add headcount and location, then press send.</p>
<div class="grid grid-lg">${ind.roles.map((g) => `<div class="card role-card"><h3>${esc(g.group)}</h3><div class="chips chips-sm">${g.items.map((r) => waChip('role_card', r, waNeed(`${lc(r)} for ${ind.name}`))).join('')}</div></div>`).join('')}</div>
</div></section>

<section class="alt"><div class="wrap"><h2>Hiring models for ${esc(ind.name.toLowerCase())}</h2>
<div class="tbl"><table><thead><tr><th>Model</th><th>When it fits</th><th>Example</th></tr></thead><tbody>
${ind.models.map((m) => { const s = services.find((x) => x.name.toLowerCase() === m.model.toLowerCase()); return `<tr><td><strong>${s ? `<a href="/services/${s.slug}/">${esc(m.model)}</a>` : esc(m.model)}</strong></td><td>${t(m.bestFor)}</td><td>${t(m.example)}</td></tr>`; }).join('')}
</tbody></table></div>
<p class="meta">Examples are illustrations of typical requests, not named clients.</p>
</div></section>

<section><div class="wrap prose"><h2>What matters when hiring for ${esc(ind.name.toLowerCase())} in Tamil Nadu</h2>
${ind.context.map((x) => `<p>${t(x)}</p>`).join('')}
<h3>What we check before sending candidates</h3>
<ul class="ticks ticks-col">${ind.screening.map((x) => `<li>${ICON.shield}<span>${t(x)}</span></li>`).join('')}</ul>
</div></section>

${steps(ind.name.toLowerCase())}

${faqHtml(ind.faqs, `${ind.name} hiring: questions employers ask`)}

<section class="quote-sec"><div class="wrap">${quoteForm({ industry: ind.name })}</div></section>

<section class="alt"><div class="wrap cols">
<div><h2>Related industries</h2><ul class="links">${ind.relatedIndustries.map((s) => indBySlug[s]).filter(Boolean).map((r) => `<li><a href="/industries/${r.slug}/">${indIcon(r.slug)}${esc(r.name)}</a></li>`).join('')}</ul></div>
<div><h2>Where we supply ${esc(ind.name.toLowerCase())} staff</h2><ul class="links">${ind.relatedCities.map((s) => cityBySlug[s]).filter(Boolean).map((c) => `<li><a href="/cities/${c.slug}/">${ICON.pin}${esc(ind.name)} staff in ${esc(c.name)}</a></li>`).join('')}</ul></div>
</div></section>

${finalCta(waText, `Need ${ind.name.toLowerCase()} staff? Message us now.`)}`;
  emit(p, {
    title: ind.title, description: ind.description, body, crumbs, waContext: { label: `Staff for ${ind.name}`, text: waText },
    schema: [
      { '@type': 'Service', '@id': `${C.url}${p}#service`, name: ind.h1, serviceType: 'Manpower supply and recruitment', description: plain(ind.summary) || ind.description, provider: { '@id': `${C.url}/#org` }, areaServed: { '@type': 'State', name: 'Tamil Nadu' }, audience: { '@type': 'BusinessAudience', name: `${ind.name} employers` }, url: C.url + p,
        hasOfferCatalog: { '@type': 'OfferCatalog', name: `${ind.name} roles`, itemListElement: roleList(ind).map((r) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${r} supply` } })) } },
      faqNode(ind.faqs),
    ],
  }, { keyword: ind.primaryKeyword, type: 'industry', faqs: ind.faqs, summary: ind.summary });
}

// ---------------- CITIES ----------------
for (const c of cities) {
  const p = `/cities/${c.slug}/`;
  const crumbs = [HOME, { name: 'Cities', path: '/cities/' }, { name: c.name, path: p }];
  const waText = waNeed(`staff in ${c.name}`, '\nRole: ').replace('\nWork location: ', '\nArea: ');
  const body = `<section class="hero"><div class="wrap hero-grid">
<div class="hero-copy"><p class="pill">${ICON.pin}${esc(c.name)}${c.district && c.district !== c.name ? ` · ${esc(c.district)} district` : ''}</p>
<h1>${esc(c.h1)}</h1>
<p class="ta" lang="ta">${esc(c.tamilName)}: நிறுவனங்களுக்கு பணியாளர்கள்</p>
<p class="summary">${t(c.summary)}</p>
${ctaRow('hero', waText)}
${updated}</div>
${composer({ loc: 'hero_role', title: `Request staff in ${c.name}`, roles: c.roles.slice(0, 8), city: c.name })}
</div></section>

<section><div class="wrap"><h2>Industrial areas and business districts we serve in ${esc(c.name)}</h2>
<div class="grid grid-lg">${c.areas.map((a) => `<div class="card area"><h3>${ICON.pin}${esc(a.name)}</h3><p>${t(a.note)}</p></div>`).join('')}</div>
</div></section>

<section class="alt"><div class="wrap"><h2>Local industries and the staff they hire</h2>
<div class="grid grid-lg">${c.industries.map((x) => `<div class="card"><h3>${x.industrySlug && indBySlug[x.industrySlug] ? `<a href="/industries/${x.industrySlug}/">${esc(x.name)}</a>` : esc(x.name)}</h3><p>${t(x.note)}</p>${waChip('city_industry', `Ask about ${lc(x.name)} staff`, waNeed(`${lc(x.name)} staff in ${c.name}`, '\nRole: ').replace('\nWork location: ', '\nArea: '))}</div>`).join('')}</div>
${c.employers && c.employers.length ? `<p><strong>Large employers in the area include</strong> ${c.employers.map(esc).join('; ')}.</p><p class="meta">Named as examples of local employers, not Lifeline clients.</p>` : ''}
</div></section>

<section><div class="wrap prose"><h2>Typical roles employers in ${esc(c.name)} hire</h2>
<p>Tap a role to message us about it on WhatsApp.</p>
<div class="chips chips-sm">${c.roles.map((r) => waChip('city_role', r, waNeed(`${lc(r)} in ${c.name}`).replace('\nWork location: ', '\nArea: '))).join('')}</div>
<h2>Hiring in ${esc(c.name)}: what to plan for</h2>
${c.localNotes.map((x) => `<p>${t(x)}</p>`).join('')}
${c.slug !== 'chennai' ? `<p class="note">Lifeline Crew serves ${esc(c.name)} from our office in ${esc(C.address.locality)}, Chennai. Call or WhatsApp ${C.phoneDisplay}; we confirm the joining plan and timeline before you commit.</p>` : ''}
</div></section>

${steps('')}

${faqHtml(c.faqs, `Hiring staff in ${c.name}: common questions`)}

<section class="quote-sec"><div class="wrap">${quoteForm({ city: c.name })}</div></section>

<section class="alt"><div class="wrap cols">
<div><h2>Industries we staff in ${esc(c.name)}</h2><ul class="links">${c.relatedIndustries.map((s) => indBySlug[s]).filter(Boolean).map((r) => `<li><a href="/industries/${r.slug}/">${indIcon(r.slug)}${esc(r.name)} staff</a></li>`).join('')}</ul></div>
<div><h2>Nearby areas</h2><ul class="links">${c.nearby.map((s) => cityBySlug[s]).filter(Boolean).map((n) => `<li><a href="/cities/${n.slug}/">${ICON.pin}Manpower supply in ${esc(n.name)}</a></li>`).join('')}</ul></div>
</div></section>

${finalCta(waText, `Need staff in ${c.name}? Message us now.`)}`;
  emit(p, {
    title: c.title, description: c.description, body, crumbs, waContext: { label: `Staff in ${c.name}`, text: waText },
    schema: [
      { '@type': 'Service', '@id': `${C.url}${p}#service`, name: c.h1, serviceType: 'Manpower supply and recruitment', description: plain(c.summary) || c.description, provider: { '@id': `${C.url}/#org` }, areaServed: { '@type': 'City', name: c.name, containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } }, url: C.url + p },
      faqNode(c.faqs),
    ],
  }, { keyword: c.primaryKeyword, type: 'city', faqs: c.faqs, summary: c.summary });
}

// ---------------- GUIDES ----------------
for (const g of guides) {
  const p = `/guides/${g.slug}/`;
  const crumbs = [HOME, { name: 'Guides', path: '/guides/' }, { name: g.h1, path: p }];
  const toc = [...g.bodyHtml.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)];
  const waText = `Hi Lifeline Crew, I read your guide "${g.h1}" and have a staffing question.\nQuestion: `;
  const body = `<article><section class="hero hero-guide"><div class="wrap narrow">
<p class="pill">${ICON.book}Hiring guide</p>
<h1>${esc(g.h1)}</h1>
<p class="ta" lang="ta">${esc(g.tamil)}</p>
<p class="summary">${t(g.summary)}</p>
${ctaRow('hero', waText)}
<p class="meta">${ICON.clock}By <a href="/about/">Lifeline Crew</a>, reviewed by ${esc(C.founder.name)} · Published ${g.published} · Updated ${C.updatedDisplay}</p>
</div></section>
<section><div class="wrap guide-grid">
<nav class="toc" aria-label="On this page"><strong>On this page</strong><ol>${toc.map((m) => `<li><a href="#${m[1]}">${m[2]}</a></li>`).join('')}</ol>
<div class="toc-cta"><p>Have a question about your own hiring?</p>${waBtn('guide_toc', waText, 'Ask on WhatsApp', 'btn-sm')}</div></nav>
<div class="prose">${tok(g.bodyHtml)}</div>
</div></section></article>
${faqHtml(g.faqs, 'Related questions')}
<section class="quote-sec"><div class="wrap">${quoteForm({})}</div></section>
<section class="alt"><div class="wrap"><h2>More hiring guides</h2><div class="grid grid-lg">${guides.filter((x) => x !== g).map((x) => `<a class="card card-guide" href="/guides/${x.slug}/"><span class="ic">${ICON.book}</span><span class="ct">${esc(x.h1)}</span></a>`).join('')}</div></div></section>
${finalCta(waText)}`;
  emit(p, {
    title: g.title, description: g.description, body, crumbs, ogType: 'article', waContext: { label: 'Ask about this guide', text: waText },
    schema: [
      { '@type': 'Article', '@id': `${C.url}${p}#article`, headline: g.h1, description: g.description, datePublished: g.published, dateModified: C.updated, author: { '@id': `${C.url}/#org` }, reviewedBy: { '@id': `${C.url}/about/#founder` }, publisher: { '@id': `${C.url}/#org` }, mainEntityOfPage: C.url + p, image: `${C.url}/assets/og-default.png`, inLanguage: 'en-IN', about: { '@type': 'Thing', name: g.primaryKeyword } },
      faqNode(g.faqs),
    ],
  }, { keyword: g.primaryKeyword, type: 'guide', faqs: g.faqs, summary: g.summary });
}

// ---------------- HUBS ----------------
const itemList = (name, items, base) => ({ '@type': 'ItemList', name, itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name || x.h1, url: `${C.url}/${base}/${x.slug}/` })) });
emit('/industries/', {
  title: 'Industries We Staff Across Tamil Nadu | Lifeline Crew',
  description: 'Staff for IT, BPO, factories, automobile, pharma, textile, retail, hospitals, hostels, e-commerce and logistics across Tamil Nadu. WhatsApp us your requirement.',
  crumbs: [HOME, { name: 'Industries', path: '/industries/' }],
  schema: [itemList('Industries served', industries, 'industries')],
  body: `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>Industries We Supply Staff to Across Tamil Nadu</h1><p class="ta" lang="ta">நாங்கள் சேவை செய்யும் தொழில்கள்</p>
<p class="summary">Lifeline Crew supplies staff to ${industries.length} industries across Tamil Nadu, from Chennai factories and IT offices to hospitals, hostels and warehouses. Choose your industry to see the roles we fill, the hiring models that suit it, and answers to the questions employers ask. WhatsApp or call ${C.phoneDisplay}.</p>${ctaRow('hero', DEFAULT_WA())}</div>
${heroCard('Message us about your industry', `<div class="chips">${industries.map((i) => waChip('hero_industry', i.name, waNeed(`staff for ${i.name}`, '\nRole: '))).join('')}</div>`)}</div></section>
<section><div class="wrap">${linkCards(industries, 'industries', (x) => indIcon(x.slug), (x) => roleList(x).slice(0, 4).join(', '))}</div></section>
${finalCta(DEFAULT_WA())}`,
}, { keyword: 'manpower supply by industry', type: 'hub' });

emit('/cities/', {
  title: 'Manpower Supply Across Tamil Nadu Cities | Lifeline',
  description: 'Manpower supply in Chennai, Sriperumbudur, Coimbatore, Hosur, Tiruppur, Madurai, Trichy and 13 more Tamil Nadu districts. WhatsApp Lifeline your requirement.',
  crumbs: [HOME, { name: 'Cities', path: '/cities/' }],
  schema: [itemList('Cities and districts served', cities, 'cities')],
  body: `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>Manpower Supply Across Tamil Nadu: Cities and Districts</h1><p class="ta" lang="ta">தமிழ்நாட்டின் நகரங்கள் மற்றும் மாவட்டங்கள்</p>
<p class="summary">Lifeline Crew works from Aminjikarai, Chennai and supplies staff to employers in ${cities.length} Tamil Nadu cities and districts. Each page lists that area's industrial estates, local industries and the roles employers there hire. WhatsApp or call ${C.phoneDisplay} for districts not listed.</p>${ctaRow('hero', DEFAULT_WA())}</div>
${heroCard('Message us about your city', `<div class="chips">${cities.map((c) => waChip('hero_city', c.name, waNeed(`staff in ${c.name}`, '\nRole: ').replace('\nWork location: ', '\nArea: '))).join('')}</div>`)}</div></section>
<section><div class="wrap">${linkCards(cities, 'cities', () => ICON.pin, (x) => x.areas.slice(0, 3).map((a) => a.name).join(', '))}</div></section>
${finalCta(DEFAULT_WA())}`,
}, { keyword: 'manpower supply tamil nadu districts', type: 'hub' });

emit('/guides/', {
  title: 'Hiring Guides for Tamil Nadu Employers | Lifeline Crew',
  description: 'Plain guides on contract vs permanent staffing, bulk hiring, choosing a manpower agency and staffing costs in Tamil Nadu. Questions? WhatsApp Lifeline today.',
  crumbs: [HOME, { name: 'Guides', path: '/guides/' }],
  schema: [{ '@type': 'ItemList', name: 'Hiring guides', itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.h1, url: `${C.url}/guides/${g.slug}/` })) }],
  body: `<section class="hero"><div class="wrap narrow"><h1>Hiring Guides for Employers in Tamil Nadu</h1><p class="ta" lang="ta">நிறுவனங்களுக்கான ஆட்சேர்ப்பு வழிகாட்டிகள்</p>
<p class="summary">Practical guides from Lifeline Crew, a Chennai manpower agency: how contract, permanent and payroll staffing differ, how to run a bulk hiring drive, how to check an agency before you sign, and what a contract worker really costs in Tamil Nadu in 2026. Questions about your own hiring? WhatsApp or call ${C.phoneDisplay}.</p>${ctaRow('hero', DEFAULT_WA())}</div></section>
<section><div class="wrap"><div class="grid grid-lg">${guides.map((g) => `<a class="card card-guide" href="/guides/${g.slug}/"><span class="ic">${ICON.book}</span><span class="ct">${esc(g.h1)}</span><small>${esc(g.description)}</small></a>`).join('')}</div></div></section>
${finalCta('Hi Lifeline Crew, I have a staffing question.\nQuestion: ')}`,
}, { keyword: 'staffing guides tamil nadu', type: 'hub' });

// ---------------- ABOUT / CONTACT / JOBS / PRIVACY / 404 ----------------
const founderBio = C.founder.bio || 'He leads the agency\'s work with employers: taking each requirement, setting the screening checklist for the role and following up with the employer after joining.';
const factRows = [
  ['Office', addressHtml()],
  ['Phone and WhatsApp', `<a href="tel:${C.tel}" data-loc="about_table">${C.phoneDisplay}</a>`],
  ['Email', `<a href="mailto:${C.email}">${C.email}</a>`],
  ['Turnaround', tok('{{TURNAROUND}}')],
  C.facts.YEARS ? ['Years in business', esc(C.facts.YEARS)] : null,
  C.facts.PLACED ? ['People placed', esc(C.facts.PLACED)] : null,
  C.facts.LICENCES ? ['Licences and registrations', esc(C.facts.LICENCES)] : null,
  ['Hiring models', services.map((s) => `<a href="/services/${s.slug}/">${esc(s.name)}</a>`).join(', ')],
  ['Industries served', industries.map((i) => `<a href="/industries/${i.slug}/">${esc(i.name)}</a>`).join(', ')],
  ['Area served', 'All of Tamil Nadu, from our Chennai office'],
  ['Languages', 'English and Tamil'],
  C.googleRating ? ['Google rating', `${C.googleRating.rating} from ${C.googleRating.count} reviews, as of ${C.googleRating.asOf}. <a href="${esc(C.googleRating.url)}" rel="noopener">Read the reviews on Google</a>`] : null,
].filter(Boolean);
emit('/about/', {
  title: 'About Lifeline Crew | Manpower Agency, Aminjikarai, Chennai',
  description: 'Who we are: Lifeline Crew, a manpower supply and recruitment agency in Aminjikarai, Chennai, serving employers across Tamil Nadu. Call +91 99622 99076.',
  crumbs: [HOME, { name: 'About', path: '/about/' }],
  pageType: 'AboutPage',
  schema: [{ '@type': 'Person', '@id': `${C.url}/about/#founder`, name: C.founder.name, jobTitle: C.founder.role, worksFor: { '@id': `${C.url}/#org` }, ...(C.founder.qualification ? { hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: C.founder.qualification } } : {}), knowsAbout: ['Recruitment', 'Contract staffing', 'Manpower supply in Tamil Nadu'] }],
  body: `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>About Lifeline Crew, Manpower Agency in Chennai</h1><p class="ta" lang="ta">லைஃப்லைன் பிளேஸ்மென்ட்ஸ் பற்றி</p>
<p class="summary">Lifeline Crew is a manpower supply and recruitment agency in ${esc(C.address.locality)}, Chennai. We help employers across Tamil Nadu hire factory, office, BPO, housekeeping, retail, hospital, hostel and warehouse staff through permanent placement, contract staffing and bulk hiring. Reach us on WhatsApp or by phone at ${C.phoneDisplay}.</p>${ctaRow('hero', DEFAULT_WA())}</div>
<aside class="hero-card founder"><span class="avatar" aria-hidden="true">${esc(C.founder.name.split(' ').map((w) => w[0]).join('').replace(/\W/g, '').slice(0, 2))}</span><p><strong>${esc(C.founder.name)}</strong>${C.founder.qualification ? `, ${esc(C.founder.qualification)}` : ''}<br><small>${esc(C.founder.role)}</small></p><p class="hc-note">${esc(founderBio)}</p>${waChip('about_founder', 'Message the team', DEFAULT_WA())}</aside></div></section>
<section><div class="wrap prose">
<h2>Who runs Lifeline Crew?</h2>
<p>Lifeline Crew is headed by <strong>${esc(C.founder.name)}</strong>${C.founder.qualification ? ', ' + esc(C.founder.qualification) : ''}. ${esc(founderBio)}</p>
<h2>What we do</h2>
<ul class="ticks ticks-col">${services.map((s) => `<li>${ICON[s.icon]}<span><a href="/services/${s.slug}/"><strong>${esc(s.name)}</strong></a>: ${esc(s.short)}</span></li>`).join('')}</ul>
<h2>Facts about Lifeline Crew</h2>
<div class="tbl"><table><tbody>${factRows.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</tbody></table></div>
<h2>How we work</h2>
<p>We reply to WhatsApp messages during working hours, ask three questions (what role, how many people, by when), and send a written quote. We screen candidates against your checklist before you meet them. Industry pages list the checks we run for each role.</p>
<h2>What do employers say about Lifeline Crew?</h2>
<p>${C.googleRating ? `Employers and candidates have rated Lifeline Crew ${C.googleRating.rating} out of 5 across ${C.googleRating.count} Google reviews (as of ${C.googleRating.asOf}). <a href="${esc(C.googleRating.url)}" rel="noopener">Read the reviews on Google</a>.` : 'Read our reviews on Google.'} We publish named client stories only with each client's written permission.</p>
</div></section>
${finalCta(DEFAULT_WA())}`,
}, { keyword: 'lifeline placements', type: 'about' });

emit('/contact/', {
  title: 'Contact Lifeline Crew, Chennai | WhatsApp +91 99622 99076',
  description: 'Contact Lifeline Crew in Aminjikarai, Chennai. WhatsApp or call +91 99622 99076, or send your staffing requirement through the quick quote form on this page.',
  crumbs: [HOME, { name: 'Contact', path: '/contact/' }],
  pageType: 'ContactPage',
  body: `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>Contact Lifeline Crew in Chennai</h1><p class="ta" lang="ta">எங்களை தொடர்பு கொள்ள</p>
<p class="summary">The fastest way to reach Lifeline Crew is WhatsApp on ${C.phoneDisplay}. Send the role, how many people, the work location and when you need them, and we reply with questions or a quote. You can also call the same number.</p>${ctaRow('hero', DEFAULT_WA())}</div>
${composer({ loc: 'contact' })}</div></section>
<section><div class="wrap cols contact-cols">
<div><h2>Office</h2>
<div class="card contact-card"><p><strong>Lifeline Crew</strong><br>${addressHtml()}</p>
<p>${ICON.phone} <a href="tel:${C.tel}" data-loc="contact_block">${C.phoneDisplay}</a> (phone and WhatsApp)<br>${ICON.chat} <a href="mailto:${C.email}">${C.email}</a><br>${ICON.clock} ${C.hours ? esc(C.hours) : esc(C.hoursNote)}</p>
<p><a class="link" href="${esc(mapsUrl())}" rel="noopener">Get directions on Google Maps ${ICON.arrow}</a></p></div>
<div class="map"><iframe title="Map: Lifeline Crew office, Aminjikarai, Chennai" src="https://www.google.com/maps?q=${encodeURIComponent(C.mapQuery)}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>
<div>${quoteForm({ id: 'quote' })}</div>
</div></section>`,
}, { keyword: 'lifeline placements contact number', type: 'contact' });

const jobWa = 'Hi Lifeline Crew, I am looking for a job.\nName: \nJob I want: \nEducation: \nExperience: \nAreas I can travel to: ';
emit('/jobs/', {
  title: 'Jobs Through Lifeline Crew, Chennai | For Job Seekers',
  description: 'Looking for a job in Chennai or Tamil Nadu? See how to share your details with Lifeline Crew on WhatsApp and read our privacy notice first. Message us.',
  crumbs: [HOME, { name: 'Jobs', path: '/jobs/' }],
  waContext: { label: 'I am looking for a job', text: jobWa },
  body: `<section class="hero"><div class="wrap narrow"><h1>Jobs Through Lifeline Crew in Chennai and Tamil Nadu</h1><p class="ta" lang="ta">வேலை தேடுபவர்களுக்கு</p>
<p class="summary">Lifeline Crew fills roles for employers across Tamil Nadu: factory, warehouse, BPO, office, housekeeping, retail, hospital and hostel jobs. If you are looking for work, send your name, the job you want, your experience and your preferred area on WhatsApp. We contact you when a matching opening comes up.</p>
<div class="cta-row">${waBtn('jobs_hero', jobWa, 'WhatsApp your details', 'btn-lg')}</div></div></section>
<section><div class="wrap prose">
<h2>How do I apply for a job through Lifeline Crew?</h2>
<p><strong>Send a WhatsApp message to ${C.phoneDisplay} with your name, the job you want, your education, your experience and the areas you can travel to. We match you against open requirements from employers. If there is a fit, we call you for a short screening before the employer interview.</strong></p>
${C.facts.CANDIDATE_FEE ? `<h2>Do I have to pay a fee?</h2><p>${esc(C.facts.CANDIDATE_FEE)}</p>` : ''}
<h2>How do I know a message really came from Lifeline Crew?</h2>
<p>Our only number is ${C.phoneDisplay}. If anyone contacts you about a job in our name from another number, or asks you for money or documents before an employer has selected you, call ${C.phoneDisplay} to check first.</p>
<h2>What should I keep ready?</h2>
<ul><li>A short CV, or details typed in WhatsApp</li><li>Identity and address proof (show at joining; do not send copies until an employer selects you)</li><li>Education or ITI certificates for skilled roles</li><li>Bank account details for salary (only after selection)</li></ul>
<h2>Your data</h2>
<p>We use your details only to match you with jobs and to contact you. Read our <a href="/privacy/">privacy notice</a> before sending documents. To have your details deleted, message "DELETE MY DATA" on WhatsApp.</p>
<p class="note">Are you an employer? <a href="/">Start here</a> or see <a href="/services/">our staffing services</a>.</p>
</div></section>`,
}, { keyword: 'lifeline placements jobs chennai', type: 'jobs' });

emit('/privacy/', {
  title: 'Privacy Notice for Employers and Job Seekers | Lifeline',
  description: 'How Lifeline Crew collects, uses, stores and deletes employer and job-seeker data under India\'s Digital Personal Data Protection Act, 2023. Read it here.',
  crumbs: [HOME, { name: 'Privacy', path: '/privacy/' }],
  body: `<section><div class="wrap prose"><h1>Privacy Notice</h1>
<p class="meta">Effective ${C.updatedDisplay}.</p>
<h2>Who we are</h2><p>Lifeline Crew, ${addressHtml()}. Contact: <a href="mailto:${C.email}">${C.email}</a>, ${C.phoneDisplay}.</p>
<h2>What we collect</h2><ul><li><strong>Employers:</strong> name, company, phone number, and the requirement you send (industry, role, headcount, location, date).</li><li><strong>Job seekers:</strong> the details you choose to send on WhatsApp (name, phone, education, experience, preferred location, CV).</li><li><strong>Website:</strong> if analytics is enabled, anonymous usage data through Google Analytics (pages viewed, button clicks). The website does not use advertising cookies. The contact page shows an embedded Google Map, and the site loads fonts from Google Fonts; Google receives your IP address when these load.</li></ul>
<h2>Why we use it</h2><p>To reply to your enquiry, prepare quotes, match candidates with openings, and meet legal obligations. We do not sell personal data.</p>
<h2>Who we share it with</h2><p>Job-seeker profiles are shared only with employers hiring for a matching role. Employer requirements are not shared outside Lifeline Crew.</p>
<h2>How long we keep it</h2><p>We keep personal data for ${esc(C.privacy.retention)}. After that we delete it.</p>
<h2>Your rights</h2><p>Under the Digital Personal Data Protection Act, 2023 you can ask to see, correct or delete your data, or withdraw consent. Message "DELETE MY DATA" on WhatsApp or email us. Grievance contact: ${esc(C.privacy.grievanceOfficer)}, <a href="mailto:${C.email}">${C.email}</a>, ${C.phoneDisplay}.</p>
</div></section>`,
}, { keyword: '(none)', type: 'legal' });

// 404 (not in sitemap)
write('404.html', page({
  path: '/404.html', noindex: true,
  title: 'Page not found | Lifeline Crew',
  description: 'This page does not exist. Find staff for your business across Tamil Nadu, or WhatsApp Lifeline Crew on +91 99622 99076 and tell us what you need.',
  body: `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>Page not found</h1><p>The page may have moved. Try one of these, or message us directly.</p>${ctaRow('404', DEFAULT_WA())}
<ul class="links"><li><a href="/">Home</a></li><li><a href="/services/">Services</a></li><li><a href="/industries/">Industries</a></li><li><a href="/cities/">Cities</a></li><li><a href="/guides/">Guides</a></li><li><a href="/contact/">Contact</a></li></ul></div>
${composer({ loc: '404' })}</div></section>`,
}));

// ---------------- STATIC FILES ----------------
const indexable = pages.filter((p) => !p.noindex);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${C.url}${p.path}</loc><lastmod>${C.updated}</lastmod></url>`).join('\n')}
</urlset>
`);

write('robots.txt', `# Lifeline Crew: all search and AI crawlers welcome
User-agent: *
Allow: /

# Search and AI-search crawlers (listed explicitly so the intent is clear)
User-agent: Googlebot
User-agent: Bingbot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Applebot
User-agent: Perplexity-User
Allow: /

# Model-training crawlers. Allowed by default; change to "Disallow: /" if the owner prefers to opt out.
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
Allow: /

Sitemap: ${C.url}/sitemap.xml
`);

const factsBlock = [
  `- Name: ${C.name} (listed on Google Maps and some directories as ${[].concat(C.alternateName).map((n) => `"${n}"`).join(" or ")})`,
  `- Type: manpower supply and recruitment agency (employment agency)`,
  `- Office: ${L.addressText()}`,
  `- Phone and WhatsApp: ${C.phoneDisplay} (https://wa.me/${C.wa})`,
  `- Email: ${C.email}`,
  `- Head: ${C.founder.name}${C.founder.qualification ? ', ' + C.founder.qualification : ''}`,
  C.facts.TURNAROUND ? `- Turnaround: ${C.facts.TURNAROUND}` : null,
  C.facts.YEARS ? `- Years in business: ${C.facts.YEARS}` : null,
  C.facts.CAPACITY ? `- Largest order: ${C.facts.CAPACITY}` : null,
  C.googleRating ? `- Google rating: ${C.googleRating.rating} from ${C.googleRating.count} reviews (as of ${C.googleRating.asOf})` : null,
  `- Hiring models: ${services.map((s) => s.name).join(', ')}`,
  `- Area served: all of Tamil Nadu, India, from Chennai`,
  `- Languages: English, Tamil`,
  `- Does not supply: security guards (needs a PSARA licence) or overseas placement`,
].filter(Boolean).join('\n');

write('llms.txt', `# Lifeline Crew

> Manpower supply and recruitment agency in ${C.address.locality}, Chennai, Tamil Nadu, India. Supplies staff to employers across Tamil Nadu through permanent placement, contract staffing and bulk hiring. Phone and WhatsApp: ${C.phoneDisplay} (https://wa.me/${C.wa}).

Note: this file is an optional summary for AI tools. Google Search does not use llms.txt. A longer version with every FAQ answer is at ${C.url}/llms-full.txt

## Facts
${factsBlock}

## Key pages
- [Home](${C.url}/): services, industries, cities, FAQ
- [Services](${C.url}/services/): compare hiring models
- [About](${C.url}/about/): who we are and verified facts
- [Contact](${C.url}/contact/): phone, WhatsApp, office, map

## Services
${services.map((s) => `- [${s.name}](${C.url}/services/${s.slug}/): ${s.short}`).join('\n')}

## Industries
${industries.map((i) => `- [${i.name}](${C.url}/industries/${i.slug}/): ${plain(i.description) || ''}`).join('\n')}

## Cities and districts
${cities.map((c) => `- [${c.name}](${C.url}/cities/${c.slug}/)`).join('\n')}

## Guides
${guides.map((g) => `- [${g.h1}](${C.url}/guides/${g.slug}/)`).join('\n')}
`);

write('llms-full.txt', `# Lifeline Crew: full reference for AI assistants

Manpower supply and recruitment agency in ${C.address.locality}, Chennai, Tamil Nadu, India. Updated ${C.updatedDisplay}.

## Facts
${factsBlock}

## How to enquire
Employers can WhatsApp ${C.phoneDisplay} (https://wa.me/${C.wa}) with the role, headcount, work location and date needed, or call the same number. Job seekers can send their name, the job they want, education, experience and preferred area on WhatsApp.

${indexable.filter((p) => p.summary || p.faqs.length).map((p) => `## ${p.title}\nURL: ${C.url}${p.path}\n${p.summary ? '\n' + (plain(p.summary) || '').replace(/<[^>]+>/g, '') + '\n' : ''}${p.faqs.map((f) => { const q = plain(f.q), a = plain(f.a); return q && a ? `\nQ: ${q}\nA: ${a}\n` : ''; }).join('')}`).join('\n')}
`);

// Old-site URLs -> new pages (Cloudflare Pages / Netlify syntax). Apache equivalents are in .htaccess.
const REDIRECTS = [
  ['/aboutus', '/about/'], ['/aboutus.html', '/about/'],
  ['/contactus', '/contact/'], ['/contactus.html', '/contact/'],
  ['/services.html', '/services/'],
  ['/enquiry', '/contact/'], ['/enquiry.html', '/contact/'],
];
write('_redirects', REDIRECTS.map(([a, b]) => `${a} ${b} 301`).join('\n') + '\n');
// Vercel reads vercel.json from the repo root (it ignores _redirects, _headers and .htaccess), so generate it there.
const SEC_HEADERS = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
fs.writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify({
  $schema: 'https://openapi.vercel.sh/vercel.json',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  framework: null,
  trailingSlash: true,
  // trailingSlash adds "/" to extensionless paths first, so cover both spellings of each old URL.
  redirects: [['/index.html', '/'], ...REDIRECTS.flatMap(([a, b]) => (/\.\w+$/.test(a) ? [[a, b]] : [[a, b], [a + '/', b]]))].map(([source, destination]) => ({ source, destination, permanent: true })),
  headers: [
    { source: '/(.*)', headers: SEC_HEADERS },
    { source: '/assets/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }] },
    { source: '/favicon.svg', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }] },
  ],
}, null, 2) + '\n');
write('_headers', `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
/assets/*
  Cache-Control: public, max-age=2592000
/favicon.svg
  Cache-Control: public, max-age=2592000
`);
write('.htaccess', `# Apache (current host) configuration for the new static site
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html
RewriteEngine On
# Force HTTPS and www
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\\. [NC]
RewriteRule ^(.*)$ https://www.lifelineplacements.com/$1 [R=301,L]
# Old URLs
RewriteRule ^index\\.html$ / [R=301,L]
${REDIRECTS.map(([a, b]) => `RewriteRule ^${a.slice(1).replace(/\./g, '\\.')}$ ${b} [R=301,L]`).join('\n')}
# Add trailing slash to directory URLs
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.*[^/])$ /$1/ [R=301,L]
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  <FilesMatch "\\.(css|js|png|webp|svg|ico)$">
    Header set Cache-Control "public, max-age=2592000"
  </FilesMatch>
</IfModule>
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml text/plain
</IfModule>
`);

// copy assets
fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });
fs.copyFileSync(path.join(__dirname, 'assets/site.js'), path.join(DIST, 'assets/site.js'));
const staticDir = path.join(__dirname, 'static');
if (fs.existsSync(staticDir)) fs.cpSync(staticDir, DIST, { recursive: true });

// ---------------- KEYWORD MAP (docs) ----------------
const kw = pages.filter((p) => !p.noindex);
fs.writeFileSync(path.join(ROOT, 'docs/02-keyword-map.md'), `# Keyword map and page inventory

Generated by \`npm run build\` on ${C.updated}. One primary keyword per page; no two pages target the same keyword.

| # | URL | Type | Primary keyword | Title (chars) | Description (chars) |
|---|---|---|---|---|---|
${kw.map((p, i) => `| ${i + 1} | ${p.path} | ${p.type} | ${p.keyword} | ${p.title} (${p.title.length}) | ${p.description.length} |`).join('\n')}

Total indexable pages: ${kw.length} (plus 404.html, noindex)

## Redirects from the old site
${REDIRECTS.map(([a, b]) => `- ${a} → ${b} (301)`).join('\n')}
- /services (no extension) now resolves to the new /services/ hub directly
- /index.html → / (301; handled automatically on Cloudflare Pages, by .htaccess on Apache)
`);

console.log(`Built ${pages.length} pages + 404 into dist/`);

// ---------------- SCHEMA BLOCKS (docs) ----------------
{
  const samples = ['/', '/services/contract-staffing/', '/industries/pharma/', '/cities/kanchipuram/', '/guides/staffing-cost-tamil-nadu/', '/about/'];
  let md = `# JSON-LD schema blocks\n\nExtracted from the built pages on ${C.updated}. Every page carries the EmploymentAgency node and a WebPage node with a speakable selector; page types add BreadcrumbList, Service, FAQPage, HowTo, ItemList, Article, Person, AboutPage or ContactPage. FAQPage includes only questions whose answers contain no unconfirmed facts. No Review or AggregateRating markup is used.\n\nValidate after launch with https://validator.schema.org and https://search.google.com/test/rich-results.\n`;
  for (const s of samples) {
    const html = fs.readFileSync(path.join(DIST, s === '/' ? 'index.html' : s.slice(1) + 'index.html'), 'utf8');
    const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
    md += `\n## ${s}\n\n\`\`\`json\n${JSON.stringify(JSON.parse(json), null, 2)}\n\`\`\`\n`;
  }
  fs.writeFileSync(path.join(ROOT, 'docs/12-schema-blocks.md'), md);
}
