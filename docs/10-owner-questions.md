# Facts needed from the owner

Each fact below is a yellow "[… : to confirm]" chip on the site today. Send the answer and it goes into `src/config.js`. One rebuild then updates every page, the schema and llms.txt.

Ordered by impact on leads and on AI citations.

| # | Fact | Why it matters | Where it shows |
|---|---|---|---|
| 1 | **Office address and PIN**: ✅ confirmed 600029 (12 Nov 2026). Still open: are the T Nagar offices closed? | NAP must match the Business Profile and every directory. Today four addresses are live | Every footer, Contact, About, schema |
| 2 | **Turnaround**: ✅ confirmed: helpers 48 hours, skilled roles 7 days (12 Nov 2026) | ChatGPT's top picks state mobilisation times. This is the strongest GEO and ads claim | Home, all 34 industry and city pages |
| 3 | **Largest order delivered** (headcount in one order, and for which type of employer, without naming them) | "Can you handle 100 workers?" is the first question bulk buyers and AI answers ask | Bulk hiring FAQ, guides |
| 4 | **Replacement terms** (days, free or paid) | A standard question in every enquiry | All pages (process step 4), FAQs |
| 5 | **Fee or service charge** (a range is fine, e.g. "one month's salary for permanent; x% for contract") | "How much does a manpower agency charge" has search demand and appears in PAA | Home FAQ, cost guide |
| 6 | **Candidate fee policy**: do job seekers pay anything? | Trust; the /jobs/ page and job-seeker replies on WhatsApp | /jobs/, guides |
| 7 | **Licences and registrations**: GST number, PF and ESI codes, contract labour licence (needed at 50+ contract workers), **PSARA** (needed to supply security guards) | Legal. The old site offers security guards; the new one does not until PSARA is confirmed | About, guides |
| 8 | **Years in business** and **people placed** (only if provable) | E-E-A-T and AI citations | Home trust strip, About |
| 9 | **Founder bio**: V. Arun Kumar's experience in two or three lines, plus a real photo | E-E-A-T | About |
| 10 | **Working hours** (the Business Profile shows "closes 8 pm") | The 5-minute reply promise, Contact page | Contact |
| 11 | **Payroll outsourcing**: still offered? (listed on the old site) | It appears as a fourth hiring model | Home, About, comparison guide |
| 12 | **Social profile URLs** (Facebook, LinkedIn, YouTube, Instagram) | `sameAs` in schema ties the entity together | Schema |
| 13 | **Business Profile access**: who owns the login? | Needed for posts, services, the name fix and the address fix | n/a |
| 14 | **Case studies**: 2-3 clients willing to be named, or described anonymously with written permission | Proof that AI answers and buyers trust | About, industry pages |
| 15 | **Second number 98847 63475**: retire it from all listings? | One entity, one number | Directories |

Also decide:
- Should model-training crawlers (GPTBot, ClaudeBot, Google-Extended) stay allowed? They are allowed in robots.txt by default.
- Who replies on WhatsApp, and whether job seekers should get a separate number so employer leads are answered within 5 minutes.
