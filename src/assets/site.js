/* Lifeline Crew: lead-source tagging, GA4 events (call_click, whatsapp_click, lead_submit) and the quote form. No dependencies. */
(function () {
  var w = window, d = document;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) w.gtag = function () { w.dataLayer.push(arguments); };
  var WA = d.documentElement.getAttribute('data-wa') || '919962299076';

  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } }

  // Work out where this visitor came from once per session; the code is added to every WhatsApp message as "Ref: ...".
  function source() {
    try { var saved = sessionStorage.getItem('ll_src'); if (saved) return saved; } catch (e) {}
    var q = new URLSearchParams(location.search), r = d.referrer, h = host(r), v;
    if (q.get('utm_source')) v = q.get('utm_source') + '/' + (q.get('utm_medium') || '-') + (q.get('utm_campaign') ? '/' + q.get('utm_campaign') : '');
    else if (q.get('gclid') || q.get('gbraid') || q.get('wbraid')) v = 'google/cpc';
    else if (q.get('fbclid')) v = 'meta/social';
    else if (/(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai|you\.com)$/.test(h)) v = 'ai/' + h;
    else if (/(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org)$/.test(h)) v = 'organic/' + h;
    else if (/justdial|sulekha|indiamart|tradeindia|exportersindia/.test(h)) v = 'directory/' + h;
    else if (h && h !== location.hostname.replace(/^www\./, '')) v = 'referral/' + h;
    else v = 'direct';
    v += ' ' + location.pathname;
    try { sessionStorage.setItem('ll_src', v); } catch (e) {}
    return v;
  }
  var SRC = source();

  // Append the source tag to every WhatsApp link's prefilled text.
  var links = d.querySelectorAll('a[href*="wa.me/"]');
  for (var i = 0; i < links.length; i++) {
    try {
      // Rebuild with encodeURIComponent (spaces as %20): some WhatsApp clients show "+" literally.
      var u = new URL(links[i].href);
      var t = u.searchParams.get('text') || 'Hi Lifeline Crew, I need staff.';
      links[i].href = u.origin + u.pathname + '?text=' + encodeURIComponent(t + '\n\nRef: ' + SRC);
    } catch (e) {}
  }

  d.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    if (a.hasAttribute('data-role') && a.closest('[data-composer]')) return; // composer chips only edit the message
    var href = a.getAttribute('href') || '', loc = a.getAttribute('data-loc') || 'content';
    var p = { link_location: loc, page_path: location.pathname, lead_source: SRC.split(' ')[0] };
    if (a.classList && a.classList.contains('chip')) p.service = (a.textContent || '').trim().slice(0, 80);
    if (href.indexOf('tel:') === 0) w.gtag('event', 'call_click', p);
    else if (href.indexOf('wa.me/') > -1) w.gtag('event', 'whatsapp_click', p);
  });

  var f = d.getElementById('quote-form');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (f.reportValidity && !f.reportValidity()) return;
    var o = {}, els = f.elements;
    for (var j = 0; j < els.length; j++) if (els[j].name) o[els[j].name] = String(els[j].value || '').trim();
    var msg = 'Hi Lifeline Crew, I need staff.' +
      '\nIndustry: ' + o.industry + '\nRole: ' + o.role + '\nHow many: ' + o.headcount +
      '\nCity: ' + o.city + '\nNeeded by: ' + o.by + '\nName / company: ' + o.name +
      '\n\nRef: ' + SRC;
    o.source = SRC; o.page = location.pathname; o.time = new Date().toISOString();
    var ep = f.getAttribute('data-endpoint');
    if (ep && navigator.sendBeacon) { try { navigator.sendBeacon(ep, new Blob([JSON.stringify(o)], { type: 'text/plain' })); } catch (err) {} }
    w.gtag('event', 'lead_submit', { industry: o.industry, city: o.city, headcount: o.headcount, lead_source: SRC.split(' ')[0] });
    setTimeout(function () { location.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg); }, 150);
  });

  // Floating service picker: open from the mobile bar, close with the X, Escape or a tap outside.
  var pk = d.getElementById('picker');
  if (pk) {
    var openers = d.querySelectorAll('[data-open-picker]');
    for (var k = 0; k < openers.length; k++) openers[k].addEventListener('click', function (e) { e.preventDefault(); pk.open = true; w.gtag('event', 'picker_open', { page_path: location.pathname }); });
    var x = pk.querySelector('[data-close-picker]');
    if (x) x.addEventListener('click', function () { pk.open = false; });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') pk.open = false; });
    d.addEventListener('click', function (e) { if (pk.open && !pk.contains(e.target) && !(e.target.closest && e.target.closest('[data-open-picker]'))) pk.open = false; });
  }

  // Crew request composer: role chips, headcount stepper, city and date write the WhatsApp message live.
  var cmps = d.querySelectorAll('[data-composer]');
  for (var ci = 0; ci < cmps.length; ci++) (function (cm) {
    var w0 = cm.querySelector('[data-when]'); var st = { role: '', n: 10, city: '', when: w0 ? w0.getAttribute('data-when') : 'within a week', ctx: cm.getAttribute('data-ctx') || '' };
    var pv = cm.querySelector('[data-preview]'), send = cm.querySelector('[data-send]'), out = cm.querySelector('[data-count]'), sel = cm.querySelector('[data-city]');
    var chips = cm.querySelectorAll('[data-role]'), whens = cm.querySelectorAll('[data-when]');
    for (var z = 0; z < chips.length; z++) { chips[z].setAttribute('role', 'button'); chips[z].setAttribute('aria-pressed', z === 0 ? 'true' : 'false'); }
    if (chips[0]) st.role = chips[0].getAttribute('data-role');
    if (sel) st.city = sel.value;
    var ta = cm.getAttribute('data-lang') === 'ta';
    function msg() {
      if (ta) return 'வணக்கம் Lifeline Crew,\nதேவை: ' + st.n + ' ' + st.role + (st.ctx ? ' ' + st.ctx : '') + '\nஇடம்: ' + (st.city || 'தமிழ்நாடு') + '\nஎப்போது: ' + st.when;
      return 'Hi Lifeline Crew, I need ' + st.n + ' ' + st.role + (st.ctx ? ' ' + st.ctx : '') + (st.city ? ' in ' + st.city : '') + ', needed ' + st.when + '.';
    }
    function render() {
      var m = msg();
      if (pv) pv.textContent = m;
      if (out) out.textContent = st.n;
      if (send) send.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(m + (ta ? '\nஷிப்ட் நேரம்: \nவேறு விவரம்: ' : '\nShift timing: \nAnything else: ') + '\n\nRef: ' + SRC);
    }
    function press(list, el) { for (var k = 0; k < list.length; k++) list[k].setAttribute('aria-pressed', list[k] === el ? 'true' : 'false'); }
    for (var k = 0; k < chips.length; k++) chips[k].addEventListener('click', function (e) { e.preventDefault(); st.role = this.getAttribute('data-role'); press(chips, this); render(); });
    for (var q = 0; q < whens.length; q++) whens[q].addEventListener('click', function () { st.when = this.getAttribute('data-when'); press(whens, this); render(); });
    var steps = cm.querySelectorAll('[data-step]');
    for (var r = 0; r < steps.length; r++) steps[r].addEventListener('click', function () { var dir = +this.getAttribute('data-step'), inc = st.n >= 50 ? 10 : st.n >= 20 ? 5 : 1; st.n = Math.max(1, Math.min(999, st.n + dir * inc)); render(); });
    if (sel) sel.addEventListener('change', function () { st.city = sel.value; render(); });
    if (send) send.addEventListener('click', function () { w.gtag('event', 'lead_submit', { form: 'composer', role: st.role, headcount: st.n, city: st.city || 'any', lead_source: SRC.split(' ')[0] }); });
    render();
  })(cmps[ci]);
})();
