// Static site generator for lifelineplacements.com. Run: node src/build.js  -> writes ./dist
const fs = require('fs');
const path = require('path');
const L = require('./lib/layout');
const { C, esc, t, tok, plain, hasToken, ctaRow, quoteForm, faqHtml, finalCta, page, faqNode, waBtn, callBtn, addressHtml } = L;
const industries = require('./data/industries');
const cities = require('./data/cities');
const guides = require('./data/guides');

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
  pages.push({ path: p, title: opts.title, description: opts.description, keyword: meta.keyword, type: meta.type, noindex: !!opts.noindex });
  write(p === '/' ? 'index.html' : p.replace(/^\//, '') + 'index.html', page({ path: p, ...opts }));
}
const indBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
const HOME = { name: 'Home', path: '/' };
const updated = `<p class="meta">Updated ${C.updatedDisplay} · Lifeline Placements, ${esc(C.address.locality)}, ${esc(C.address.city)}</p>`;

const steps = (what) => `<section class="alt"><div class="wrap"><h2>How hiring through Lifeline works</h2>
<ol class="steps">
<li><strong>Send the requirement</strong>WhatsApp or call ${C.phoneDisplay} with the role, how many people, the location and the date you need them${what ? ' for ' + esc(what) : ''}.</li>
<li><strong>Get a written quote</strong>We confirm wages, shifts, the hiring model and our charges in writing. Turnaround: ${tok('{{TURNAROUND}}')}.</li>
<li><strong>Interview shortlisted people</strong>We screen candidates against your checklist and send profiles. You interview and select.</li>
<li><strong>Joining and follow-up</strong>We coordinate documents and joining day, and replace people who leave within the agreed terms: ${tok('{{REPLACEMENT}}')}.</li>
</ol></div></section>`;

const linkCards = (items, base) => `<div class="grid">${items.map((x) => `<a class="card" href="/${base}/${x.slug}/">${esc(x.name)}</a>`).join('')}</div>`;

// ---------------- HOME ----------------
const homeFaqs = [
  { q: 'How much does a manpower agency charge in Chennai?', a: "For permanent placement, published market rates run from about 8.33% to 16.67% of the hire's annual CTC. For contract staffing, agencies add a monthly service charge to wages, PF and ESI, plus 18% GST. Rates depend on role, volume and duration. Lifeline Placements' fee: {{FEE}}. WhatsApp your role for a written quote." },
  { q: 'How fast can Lifeline Placements supply staff?', a: 'Speed depends on the role, the location and the wage offered. Helpers and housekeeping staff near Chennai usually close faster than skilled operators or nurses in smaller towns. Our turnaround: {{TURNAROUND}}. Send the role, headcount, location and joining date on WhatsApp and we will give you a date in writing.' },
  { q: 'Do you do bulk hiring?', a: 'Yes. Lifeline Placements handles bulk hiring for factories, warehouses, BPOs and retail chains across Tamil Nadu, from our Chennai office. Tell us the roles, headcount per shift, wage and joining date. Largest order size so far: {{CAPACITY}}. Our bulk hiring checklist explains what to prepare before the drive starts.' },
  { q: 'What is the replacement guarantee?', a: 'If a placed person leaves or does not work out within the agreed window, the agency finds a replacement. Market practice in India ranges from 30 to 90 days for permanent placement. For contract staff, replacement continues for the life of the contract. Lifeline Placements\' terms: {{REPLACEMENT}}. We put them in writing with every quote.' },
  { q: 'Contract staffing or permanent placement: which is better?', a: 'Contract staffing suits seasonal peaks, projects and roles where volume is uncertain; the worker stays on the agency payroll and you pay monthly. Permanent placement suits long-term and skilled roles; the worker joins your payroll and you pay the agency once. Many employers use both. Our comparison guide sets out costs and rules.' },
  { q: 'What documents do I need to hire through an agency?', a: 'For contract staffing you sign a service agreement and share your work-order details. If the contractor has 50 or more contract workers, it needs a licence under the OSH Code, and you may have principal-employer duties. Workers bring identity, address, bank and education documents. We send a checklist with every quote.' },
  { q: 'Which agency supplies housekeeping, security, BPO and factory staff in Chennai?', a: 'Lifeline Placements supplies housekeeping, BPO and call-centre, office and factory staff to employers in Chennai and across Tamil Nadu. Security guards are different: only agencies holding a PSARA licence may supply them, so ask any agency for that licence. WhatsApp +91 99622 99076 with your requirement.' },
];
{
  const homeSummary = `<strong>Lifeline Placements</strong> is a manpower supply and recruitment agency based in ${esc(C.address.locality)}, Chennai. We supply factory workers, BPO and call-centre staff, office and front-desk staff, housekeeping, retail, hospital and warehouse staff to employers across Tamil Nadu, through permanent placement, contract staffing and bulk hiring. Turnaround: ${tok('{{TURNAROUND}}')}. WhatsApp or call <a href="tel:${C.tel}" data-loc="hero_text">${C.phoneDisplay}</a>.`;
  const body = `<section class="hero"><div class="wrap">
<h1>Manpower Supply and Recruitment Agency for Employers in Tamil Nadu</h1>
<p class="ta" lang="ta">தமிழ்நாடு முழுவதும் நிறுவனங்களுக்கு பணியாளர்களை வழங்குகிறோம்</p>
<p class="summary">${homeSummary}</p>
${ctaRow('hero', 'Hi Lifeline Placements, I need staff.')}
<ul class="trust">
${C.googleRating ? `<li><strong>${C.googleRating.rating}★ on Google</strong> from ${C.googleRating.count} reviews (as of ${C.googleRating.asOf}). <a href="${esc(C.googleRating.url)}" rel="noopener">See reviews</a></li>` : ''}
${C.facts.TURNAROUND ? `<li><strong>Staff supplied in ${esc(C.facts.TURNAROUND)}</strong></li>` : ""}
<li><strong>${industries.length} industries</strong> served</li>
<li><strong>Office:</strong> ${esc(C.address.locality)}, Chennai</li>
<li><strong>Years in business:</strong> ${tok('{{YEARS}}')}</li>
</ul>
</div></section>

<section><div class="wrap">
<h2>Industries we supply staff to</h2>
<p class="lead">Each page lists the roles we fill, the hiring models that suit that industry and the questions employers ask us.</p>
${linkCards(industries, 'industries')}
</div></section>

<section class="alt"><div class="wrap">
<h2>Cities and districts we serve</h2>
<p class="lead">We work from our Chennai office and supply staff across Tamil Nadu. Each page covers that area's industrial estates and typical roles.</p>
${linkCards(cities, 'cities')}
</div></section>

<section><div class="wrap">
<h2>Hiring models</h2>
<div class="grid grid-lg">
<div class="card"><h3>Permanent placement</h3><p>We find, screen and shortlist. The person joins your payroll. You pay us once.</p></div>
<div class="card"><h3>Contract staffing</h3><p>Workers stay on our payroll. We pay wages, PF and ESI and bill you monthly. We replace people who leave.</p></div>
<div class="card"><h3>Bulk hiring</h3><p>Many similar roles to one start date: new lines, new processes, festive peaks. See the <a href="/guides/bulk-hiring-checklist/">bulk hiring checklist</a>.</p></div>
${C.payrollOutsourcing ? '<div class="card"><h3>Payroll outsourcing</h3><p>You choose the people. We hold them on our rolls and run salary, PF, ESI and filings.</p></div>' : ''}
</div>
<p><a href="/guides/contract-vs-permanent-vs-payroll-staffing/">Compare contract, permanent and payroll staffing</a></p>
</div></section>

${steps('')}

<section id="quote-sec"><div class="wrap">${quoteForm({ id: 'quote' })}</div></section>

${faqHtml(homeFaqs)}

<section class="alt"><div class="wrap"><h2>Hiring guides</h2><div class="grid grid-lg">${guides.map((g) => `<a class="card" href="/guides/${g.slug}/">${esc(g.h1)}</a>`).join('')}</div></div></section>

${finalCta('Hi Lifeline Placements, I need staff.')}`;
  emit('/', {
    title: 'Manpower Agency in Tamil Nadu | Lifeline Placements',
    description: 'Lifeline Placements supplies factory, BPO, office, housekeeping, hospital and retail staff to employers across Tamil Nadu. WhatsApp +91 99622 99076 today.',
    body,
    schema: [{ '@type': 'WebSite', '@id': `${C.url}/#website`, url: `${C.url}/`, name: C.name, inLanguage: 'en-IN', publisher: { '@id': `${C.url}/#org` } }, faqNode(homeFaqs)],
  }, { keyword: 'manpower agency tamil nadu', type: 'home' });
}

// ---------------- INDUSTRIES ----------------
for (const ind of industries) {
  const p = `/industries/${ind.slug}/`;
  const crumbs = [HOME, { name: 'Industries', path: '/industries/' }, { name: ind.name, path: p }];
  const waText = `Hi Lifeline Placements, I need staff for ${ind.name}.`;
  const body = `<section class="hero"><div class="wrap">
<h1>${esc(ind.h1)}</h1>
<p class="ta" lang="ta">${esc(ind.tamil)}</p>
<p class="summary">${t(ind.summary)}</p>
${ctaRow('hero', waText)}
${updated}
</div></section>

<section><div class="wrap"><h2>Roles we supply</h2>
<div class="grid grid-lg">${ind.roles.map((g) => `<div class="card"><h3>${esc(g.group)}</h3><ul>${g.items.map((r) => `<li>${esc(r)}</li>`).join('')}</ul></div>`).join('')}</div>
</div></section>

<section class="alt"><div class="wrap"><h2>Hiring models for ${esc(ind.name.toLowerCase())}</h2>
<div class="tbl"><table><thead><tr><th>Model</th><th>When it fits</th><th>Example</th></tr></thead><tbody>
${ind.models.map((m) => `<tr><td><strong>${esc(m.model)}</strong></td><td>${t(m.bestFor)}</td><td>${t(m.example)}</td></tr>`).join('')}
</tbody></table></div>
<p class="meta">Examples are illustrations of typical requests, not named clients.</p>
</div></section>

<section><div class="wrap prose"><h2>What matters when hiring for ${esc(ind.name.toLowerCase())} in Tamil Nadu</h2>
${ind.context.map((x) => `<p>${t(x)}</p>`).join('')}
<h3>What we check before sending candidates</h3>
<ul>${ind.screening.map((x) => `<li>${t(x)}</li>`).join('')}</ul>
</div></section>

${steps(ind.name.toLowerCase())}

${faqHtml(ind.faqs, `${ind.name} hiring: questions employers ask`)}

<section><div class="wrap">${quoteForm({ industry: ind.name })}</div></section>

<section class="alt"><div class="wrap cols">
<div><h2>Related industries</h2><ul>${ind.relatedIndustries.map((s) => indBySlug[s]).filter(Boolean).map((r) => `<li><a href="/industries/${r.slug}/">${esc(r.name)}</a></li>`).join('')}</ul></div>
<div><h2>Where we supply ${esc(ind.name.toLowerCase())} staff</h2><ul>${ind.relatedCities.map((s) => cityBySlug[s]).filter(Boolean).map((c) => `<li><a href="/cities/${c.slug}/">${esc(ind.name)} staff in ${esc(c.name)}</a></li>`).join('')}</ul></div>
</div></section>

${finalCta(waText, `Need ${ind.name.toLowerCase()} staff? Message us now.`)}`;
  emit(p, {
    title: ind.title, description: ind.description, body, crumbs,
    schema: [
      { '@type': 'Service', '@id': `${C.url}${p}#service`, name: ind.h1, serviceType: 'Manpower supply and recruitment', description: plain(ind.summary) || ind.description, provider: { '@id': `${C.url}/#org` }, areaServed: { '@type': 'State', name: 'Tamil Nadu' }, audience: { '@type': 'BusinessAudience', name: `${ind.name} employers` }, url: C.url + p },
      faqNode(ind.faqs),
    ],
  }, { keyword: ind.primaryKeyword, type: 'industry' });
}

// ---------------- CITIES ----------------
for (const c of cities) {
  const p = `/cities/${c.slug}/`;
  const crumbs = [HOME, { name: 'Cities', path: '/cities/' }, { name: c.name, path: p }];
  const waText = `Hi Lifeline Placements, I need staff in ${c.name}.`;
  const body = `<section class="hero"><div class="wrap">
<h1>${esc(c.h1)}</h1>
<p class="ta" lang="ta">${esc(c.tamilName)}: நிறுவனங்களுக்கு பணியாளர்கள்</p>
<p class="summary">${t(c.summary)}</p>
${ctaRow('hero', waText)}
${updated}
</div></section>

<section><div class="wrap"><h2>Industrial areas and business districts we serve in ${esc(c.name)}</h2>
<div class="grid grid-lg">${c.areas.map((a) => `<div class="card"><h3>${esc(a.name)}</h3><p>${t(a.note)}</p></div>`).join('')}</div>
</div></section>

<section class="alt"><div class="wrap"><h2>Local industries and the staff they hire</h2>
<div class="grid grid-lg">${c.industries.map((x) => `<div class="card"><h3>${x.industrySlug && indBySlug[x.industrySlug] ? `<a href="/industries/${x.industrySlug}/">${esc(x.name)}</a>` : esc(x.name)}</h3><p>${t(x.note)}</p></div>`).join('')}</div>
${c.employers && c.employers.length ? `<p><strong>Large employers in the area include</strong> ${c.employers.map(esc).join('; ')}.</p><p class="meta">Named as examples of local employers, not Lifeline clients.</p>` : ''}
</div></section>

<section><div class="wrap prose"><h2>Typical roles employers in ${esc(c.name)} hire</h2>
<ul>${c.roles.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
<h2>Hiring in ${esc(c.name)}: what to plan for</h2>
${c.localNotes.map((x) => `<p>${t(x)}</p>`).join('')}
${c.slug !== 'chennai' ? `<p class="note">Lifeline Placements serves ${esc(c.name)} from our office in ${esc(C.address.locality)}, Chennai. Call or WhatsApp ${C.phoneDisplay}; we confirm the joining plan and timeline before you commit.</p>` : ''}
</div></section>

${steps('')}

${faqHtml(c.faqs, `Hiring staff in ${c.name}: common questions`)}

<section><div class="wrap">${quoteForm({ city: c.name })}</div></section>

<section class="alt"><div class="wrap cols">
<div><h2>Industries we staff in ${esc(c.name)}</h2><ul>${c.relatedIndustries.map((s) => indBySlug[s]).filter(Boolean).map((r) => `<li><a href="/industries/${r.slug}/">${esc(r.name)} staff</a></li>`).join('')}</ul></div>
<div><h2>Nearby areas</h2><ul>${c.nearby.map((s) => cityBySlug[s]).filter(Boolean).map((n) => `<li><a href="/cities/${n.slug}/">Manpower supply in ${esc(n.name)}</a></li>`).join('')}</ul></div>
</div></section>

${finalCta(waText, `Need staff in ${c.name}? Message us now.`)}`;
  emit(p, {
    title: c.title, description: c.description, body, crumbs,
    schema: [
      { '@type': 'Service', '@id': `${C.url}${p}#service`, name: c.h1, serviceType: 'Manpower supply and recruitment', description: plain(c.summary) || c.description, provider: { '@id': `${C.url}/#org` }, areaServed: { '@type': 'City', name: c.name, containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } }, url: C.url + p },
      faqNode(c.faqs),
    ],
  }, { keyword: c.primaryKeyword, type: 'city' });
}

// ---------------- GUIDES ----------------
for (const g of guides) {
  const p = `/guides/${g.slug}/`;
  const crumbs = [HOME, { name: 'Guides', path: '/guides/' }, { name: g.h1, path: p }];
  const toc = [...g.bodyHtml.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)];
  const body = `<article><section class="hero"><div class="wrap">
<h1>${esc(g.h1)}</h1>
<p class="ta" lang="ta">${esc(g.tamil)}</p>
<p class="summary">${t(g.summary)}</p>
${ctaRow('hero', 'Hi Lifeline Placements, I have a staffing question.')}
<p class="meta">By Lifeline Placements · Published ${g.published} · Updated ${C.updatedDisplay}</p>
</div></section>
<section><div class="wrap prose">
<nav class="toc" aria-label="On this page"><strong>On this page</strong><ol>${toc.map((m) => `<li><a href="#${m[1]}">${m[2]}</a></li>`).join('')}</ol></nav>
${tok(g.bodyHtml)}
</div></section></article>
${faqHtml(g.faqs, 'Related questions')}
<section><div class="wrap">${quoteForm({})}</div></section>
<section class="alt"><div class="wrap"><h2>More hiring guides</h2><ul>${guides.filter((x) => x !== g).map((x) => `<li><a href="/guides/${x.slug}/">${esc(x.h1)}</a></li>`).join('')}</ul></div></section>
${finalCta('Hi Lifeline Placements, I have a staffing question.')}`;
  emit(p, {
    title: g.title, description: g.description, body, crumbs, ogType: 'article',
    schema: [
      { '@type': 'Article', '@id': `${C.url}${p}#article`, headline: g.h1, description: g.description, datePublished: g.published, dateModified: C.updated, author: { '@id': `${C.url}/#org` }, publisher: { '@id': `${C.url}/#org` }, mainEntityOfPage: C.url + p, image: `${C.url}/assets/og-default.png`, inLanguage: 'en-IN' },
      faqNode(g.faqs),
    ],
  }, { keyword: g.primaryKeyword, type: 'guide' });
}

// ---------------- HUBS ----------------
emit('/industries/', {
  title: 'Industries We Staff in Tamil Nadu | Lifeline Placements',
  description: 'Staff for IT, BPO, factories, automobile, pharma, textile, retail, hospitals, hostels, e-commerce and logistics across Tamil Nadu. WhatsApp us your requirement.',
  crumbs: [HOME, { name: 'Industries', path: '/industries/' }],
  body: `<section class="hero"><div class="wrap"><h1>Industries We Supply Staff to Across Tamil Nadu</h1><p class="ta" lang="ta">நாங்கள் சேவை செய்யும் தொழில்கள்</p>
<p class="summary">Lifeline Placements supplies staff to ${industries.length} industries across Tamil Nadu, from Chennai factories and IT offices to hospitals, hostels and warehouses. Choose your industry to see the roles we fill, the hiring models that suit it, and answers to the questions employers ask. WhatsApp or call ${C.phoneDisplay}.</p>${ctaRow('hero')}</div></section>
<section><div class="wrap"><div class="grid grid-lg">${industries.map((i) => `<a class="card" href="/industries/${i.slug}/">${esc(i.name)}<small>${esc(i.roles.flatMap((g) => g.items).slice(0, 4).join(', '))}</small></a>`).join('')}</div></div></section>
${finalCta()}`,
}, { keyword: 'manpower supply by industry', type: 'hub' });

emit('/cities/', {
  title: 'Manpower Supply Across Tamil Nadu Cities | Lifeline',
  description: 'Manpower supply in Chennai, Sriperumbudur, Coimbatore, Hosur, Tiruppur, Madurai, Trichy and 13 more Tamil Nadu districts. WhatsApp Lifeline your requirement.',
  crumbs: [HOME, { name: 'Cities', path: '/cities/' }],
  body: `<section class="hero"><div class="wrap"><h1>Manpower Supply Across Tamil Nadu: Cities and Districts</h1><p class="ta" lang="ta">தமிழ்நாட்டின் நகரங்கள் மற்றும் மாவட்டங்கள்</p>
<p class="summary">Lifeline Placements works from Aminjikarai, Chennai and supplies staff to employers in ${cities.length} Tamil Nadu cities and districts. Each page lists that area's industrial estates, local industries and the roles employers there hire. WhatsApp or call ${C.phoneDisplay} for districts not listed.</p>${ctaRow('hero')}</div></section>
<section><div class="wrap"><div class="grid grid-lg">${cities.map((c) => `<a class="card" href="/cities/${c.slug}/">${esc(c.name)}<small>${esc(c.areas.slice(0, 3).map((a) => a.name).join(', '))}</small></a>`).join('')}</div></div></section>
${finalCta()}`,
}, { keyword: 'manpower supply tamil nadu districts', type: 'hub' });

emit('/guides/', {
  title: 'Hiring Guides for Tamil Nadu Employers | Lifeline Placements',
  description: 'Plain guides on contract vs permanent staffing, bulk hiring, choosing a manpower agency and staffing costs in Tamil Nadu. Questions? WhatsApp Lifeline today.',
  crumbs: [HOME, { name: 'Guides', path: '/guides/' }],
  body: `<section class="hero"><div class="wrap"><h1>Hiring Guides for Employers in Tamil Nadu</h1><p class="ta" lang="ta">நிறுவனங்களுக்கான ஆட்சேர்ப்பு வழிகாட்டிகள்</p>
<p class="summary">Practical guides from Lifeline Placements, a Chennai manpower agency: how contract, permanent and payroll staffing differ, how to run a bulk hiring drive, how to check an agency before you sign, and what a contract worker really costs in Tamil Nadu in 2026.</p></div></section>
<section><div class="wrap"><div class="grid grid-lg">${guides.map((g) => `<a class="card" href="/guides/${g.slug}/">${esc(g.h1)}<small>${esc(g.description)}</small></a>`).join('')}</div></div></section>
${finalCta()}`,
}, { keyword: 'staffing guides tamil nadu', type: 'hub' });

// ---------------- ABOUT / CONTACT / JOBS / PRIVACY / 404 ----------------
emit('/about/', {
  title: 'About Lifeline Placements | Manpower Agency in Chennai',
  description: 'Who we are: Lifeline Placements, a manpower supply and recruitment agency in Aminjikarai, Chennai, serving employers across Tamil Nadu. Call +91 99622 99076.',
  crumbs: [HOME, { name: 'About', path: '/about/' }],
  schema: [{ '@type': 'AboutPage', '@id': `${C.url}/about/#page`, url: `${C.url}/about/`, name: 'About Lifeline Placements', about: { '@id': `${C.url}/#org` } }],
  body: `<section class="hero"><div class="wrap"><h1>About Lifeline Placements, Manpower Agency in Chennai</h1><p class="ta" lang="ta">லைஃப்லைன் பிளேஸ்மென்ட்ஸ் பற்றி</p>
<p class="summary">Lifeline Placements is a manpower supply and recruitment agency in ${esc(C.address.locality)}, Chennai. We help employers across Tamil Nadu hire factory, office, BPO, housekeeping, retail, hospital, hostel and warehouse staff through permanent placement, contract staffing and bulk hiring. Reach us on WhatsApp or by phone at ${C.phoneDisplay}.</p>${ctaRow('hero')}</div></section>
<section><div class="wrap prose">
<h2>Who runs Lifeline Placements?</h2>
<p>Lifeline Placements is headed by <strong>${esc(C.founder.name)}</strong>${C.founder.qualification ? ', ' + esc(C.founder.qualification) : ''}. ${C.founder.bio ? esc(C.founder.bio) : '<mark class="ph">[short bio: experience in recruitment, industries and districts worked in: to confirm]</mark>'}</p>
<h2>What we do</h2>
<ul>
<li><strong>Permanent placement:</strong> we source and screen; the person joins your payroll.</li>
<li><strong>Contract staffing:</strong> workers stay on our payroll; we handle wages, PF, ESI and replacements.</li>
<li><strong>Bulk hiring:</strong> many similar roles to one start date.</li>
${C.payrollOutsourcing ? '<li><strong>Payroll outsourcing:</strong> you choose the people; we run salary and compliance.</li>' : ''}
</ul>
<h2>Facts about Lifeline Placements</h2>
<div class="tbl"><table><tbody>
<tr><th>Office</th><td>${addressHtml()}</td></tr>
<tr><th>Phone and WhatsApp</th><td><a href="tel:${C.tel}" data-loc="about_table">${C.phoneDisplay}</a></td></tr>
<tr><th>Email</th><td><a href="mailto:${C.email}">${C.email}</a></td></tr>
<tr><th>Years in business</th><td>${tok('{{YEARS}}')}</td></tr>
<tr><th>People placed</th><td>${tok('{{PLACED}}')}</td></tr>
<tr><th>Licences and registrations</th><td>${tok('{{LICENCES}}')}</td></tr>
<tr><th>Industries served</th><td>${industries.map((i) => `<a href="/industries/${i.slug}/">${esc(i.name)}</a>`).join(', ')}</td></tr>
<tr><th>Area served</th><td>All of Tamil Nadu, from our Chennai office</td></tr>
${C.googleRating ? `<tr><th>Google rating</th><td>${C.googleRating.rating} from ${C.googleRating.count} reviews, as of ${C.googleRating.asOf}. <a href="${esc(C.googleRating.url)}" rel="noopener">Read the reviews on Google</a></td></tr>` : ''}
</tbody></table></div>
<h2>How we work</h2>
<p>We reply to WhatsApp messages during working hours, ask three questions (what role, how many people, by when), and send a written quote. We screen candidates against your checklist before you meet them. Industry pages list the checks we run for each role.</p>
<h2>Case studies</h2>
<p><mark class="ph">[Case studies will be added only with each client's written permission: to confirm]</mark></p>
</div></section>
${finalCta()}`,
}, { keyword: 'lifeline placements', type: 'about' });

emit('/contact/', {
  title: 'Contact Lifeline Placements | WhatsApp +91 99622 99076',
  description: 'Contact Lifeline Placements in Aminjikarai, Chennai. WhatsApp or call +91 99622 99076, or send your staffing requirement through the quote form below.',
  crumbs: [HOME, { name: 'Contact', path: '/contact/' }],
  schema: [{ '@type': 'ContactPage', '@id': `${C.url}/contact/#page`, url: `${C.url}/contact/`, name: 'Contact Lifeline Placements', about: { '@id': `${C.url}/#org` } }],
  body: `<section class="hero"><div class="wrap"><h1>Contact Lifeline Placements in Chennai</h1><p class="ta" lang="ta">எங்களை தொடர்பு கொள்ள</p>
<p class="summary">The fastest way to reach Lifeline Placements is WhatsApp on ${C.phoneDisplay}. Send the role, how many people, the work location and when you need them, and we reply with questions or a quote. You can also call the same number.</p>${ctaRow('hero')}</div></section>
<section><div class="wrap cols">
<div><h2>Office</h2><p><strong>Lifeline Placements</strong><br>${addressHtml()}</p>
<p>Phone and WhatsApp: <a href="tel:${C.tel}" data-loc="contact_block">${C.phoneDisplay}</a><br>Email: <a href="mailto:${C.email}">${C.email}</a><br>Hours: ${C.hours ? esc(C.hours) : '<mark class="ph">[working hours: to confirm]</mark>'}</p>
<p><a href="${esc(C.googleRating ? C.googleRating.url : 'https://www.google.com/maps')}" rel="noopener">Open in Google Maps</a></p></div>
<div>${quoteForm({ id: 'quote' })}</div>
</div></section>`,
}, { keyword: 'lifeline placements contact number', type: 'contact' });

emit('/jobs/', {
  title: 'Jobs Through Lifeline Placements, Chennai | Job Seekers',
  description: 'Looking for a job in Chennai or Tamil Nadu? See how to share your details with Lifeline Placements on WhatsApp and read our privacy notice first. Message us.',
  crumbs: [HOME, { name: 'Jobs', path: '/jobs/' }],
  body: `<section class="hero"><div class="wrap"><h1>Jobs Through Lifeline Placements in Chennai and Tamil Nadu</h1><p class="ta" lang="ta">வேலை தேடுபவர்களுக்கு</p>
<p class="summary">Lifeline Placements fills roles for employers across Tamil Nadu: factory, warehouse, BPO, office, housekeeping, retail, hospital and hostel jobs. If you are looking for work, send your name, the job you want, your experience and your preferred area on WhatsApp. We contact you when a matching opening comes up.</p>
<div class="cta-row">${waBtn('jobs_hero', 'Hi Lifeline Placements, I am looking for a job.', 'WhatsApp your details')}</div></div></section>
<section><div class="wrap prose">
<h2>How do I apply for a job through Lifeline Placements?</h2>
<p><strong>Send a WhatsApp message to ${C.phoneDisplay} with your name, the job you want, your education, your experience and the areas you can travel to. We match you against open requirements from employers. If there is a fit, we call you for a short screening before the employer interview.</strong></p>
<h2>Do I have to pay a fee?</h2>
<p>${tok('{{CANDIDATE_FEE}}')}</p>
<h2>What should I keep ready?</h2>
<ul><li>A short CV, or details typed in WhatsApp</li><li>Identity and address proof (show at joining; do not send copies until an employer selects you)</li><li>Education or ITI certificates for skilled roles</li><li>Bank account details for salary (only after selection)</li></ul>
<h2>Your data</h2>
<p>We use your details only to match you with jobs and to contact you. Read our <a href="/privacy/">privacy notice</a> before sending documents. To have your details deleted, message "DELETE MY DATA" on WhatsApp.</p>
<p class="note">Are you an employer? <a href="/">Start here</a> or see <a href="/industries/">industries we staff</a>.</p>
</div></section>`,
}, { keyword: 'lifeline placements jobs chennai', type: 'jobs' });

emit('/privacy/', {
  title: 'Privacy Notice for Employers and Job Seekers | Lifeline',
  description: 'How Lifeline Placements collects, uses, stores and deletes employer and job-seeker data under India\'s Digital Personal Data Protection Act, 2023. Read it here.',
  crumbs: [HOME, { name: 'Privacy', path: '/privacy/' }],
  body: `<section><div class="wrap prose"><h1>Privacy Notice</h1>
<p class="meta">Effective ${C.updatedDisplay}. <mark class="ph">[Owner to review with a legal adviser before launch]</mark></p>
<h2>Who we are</h2><p>Lifeline Placements, ${addressHtml()}. Contact: <a href="mailto:${C.email}">${C.email}</a>, ${C.phoneDisplay}.</p>
<h2>What we collect</h2><ul><li><strong>Employers:</strong> name, company, phone number, and the requirement you send (industry, role, headcount, location, date).</li><li><strong>Job seekers:</strong> the details you choose to send on WhatsApp (name, phone, education, experience, preferred location, CV).</li><li><strong>Website:</strong> if analytics is enabled, anonymous usage data through Google Analytics (pages viewed, button clicks). The website does not use advertising cookies.</li></ul>
<h2>Why we use it</h2><p>To reply to your enquiry, prepare quotes, match candidates with openings, and meet legal obligations. We do not sell personal data.</p>
<h2>Who we share it with</h2><p>Job-seeker profiles are shared only with employers hiring for a matching role. Employer requirements are not shared outside Lifeline Placements.</p>
<h2>How long we keep it</h2><p><mark class="ph">[retention period: to confirm, e.g. 12 months after last contact]</mark></p>
<h2>Your rights</h2><p>Under the Digital Personal Data Protection Act, 2023 you can ask to see, correct or delete your data, or withdraw consent. Message "DELETE MY DATA" on WhatsApp or email us. Grievance contact: <mark class="ph">[name of grievance officer: to confirm]</mark>.</p>
</div></section>`,
}, { keyword: '(none)', type: 'legal' });

// 404 (not in sitemap)
write('404.html', page({
  path: '/404.html', noindex: true,
  title: 'Page not found | Lifeline Placements',
  description: 'This page does not exist. Find staff for your business across Tamil Nadu, or WhatsApp Lifeline Placements on +91 99622 99076 and tell us what you need.',
  body: `<section class="hero"><div class="wrap"><h1>Page not found</h1><p>The page may have moved. Try one of these, or message us directly.</p>${ctaRow('404')}
<ul><li><a href="/">Home</a></li><li><a href="/industries/">Industries</a></li><li><a href="/cities/">Cities</a></li><li><a href="/guides/">Guides</a></li><li><a href="/contact/">Contact</a></li></ul></div></section>`,
}));

// ---------------- STATIC FILES ----------------
const indexable = pages.filter((p) => !p.noindex);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${C.url}${p.path}</loc><lastmod>${C.updated}</lastmod></url>`).join('\n')}
</urlset>
`);

write('robots.txt', `# Lifeline Placements: all search and AI crawlers welcome
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

write('llms.txt', `# Lifeline Placements

> Manpower supply and recruitment agency in ${C.address.locality}, Chennai, Tamil Nadu, India. Supplies staff to employers across Tamil Nadu through permanent placement, contract staffing and bulk hiring. Phone and WhatsApp: ${C.phoneDisplay} (https://wa.me/${C.wa}).

Note: this file is an optional summary for AI tools. Google Search does not use llms.txt.

## Key pages
- [Home](${C.url}/): services, industries, cities, FAQ
- [About](${C.url}/about/): who we are and verified facts
- [Contact](${C.url}/contact/): phone, WhatsApp, office

## Industries
${industries.map((i) => `- [${i.name}](${C.url}/industries/${i.slug}/): ${plain(i.description) || ''}`).join('\n')}

## Cities and districts
${cities.map((c) => `- [${c.name}](${C.url}/cities/${c.slug}/)`).join('\n')}

## Guides
${guides.map((g) => `- [${g.h1}](${C.url}/guides/${g.slug}/)`).join('\n')}
`);

// Old-site URLs -> new pages (Cloudflare Pages / Netlify syntax). Apache equivalents are in .htaccess.
const REDIRECTS = [
  ['/aboutus', '/about/'], ['/aboutus.html', '/about/'],
  ['/contactus', '/contact/'], ['/contactus.html', '/contact/'],
  ['/services', '/industries/'], ['/services.html', '/industries/'],
  ['/enquiry', '/contact/'], ['/enquiry.html', '/contact/'],
];
write('_redirects', REDIRECTS.map(([a, b]) => `${a} ${b} 301`).join('\n') + '\n');
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
- /index.html → / (301; handled automatically on Cloudflare Pages, by .htaccess on Apache)
`);

console.log(`Built ${pages.length} pages + 404 into dist/`);

// ---------------- SCHEMA BLOCKS (docs) ----------------
{
  const samples = ['/', '/industries/pharma/', '/cities/kanchipuram/', '/guides/staffing-cost-tamil-nadu/', '/about/'];
  let md = `# JSON-LD schema blocks\n\nExtracted from the built pages on ${C.updated}. Every page carries the EmploymentAgency node; page types add BreadcrumbList, Service, FAQPage, Article, AboutPage or ContactPage. FAQPage includes only questions whose answers contain no unconfirmed facts, so it grows automatically as the owner confirms facts. No Review or AggregateRating markup is used.\n\nValidate after launch with https://validator.schema.org and https://search.google.com/test/rich-results.\n`;
  for (const s of samples) {
    const html = fs.readFileSync(path.join(DIST, s === '/' ? 'index.html' : s.slice(1) + 'index.html'), 'utf8');
    const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
    md += `\n## ${s}\n\n\`\`\`json\n${JSON.stringify(JSON.parse(json), null, 2)}\n\`\`\`\n`;
  }
  fs.writeFileSync(path.join(ROOT, 'docs/12-schema-blocks.md'), md);
}
