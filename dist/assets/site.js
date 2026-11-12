/* Lifeline Placements: lead-source tagging, GA4 events (call_click, whatsapp_click, lead_submit) and the quote form. No dependencies. */
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
      var t = u.searchParams.get('text') || 'Hi Lifeline Placements, I need staff.';
      links[i].href = u.origin + u.pathname + '?text=' + encodeURIComponent(t + '\n\nRef: ' + SRC);
    } catch (e) {}
  }

  d.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
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
    var msg = 'Hi Lifeline Placements, I need staff.' +
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

  // Reveal cards as they scroll into view (skipped when the visitor prefers reduced motion).
  if ('IntersectionObserver' in w && !(w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -40px 0px' });
    var els = d.querySelectorAll('main .card, main .steps li, main .stat, main .faq details, main .city-cloud a');
    for (var r = 0; r < els.length; r++) { var b = els[r].getBoundingClientRect(); if (b.top > w.innerHeight) { els[r].classList.add('rv'); els[r].style.transitionDelay = (r % 4) * 60 + 'ms'; io.observe(els[r]); } }
  }
})();
