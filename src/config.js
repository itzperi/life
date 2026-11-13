// Single source of truth for business facts. Change a value here and rebuild (npm run build).
// Values set to null render as a visible yellow "[to confirm]" chip on the site and are left out of JSON-LD.
module.exports = {
  name: 'Lifeline Crew',
  alternateName: ['Lifeline Placements', 'Life Line Placements'], // earlier brand name, and the spelling on the current Google Business Profile
  url: 'https://www.lifelineplacements.com', // no trailing slash
  phoneDisplay: '+91 99622 99076',
  tel: '+919962299076',
  wa: '919962299076',
  email: 'lifelineplacements@gmail.com', // published on the old site and Facebook; owner to re-confirm
  founder: { name: 'V. Arun Kumar', qualification: 'B.Sc', role: 'Head of Lifeline Crew', bio: null },

  // Address: the PIN code conflicts between the website (600029) and the Business Profile (600030).
  // Set confirmed: true and fill street + postalCode once the owner confirms; the full address then appears everywhere.
  address: {
    confirmed: true, // PIN 600029 confirmed by owner 12 Nov 2026
    street: '4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road',
    locality: 'Aminjikarai',
    city: 'Chennai',
    region: 'Tamil Nadu',
    postalCode: '600029',
    country: 'IN',
  },
  hours: null, // e.g. 'Mon-Sat 9:30 am - 8:00 pm'. When set, it also goes into schema as openingHours text.
  hoursNote: 'Open until 8:00 pm, as listed on our Google Business Profile. WhatsApp any time; we reply during working hours.', // shown while hours is null
  // Approximate map pin for the Aminjikarai office, used only for the embedded map link (not in schema).
  mapQuery: 'Life Line Placements, Nelson Towers, Nelson Manickam Road, Aminjikarai, Chennai 600029',

  // Business Profile rating, shown as a dated fact (no review markup). Update or set to null.
  googleRating: { rating: '4.6', count: 178, asOf: '12 Nov 2026', url: 'https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%20Aminjikarai%20Chennai' },

  // Unknown facts. Put the confirmed wording in place of null (e.g. TURNAROUND: '48 hours for helpers and 5-7 days for skilled roles').
  facts: {
    TURNAROUND: '48 hours for helpers and 7 days for skilled roles', // owner confirmed 12 Nov 2026
    REPLACEMENT: null,
    FEE: null,
    CANDIDATE_FEE: null,
    CAPACITY: null,
    YEARS: null,
    PLACED: null,
    LICENCES: null,
  },
  // Neutral wording used while a fact above is null, so pages read cleanly without inventing numbers.
  // Tokens with no fallback (CAPACITY, LICENCES, YEARS, PLACED, CANDIDATE_FEE) sit inside [[optional spans]]
  // in the data files: the whole span is left out until the owner confirms the fact, then it appears automatically.
  factFallbacks: {
    FEE: 'quoted in writing for each requirement before you commit',
    REPLACEMENT: 'set out in writing with every quote',
  },
  // Privacy-notice defaults. Owner to confirm with a legal adviser.
  privacy: {
    retention: '12 months after our last contact with you, unless a law requires us to keep it longer',
    grievanceOfficer: 'V. Arun Kumar, Head of Lifeline Crew',
  },
  factLabels: {
    TURNAROUND: 'turnaround time',
    REPLACEMENT: 'replacement terms',
    FEE: "Lifeline's fee",
    CANDIDATE_FEE: 'candidate fee policy',
    CAPACITY: 'largest order size',
    YEARS: 'years in business',
    PLACED: 'people placed',
    LICENCES: 'licences held',
  },
  payrollOutsourcing: true, // listed on the old site's services menu; owner to re-confirm

  // Profiles for JSON-LD sameAs and the footer. Add exact URLs once confirmed.
  sameAs: [
    // 'https://www.facebook.com/<page>',
    // 'https://www.linkedin.com/company/<page>',
    // 'https://www.youtube.com/@<channel>',
    // 'https://www.instagram.com/<handle>',
  ],

  ga4: '', // e.g. 'G-XXXXXXXXXX'. Empty = no analytics script is loaded (events still go to dataLayer).
  leadEndpoint: '', // Google Apps Script web-app URL that appends form leads to the lead sheet (see docs/09-lead-tracking.md)
  updated: '2026-11-12',
  updatedDisplay: '12 Nov 2026',
};
