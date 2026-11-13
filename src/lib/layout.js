const fs = require('fs');
const path = require('path');
const C = require('../config');

const JS_VER = require('crypto').createHash('md5').update(fs.readFileSync(path.join(__dirname, '../assets/site.js'))).digest('hex').slice(0, 8);
const CSS = fs.readFileSync(path.join(__dirname, '../assets/style.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '');

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Fact tokens ----------
// {{TOKEN}} -> confirmed fact, else the neutral fallback wording in config, else a visible "[to confirm]" chip.
// [[ ... ]] marks an optional span: it is left out entirely until every token inside it is confirmed.
const TOKEN_RE = /\{\{([A-Z_]+)\}\}/g;
const OPT_RE = /\[\[([\s\S]*?)\]\]/g;
const factValue = (k) => C.facts[k] || (C.factFallbacks || {})[k] || null;
const resolveOptional = (s) => String(s).replace(OPT_RE, (m, inner) => ([...inner.matchAll(TOKEN_RE)].every((x) => C.facts[x[1]]) ? inner : ''));
function tok(htmlSafe) {
  return resolveOptional(htmlSafe).replace(TOKEN_RE, (m, k) => {
    const v = factValue(k);
    if (v) return esc(v);
    return `<mark class="ph" title="To be confirmed by Lifeline Crew">[${esc(C.factLabels[k] || k.toLowerCase())}: to confirm]</mark>`;
  });
}
const t = (s) => tok(esc(s));
// Plain text for schema/meta: returns null if a token without a value or fallback remains.
function plain(s) {
  let missing = false;
  const out = resolveOptional(s).replace(TOKEN_RE, (m, k) => { const v = factValue(k); if (v) return v; missing = true; return ''; });
  return missing ? null : out;
}
const hasToken = (s) => /\{\{[A-Z_]+\}\}/.test(s);

// ---------- Icons ----------
const sv = (d, cls = 'i') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICON = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.4-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.5l.4-.4.3-.5v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/></svg>',
  logo: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#0d9488"/><path d="M5 17h5l2.5-6 4 11 3-8 1.5 3H27" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
  laptop: sv('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>'),
  headset: sv('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'),
  briefcase: sv('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'),
  factory: sv('<path d="M3 21V10l6 4V10l6 4V6h6v15z"/><path d="M7 18h2M12 18h2M17 18h2"/>'),
  car: sv('<path d="M5 15l1.6-4.6A2 2 0 0 1 8.5 9h7a2 2 0 0 1 1.9 1.4L19 15"/><rect x="3" y="15" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="16.5" cy="19.5" r="1.5"/>'),
  flask: sv('<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>'),
  shirt: sv('<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>'),
  bag: sv('<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
  scissors: sv('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 19M8.5 16.5L20 5"/>'),
  hospital: sv('<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>'),
  bed: sv('<path d="M3 19V6M3 15h18v4M21 15v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="12" r="2"/>'),
  box: sv('<path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"/>'),
  truck: sv('<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'),
  mobile: sv('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),
  userCheck: sv('<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 11l2 2 4-4"/>'),
  contract: sv('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
  users: sv('<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2A5 5 0 0 1 22 19"/>'),
  wallet: sv('<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>'),
  pin: sv('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  clock: sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  shield: sv('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
  arrow: sv('<path d="M5 12h14M13 6l6 6-6 6"/>', 'i arr'),
  book: sv('<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>'),
  chat: sv('<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>'),
  close: sv('<path d="M6 6l12 12M18 6L6 18"/>'),
};
const INDUSTRY_ICON = { 'it-companies': 'laptop', 'bpo-call-centres': 'headset', 'office-staff': 'briefcase', manufacturing: 'factory', automobile: 'car', pharma: 'flask', 'textile-garments': 'shirt', 'retail-showrooms': 'bag', 'spas-salons': 'scissors', 'hospitals-clinics': 'hospital', 'hostels-service-apartments': 'bed', ecommerce: 'box', 'logistics-warehousing': 'truck', 'mobile-phone-manufacturing': 'mobile' };
const indIcon = (slug) => ICON[INDUSTRY_ICON[slug] || 'briefcase'];

// ---------- WhatsApp and call links ----------
const DEFAULT_WA = 'Hi Lifeline Crew, I need staff.';
const waHref = (text) => `https://wa.me/${C.wa}?text=${encodeURIComponent(text || DEFAULT_WA)}`;
// A requirement message with blanks the employer fills in before sending.
const waNeed = (what, extra = '') => `Hi Lifeline Crew, I need ${what}.${extra}\nHow many: \nWork location: \nNeeded by: `;
const callBtn = (loc, label = 'Call ' + C.phoneDisplay, cls = '') => `<a class="btn btn-call ${cls}" href="tel:${C.tel}" data-loc="${loc}">${ICON.phone}${esc(label)}</a>`;
const waBtn = (loc, text, label = 'WhatsApp us', cls = '') => `<a class="btn btn-wa ${cls}" href="${esc(waHref(text))}" data-loc="${loc}">${ICON.wa}${esc(label)}</a>`;
const ctaRow = (loc, waText) => `<div class="cta-row">${waBtn(loc, waText, 'WhatsApp your requirement')}${callBtn(loc)}</div>`;
// Small chip that opens WhatsApp with a message about one specific role or service.
const waChip = (loc, label, text) => `<a class="chip" href="${esc(waHref(text))}" data-loc="${loc}">${ICON.wa}<span>${esc(label)}</span></a>`;

// What an employer can ask for in one tap. Used by the floating picker, the home hero and the contact page.
const PICKER = [
  ['Factory workers & operators', waNeed('factory workers / machine operators')],
  ['BPO & call-centre agents', waNeed('BPO / call-centre agents', '\nLanguage: ')],
  ['Office & front-desk staff', waNeed('office / front-desk staff')],
  ['Housekeeping staff', waNeed('housekeeping staff')],
  ['Hospital & clinic staff', waNeed('hospital / clinic staff (nurses, ward staff, front office)')],
  ['Retail & showroom staff', waNeed('retail / showroom staff')],
  ['Warehouse & delivery staff', waNeed('warehouse / logistics staff')],
  ['Spa & salon staff', waNeed('spa / salon staff')],
];
const PICKER_MODELS = [
  ['Permanent hire', 'Hi Lifeline Crew, I want to hire permanent staff.\nRole: \nHow many: \nLocation: \nJoining by: '],
  ['Contract staff', 'Hi Lifeline Crew, I need contract staff on your payroll.\nRole: \nHow many: \nLocation: \nDuration: '],
  ['Bulk hiring drive', 'Hi Lifeline Crew, I need bulk hiring.\nRoles: \nTotal headcount: \nLocation: \nStart date: '],
  ...(C.payrollOutsourcing ? [['Payroll outsourcing', 'Hi Lifeline Crew, I want payroll outsourcing.\nNumber of employees: \nLocation: ']] : []),
];
function pickerChips(loc, context) {
  const first = context ? waChip(loc, context.label, context.text).replace('class="chip"', 'class="chip chip-hot"') : '';
  return `<div class="chips">${first}${PICKER.map(([l, m]) => waChip(loc, l, m)).join('')}</div>
<p class="chips-h">Or by hiring model</p><div class="chips">${PICKER_MODELS.map(([l, m]) => waChip(loc, l, m)).join('')}</div>`;
}

// ---------- Crew request composer ----------
// A WhatsApp-style card that writes the employer's requirement as they tap: role, headcount, city, date.
// Without JavaScript every role chip is still a plain wa.me link with a prefilled message, and the send button works.
const firstLower = (s) => (/^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);
function composer({ loc = 'composer', roles = [], ctx = '', city = '', title = 'Build your staff request' } = {}) {
  const cities = require('../data/cities').map((c) => c.name);
  const list = roles.length ? roles : PICKER.map(([l]) => l);
  const roleMsg = (r) => `Hi Lifeline Crew, I need ${firstLower(r)}${ctx ? ' ' + ctx : ''}${city ? ' in ' + city : ''}.\nHow many: \nWork location: \nNeeded by: `;
  const first = `Hi Lifeline Crew, I need 10 ${firstLower(list[0])}${ctx ? ' ' + ctx : ''}${city ? ' in ' + city : ''}, needed within a week.`;
  const whens = [['within a week', 'This week'], ['within 2 weeks', '2 weeks'], ['within a month', 'This month']];
  return `<aside class="cmp" data-composer data-ctx="${esc(ctx)}" aria-labelledby="cmp-${loc}">
<div class="cmp-top"><span class="cmp-av">${ICON.logo}</span><div><p class="cmp-name" id="cmp-${loc}">${esc(title)}</p><p class="cmp-sub">Lifeline Crew replies on WhatsApp</p></div></div>
<div class="cmp-chat"><p class="cmp-bubble" data-preview aria-live="polite">${esc(first)}</p></div>
<div class="cmp-body">
<p class="cmp-q">Who do you need?</p>
<div class="chips cmp-roles">${list.map((r, i) => `<a class="chip" href="${esc(waHref(roleMsg(r)))}" data-loc="${loc}" data-role="${esc(firstLower(r))}">${ICON.wa}<span>${esc(r)}</span></a>`).join('')}</div>
<div class="cmp-ctl">
<div class="cmp-row">
<div><p class="cmp-q" id="cmp-n-${loc}">How many</p><div class="stepper" role="group" aria-labelledby="cmp-n-${loc}"><button type="button" data-step="-1" aria-label="Fewer people">−</button><output data-count>10</output><button type="button" data-step="1" aria-label="More people">+</button></div></div>
<div><label class="cmp-q" for="cmp-city-${loc}">Where</label><select id="cmp-city-${loc}" data-city><option value="">Any Tamil Nadu location</option>${cities.map((c) => `<option${c === city ? ' selected' : ''}>${esc(c)}</option>`).join('')}</select></div>
</div>
<p class="cmp-q">When</p>
<div class="seg" role="group" aria-label="When do you need them">${whens.map(([v, l], i) => `<button type="button" data-when="${v}" aria-pressed="${i === 0}">${l}</button>`).join('')}</div>
</div>
<a class="btn btn-wa btn-block" data-send href="${esc(waHref(first))}" data-loc="${loc}_send">${ICON.wa}Send on WhatsApp</a>
<p class="cmp-note">Opens WhatsApp with this message. Nothing is sent until you press send.</p>
</div></aside>`;
}

function addressText() {
  const a = C.address;
  if (a.confirmed) return `${a.street}, ${a.locality}, ${a.city} ${a.postalCode}, ${a.region}`;
  return `${a.locality}, ${a.city}, ${a.region}`;
}
function addressHtml() {
  const a = C.address;
  if (a.confirmed) return esc(addressText());
  return `${esc(a.locality)}, ${esc(a.city)}, ${esc(a.region)}`;
}
const mapsUrl = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.mapQuery || addressText())}`;

const INDUSTRY_OPTS = () => require('../data/industries').map((i) => i.name);
const CITY_OPTS = () => require('../data/cities').map((c) => c.name);

function quoteForm({ industry = '', city = '', service = '', id = 'quote' } = {}) {
  const opt = (list, sel) => list.map((v) => `<option${v === sel ? ' selected' : ''}>${esc(v)}</option>`).join('');
  const models = ['Permanent placement', 'Contract staffing', 'Bulk hiring', ...(C.payrollOutsourcing ? ['Payroll outsourcing'] : []), 'Not sure yet'];
  return `<form class="quote" id="quote-form" action="https://wa.me/${C.wa}" method="get"${C.leadEndpoint ? ` data-endpoint="${esc(C.leadEndpoint)}"` : ''}>
<div class="quote-head"><span class="badge">${ICON.wa} Replies on WhatsApp</span><h2 id="${id}">Get a quote in 60 seconds</h2>
<p class="fine">Fill six details. WhatsApp opens with your message ready to send. Nothing is sent until you press send.</p></div>
<div class="row">
<div class="field"><label for="f-ind">Industry</label><select id="f-ind" name="industry" required><option value="">Choose industry</option>${opt(INDUSTRY_OPTS(), industry)}<option>Other</option></select></div>
<div class="field"><label for="f-model">Hiring model</label><select id="f-model" name="model"><option value="">Choose (optional)</option>${opt(models, service)}</select></div>
<div class="field"><label for="f-role">Role needed</label><input id="f-role" name="role" required placeholder="e.g. machine operators" autocomplete="off"></div>
<div class="field"><label for="f-n">How many people</label><input id="f-n" name="headcount" required inputmode="numeric" pattern="[0-9]{1,5}" placeholder="e.g. 25"></div>
<div class="field"><label for="f-city">Work location</label><select id="f-city" name="city" required><option value="">Choose city</option>${opt(CITY_OPTS(), city)}<option>Other Tamil Nadu district</option></select></div>
<div class="field"><label for="f-by">Needed by</label><select id="f-by" name="by" required><option value="">Choose</option><option>Within a week</option><option>Within 2 weeks</option><option>Within a month</option><option>Just planning</option></select></div>
<div class="field full"><label for="f-name">Your name or company</label><input id="f-name" name="name" required autocomplete="organization" placeholder="e.g. Priya, ABC Components"></div>
</div>
<div class="cta-row"><button class="btn btn-wa btn-lg" type="submit">${ICON.wa}Send on WhatsApp</button>${callBtn('form', 'Or call ' + C.phoneDisplay, 'btn-ghost')}</div>
<p class="fine">For employers hiring staff. Looking for a job? See <a href="/jobs/">jobs</a>. We use your details only to reply to this enquiry. <a href="/privacy/">Privacy notice</a>.</p>
</form>`;
}

function breadcrumbs(items) {
  if (!items || items.length < 2) return '';
  return `<nav class="crumbs" aria-label="Breadcrumb"><div class="wrap"><ol>${items.map((b, i) => `<li>${i < items.length - 1 ? `<a href="${b.path}">${esc(b.name)}</a>` : `<span aria-current="page">${esc(b.name)}</span>`}</li>`).join('')}</ol></div></nav>`;
}

const NAV = [['/services/', 'Services'], ['/industries/', 'Industries'], ['/cities/', 'Cities'], ['/guides/', 'Guides'], ['/about/', 'About'], ['/contact/', 'Contact']];
function header(current) {
  const link = ([h, l]) => `<a href="${h}"${current && current.startsWith(h) ? ' aria-current="page"' : ''}>${l}</a>`;
  return `<a class="skip" href="#main">Skip to content</a>
<header class="hdr"><div class="wrap">
<a class="logo" href="/" aria-label="Lifeline Crew home">${ICON.logo}<span>Lifeline<b>Crew</b></span></a>
<nav class="nav" aria-label="Main">${NAV.map(link).join('')}</nav>
<div class="hdr-cta">${waBtn('header', DEFAULT_WA, 'WhatsApp', 'btn-sm hide-sm')}${callBtn('header', 'Call', 'btn-sm')}</div>
<details class="menu"><summary aria-label="Open menu"><span></span><span></span><span></span></summary><div class="menu-list">${NAV.map(link).join('')}<a href="/jobs/">Jobs (for job seekers)</a></div></details>
</div></header>`;
}

function footer(context) {
  const inds = require('../data/industries');
  const cities = require('../data/cities');
  const services = require('../data/services').filter((s) => s.slug !== 'payroll-outsourcing' || C.payrollOutsourcing);
  return `<footer class="ftr"><div class="wrap">
<div class="ftr-cta"><div><h2>Tell us who you need. We'll take it from there.</h2><p>Role, headcount, location and date. One WhatsApp message is enough to start.</p></div><div class="cta-row">${waBtn('footer_cta', DEFAULT_WA, 'WhatsApp ' + C.phoneDisplay)}${callBtn('footer_cta', 'Call now', 'btn-ghost-light')}</div></div>
<div class="cols4">
<div>
<a class="logo logo-light" href="/">${ICON.logo}<span>Lifeline<b>Crew</b></span></a>
<p>Manpower supply and recruitment for employers across Tamil Nadu.</p>
<p class="ta" lang="ta">தமிழ்நாடு முழுவதும் நிறுவனங்களுக்கு நம்பகமான பணியாளர்கள்.</p>
<address>${ICON.pin}<span>${addressHtml()}</span></address>
<p class="ftr-contact"><a href="tel:${C.tel}" data-loc="footer">${ICON.phone}${C.phoneDisplay}</a><a href="${esc(waHref())}" data-loc="footer">${ICON.wa}Chat on WhatsApp</a><a href="mailto:${C.email}">${ICON.chat}${C.email}</a></p>
${C.googleRating ? `<p class="ftr-rating">${ICON.star}<span><strong>${C.googleRating.rating}</strong> on Google · ${C.googleRating.count} reviews <small>(as of ${C.googleRating.asOf})</small></span></p>` : ''}
</div>
<div><h2>Services</h2><ul>${services.map((s) => `<li><a href="/services/${s.slug}/">${esc(s.name)}</a></li>`).join('')}<li><a href="/services/">All services</a></li></ul>
<h2>More</h2><ul><li><a href="/guides/">Hiring guides</a></li><li><a href="/jobs/">Jobs (for job seekers)</a></li><li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li><li><a href="/privacy/">Privacy</a></li></ul></div>
<div><h2>Industries</h2><ul>${inds.slice(0, 9).map((i) => `<li><a href="/industries/${i.slug}/">${esc(i.name)}</a></li>`).join('')}<li><a href="/industries/">All industries</a></li></ul></div>
<div><h2>Cities</h2><ul>${cities.slice(0, 9).map((c) => `<li><a href="/cities/${c.slug}/">${esc(c.name)}</a></li>`).join('')}<li><a href="/cities/">All cities</a></li></ul></div>
</div>
<p class="copy">© ${new Date(C.updated).getFullYear()} Lifeline Crew · Aminjikarai, Chennai · Content updated ${C.updatedDisplay}</p>
</div></footer>
${picker(context)}
<div class="sbar" role="navigation" aria-label="Quick contact"><a class="c" href="tel:${C.tel}" data-loc="sticky_bar">${ICON.phone}Call</a><a class="p" href="/contact/#quote" data-open-picker data-loc="sticky_bar">${ICON.chat}Choose staff</a><a class="w" href="${esc(waHref(context ? context.text : DEFAULT_WA))}" data-loc="sticky_bar">${ICON.wa}WhatsApp</a></div>`;
}

// Floating "message us about a specific service" panel. Works without JavaScript (details/summary).
function picker(context) {
  return `<details class="fab" id="picker"><summary aria-label="Message us about a specific service"><span class="fab-btn">${ICON.wa}<span class="fab-label">What staff do you need?</span></span></summary>
<div class="fab-panel" role="dialog" aria-label="Choose what you need">
<div class="fab-top"><div>${ICON.logo}<p><strong>Lifeline Crew</strong><small>Tap a service. WhatsApp opens with a ready message.</small></p></div><button type="button" class="fab-x" data-close-picker aria-label="Close">${ICON.close}</button></div>
<div class="fab-body">${pickerChips('picker', context)}
<p class="fab-alt"><a href="tel:${C.tel}" data-loc="picker">${ICON.phone}Prefer to talk? Call ${C.phoneDisplay}</a><a href="${esc(waHref('Hi Lifeline Crew, I am looking for a job.\nName: \nJob I want: \nExperience: \nArea: '))}" data-loc="picker_jobseeker">Looking for a job instead?</a></p></div>
</div></details>`;
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
    logo: { '@type': 'ImageObject', url: `${C.url}/assets/logo-512.png`, width: 512, height: 512 },
    image: `${C.url}/assets/og-default.png`,
    address,
    hasMap: mapsUrl(),
    areaServed: { '@type': 'State', name: 'Tamil Nadu', containedInPlace: { '@type': 'Country', name: 'India' } },
  };
  if (C.hours) node.openingHours = C.hours;
  if (full) {
    const services = require('../data/services').filter((s) => s.slug !== 'payroll-outsourcing' || C.payrollOutsourcing);
    node.description = 'Lifeline Crew is a Chennai-based manpower supply and recruitment agency. It supplies staff to employers across Tamil Nadu through permanent placement, contract staffing and bulk hiring.';
    node.founder = { '@id': `${C.url}/about/#founder` };
    node.knowsAbout = require('../data/industries').map((i) => i.name);
    node.knowsLanguage = ['en', 'ta'];
    node.areaServed = [node.areaServed, ...require('../data/cities').map((c) => ({ '@type': 'City', name: c.name }))];
    node.contactPoint = [
      { '@type': 'ContactPoint', telephone: C.tel, contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Tamil'] },
      { '@type': 'ContactPoint', telephone: C.tel, contactType: 'customer service', url: `https://wa.me/${C.wa}`, areaServed: 'IN', availableLanguage: ['English', 'Tamil'] },
    ];
    node.hasOfferCatalog = { '@type': 'OfferCatalog', name: 'Staffing services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${C.url}/services/${s.slug}/` } })) };
  }
  if (C.sameAs.length) node.sameAs = C.sameAs;
  return node;
}
function crumbNode(items) {
  return { '@type': 'BreadcrumbList', '@id': `${C.url}${items[items.length - 1].path}#breadcrumb`, itemListElement: items.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: C.url + b.path })) };
}
function faqNode(faqs) {
  const qa = faqs.map((f) => ({ q: plain(f.q), a: plain(f.a) })).filter((f) => f.q && f.a);
  if (!qa.length) return null;
  return { '@type': 'FAQPage', mainEntity: qa.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}
function howToNode(id, name, steps) {
  return { '@type': 'HowTo', '@id': id, name, totalTime: 'P7D', step: steps.map(([n, txt], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: plain(txt) || n })) };
}
const ld = (nodes) => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) }).replace(/</g, '\\u003c')}</script>`;

function faqHtml(faqs, heading = 'Frequently asked questions') {
  return `<section class="faq" aria-labelledby="faq-h"><div class="wrap narrow"><h2 id="faq-h">${esc(heading)}</h2><div class="faq-list">${faqs.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary><h3>${t(f.q)}</h3><span class="pm" aria-hidden="true"></span></summary><div class="a"><p>${t(f.a)}</p></div></details>`).join('')}</div></div></section>`;
}

function finalCta(waText, title = 'Need staff? Message us now.') {
  return `<section class="final"><div class="wrap"><div class="final-card"><h2>${esc(title)}</h2><p>Send the role, how many people and when you need them. We reply on WhatsApp during working hours with questions or a written quote.</p><div class="cta-row">${waBtn('final_cta', waText, 'WhatsApp ' + C.phoneDisplay, 'btn-lg')}${callBtn('final_cta', 'Call ' + C.phoneDisplay, 'btn-light btn-lg')}</div></div></div></section>`;
}

function page({ path: p, title, description, body, crumbs = [], schema = [], noindex = false, ogType = 'website', pageType = 'WebPage', waContext = null }) {
  const canonical = C.url + p;
  const gaTag = C.ga4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${C.ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${C.ga4}');</script>` : '';
  const webPage = noindex ? null : {
    '@type': pageType, '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: 'en-IN',
    isPartOf: { '@id': `${C.url}/#website` }, about: { '@id': `${C.url}/#org` }, dateModified: C.updated,
    primaryImageOfPage: { '@type': 'ImageObject', url: `${C.url}/assets/og-default.png` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.summary'] },
    ...(crumbs.length > 1 ? { breadcrumb: { '@id': `${canonical}#breadcrumb` } } : {}),
  };
  const website = { '@type': 'WebSite', '@id': `${C.url}/#website`, url: `${C.url}/`, name: C.name, alternateName: C.alternateName, inLanguage: 'en-IN', publisher: { '@id': `${C.url}/#org` } };
  const nodes = [orgNode(p === '/'), p === '/' ? website : null, webPage, crumbs.length > 1 ? crumbNode(crumbs) : null, ...schema];
  return `<!doctype html>
<html lang="en-IN" data-wa="${C.wa}">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js")</script>
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">\n<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">`}
<meta name="geo.region" content="IN-TN"><meta name="geo.placename" content="Chennai">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="Lifeline Crew">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${C.url}/assets/og-default.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Lifeline Crew: manpower supply across Tamil Nadu, WhatsApp ${C.phoneDisplay}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0b5d55">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${CSS}</style>
${ld(nodes)}
${gaTag}
<script src="/assets/site.js?v=${JS_VER}" defer></script>
</head>
<body>
${header(p)}
${breadcrumbs(crumbs)}
<main id="main">
${body}
</main>
${footer(waContext)}
</body>
</html>
`;
}

module.exports = { composer, firstLower, C, esc, t, tok, plain, hasToken, ICON, indIcon, waHref, waNeed, waChip, callBtn, waBtn, ctaRow, pickerChips, quoteForm, faqHtml, finalCta, page, orgNode, crumbNode, faqNode, howToNode, ld, addressText, addressHtml, mapsUrl };
