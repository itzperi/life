# Lifeline Crew lead machine: plan for 100-120 employer enquiries a day across Tamil Nadu

Written 13 Nov 2026. Every number marked **(A)** is an assumption to replace with real data after week 3. No ranking, citation or lead count is guaranteed.

## 1. The honest picture
- **120 enquiries a day is about 3,600 a month.** No Tamil Nadu agency gets that from search and AI answers alone in its first year. Google, ChatGPT and Gemini cite pages that already rank and brands that are mentioned widely. That takes 6-9 months to build.
- **The machine therefore has five engines.** AEO/GEO (answers and AI citations), Google Maps, directories, paid search and Meta click-to-WhatsApp. The organic engines grow every month; paid fills the gap while they grow, and gets cut back as organic takes over.
- **Define a lead before counting.** A lead is an employer WhatsApp message, call or form with a role and a headcount. A *qualified* lead also has a start date within 60 days and a Tamil Nadu location. Job seekers are counted separately and never reported as leads.

## 2. Target mix (enquiries per day)
| Engine | Month 1 | Month 3 | Month 6 | Month 9 | What drives it |
|---|---|---|---|---|---|
| Google Business Profile (Maps calls and WhatsApp) | 3 | 6 | 10 | 12 | 178 reviews today; 15+ new reviews a month; 2 posts a week |
| Organic search + AEO answer pages | 1 | 4 | 12 | 22 | 62 pages now; 3 new answers a week; refreshed every 60-90 days |
| AI assistants (ChatGPT, Gemini, Perplexity, AI Overviews) | 0 | 1 | 4 | 8 | Entity consistency, brand mentions, answer pages cited |
| Directories (JustDial, IndiaMART, Sulekha, TradeIndia) | 4 | 10 | 15 | 18 | Complete listings now, paid packages from month 2 **(A)** |
| Google Ads search | 10 | 25 | 30 | 30 | Rs 9,000-18,000 a day at full scale **(A)** |
| Meta click-to-WhatsApp | 8 | 20 | 25 | 25 | Rs 4,000-15,000 a day at full scale **(A)** |
| Referrals and repeat clients | 1 | 3 | 5 | 5 | Ask every placed client |
| **Total** | **27** | **69** | **101** | **120** | |

### Paid assumptions (replace after week 3)
- Google Search: CPC Rs 30-60, 8-12% of clicks become an enquiry, so about Rs 300-600 per enquiry **(A)**. 30 a day means roughly Rs 9,000-18,000 a day.
- Meta click-to-WhatsApp: Rs 80-200 per conversation, and a third to a half are employers rather than job seekers **(A)**. 25 employer enquiries a day needs 50-75 conversations, roughly Rs 4,000-15,000 a day.
- **Monthly paid budget at month 9: about Rs 3.9-9.9 lakh (A).** Scale only the ad groups whose cost per *qualified* lead is under the target the owner sets (see docs/08).
- Demand ceiling: there may not be enough employer searches in Tamil Nadu to buy 30 search enquiries a day at a sane price. The first 3 weeks of impression-share data will show the ceiling. If it is low, shift budget to Meta and directories rather than raising bids.

## 3. Engine 1: AEO, the answer engine (implemented on the site)
**What is live now (13 Nov 2026):**
- `/answers/` with 9 answer pages. Each has the question as the H1, a 40-60 word direct answer first, a table or steps, a dated legal note, sources and FAQ schema, and a WhatsApp request composer.
- Every industry, city, service and guide page already opens with a quotable summary and ends with question-and-answer blocks: 50+ pages carry FAQ schema.
- `/ta/` is a Tamil home page with hreflang and a Tamil WhatsApp composer, for Tamil-language and voice queries.

**Publishing machine: 3 answers a week, about 100 in year one**
1. **Source questions from real enquiries.** Every WhatsApp question an employer asks twice becomes a candidate. Add People Also Ask questions from Google and questions from Quora and Reddit.
2. **Write the short answer first:** 40-60 words that name Lifeline Crew only where it is genuinely the answer.
3. **Add the proof:** a table, steps, a source link and an "as of" date. Never publish a legal or wage number without a source.
4. **Add it to `src/data/answers.js`**, then run `npm run build`, `npm run check`, push and request indexing in Search Console.

**Next 30 questions (queue):**
| # | Question | Type |
|---|---|---|
| 1 | How many workers can an agency supply for a new production line in Sriperumbudur? | Local, needs owner capacity figure |
| 2 | What is the minimum wage for a helper in Tamil Nadu in 2026? | Legal, cite the TN notification |
| 3 | What does a housekeeping supervisor do, and how many do I need per 20 staff? | Role |
| 4 | Do contract workers get bonus and leave? | Legal |
| 5 | What is the notice period to end a manpower contract? | Contract |
| 6 | How do I check a nurse's Tamil Nadu registration? | Healthcare |
| 7 | Can I hire Hindi-speaking workers for a Tiruppur unit? | Local |
| 8 | What is principal employer registration under the OSH Code? | Legal |
| 9 | How do I hire BPO agents with Tamil and English voice skills in Coimbatore? | Local and role |
| 10 | What should a manpower supply agreement include? | Contract |
| 11 | How much buffer staff should I plan for absenteeism? | Ops |
| 12 | What is the difference between a manpower agency and a facility management company? | Comparison |
| 13 | How do I hire staff for a new showroom opening in T Nagar? | Local |
| 14 | Do apprentices count towards the contract labour licence threshold? | Legal, verify first |
| 15 | What documents does a new contract worker need on joining day? | Ops |
| 16 | How do I hire forklift operators in Chennai? | Role |
| 17 | How fast can an agency replace a worker who leaves? | Lifeline answer: needs owner's replacement terms |
| 18 | What is payroll outsourcing, and when does it save money? | Service |
| 19 | How do I hire staff for a hostel or PG in Chennai? | Industry |
| 20 | What are the rules for working hours and overtime under the OSH Code? | Legal |
| 21 | How do I hire mobile-phone assembly operators near Sriperumbudur? | Local and role |
| 22 | How do I hire for a spa or salon: licences and staff checks? | Industry |
| 23 | Is ESI mandatory for contract workers earning more than Rs 21,000? | Legal |
| 24 | How do I hire temporary staff for Pongal and Diwali season? | Seasonal |
| 25 | What does an agency's service charge cover? | Pricing |
| 26 | How do I hire pharma QC staff with GMP experience? | Industry |
| 27 | What is a gate pass and ID card process for contract staff? | Ops |
| 28 | How do I hire warehouse staff for a new e-commerce hub in Tiruvallur? | Local |
| 29 | What happens if a contract worker is injured at my site? | Legal (ESI and EC) |
| 30 | How do I evaluate an agency's candidate quality in a 2-week trial? | Process |

## 4. Engine 2: GEO, getting cited by AI assistants
1. **One entity.** Rename the Business Profile and every directory to "Lifeline Crew" once the signboard matches, with the identical NAP. The site's schema already lists the old names as alternate names.
2. **sameAs links.** Send the Facebook, LinkedIn, YouTube, Instagram, JustDial and IndiaMART URLs; they go into the schema on every page.
3. **Brand mentions beat backlinks for AI** (Ahrefs, Dec 2025):
   - **YouTube:** 2 short videos a week, Tamil and English, one answer per video. Title format: "[Question] | Lifeline Crew Chennai". Link to the matching answer page.
   - **LinkedIn:** the owner posts 3 times a week, using real hiring situations without client names.
   - **Quora:** 5 answers a week on hiring questions, disclosing "I run Lifeline Crew". Never post fake accounts or fake reviews.
   - **Reddit** (r/Chennai, r/TamilNadu, r/IndiaBusiness): answer only when genuinely useful, with disclosure. Do not post promotions.
   - **Associations and press:** CII Tamil Nadu, TANSTIA, MSME bodies, the Tiruppur Exporters' Association directory, and guest articles in local business press.
4. **Track citations monthly** with these 12 prompts in ChatGPT, Gemini, Perplexity and Google AI Mode, and log who is cited:
   1. Best manpower agency in Chennai for factory workers
   2. Bulk hiring agency in Tamil Nadu for 100 workers
   3. Housekeeping staff supplier in Chennai for offices
   4. Manpower agency near Sriperumbudur for electronics plant
   5. Contract staffing company in Coimbatore
   6. Pharma manpower consultancy Tamil Nadu
   7. How fast can a manpower agency supply helpers in Chennai
   8. Does a contractor need a licence for 50 workers in Tamil Nadu
   9. Who pays PF and ESI for contract workers
   10. Manpower agency in Hosur for auto component plant
   11. Hospital staff recruitment agency Chennai
   12. Tamil: சென்னையில் மேன்பவர் ஏஜென்சி
   
   Baseline (12 Nov 2026): ChatGPT named "Life Line Placements, Aminjikarai" as a secondary option for prompt 3, and AI Overviews listed it for prompt 6.

## 5. Engine 3: Google Maps
- Chennai profile: weekly photos (office, team, candidate briefing; real photos only), 2 posts a week, services for all 14 industries, and Q&A answered.
- **Reviews:** ask every placed client the same way (docs/06). Target 15 a month. No incentives, no review gating, no staff writing reviews.
- **Other districts:** use service areas. Create a new profile only for a real, staffed office with signage. Fake or virtual offices get suspended and damage the main profile.

## 6. Engine 4: directories as lead sources
JustDial and IndiaMART rank for nearly every target query. Complete the free listings in week 1, then test one paid package each for 60 days **(A)**. Keep a package only if its cost per qualified lead beats Google Ads. Log every directory lead with source `directory/<name>`.

## 7. The lead-handling machine (needed before scaling past 30 a day)
- **Capacity:** 120 enquiries a day over 10 hours is about 12 an hour. A 5-minute first reply needs 2-3 people on WhatsApp in shifts, plus one person quoting.
- **WhatsApp Business Platform (API)** through a provider such as Interakt, Wati or AiSensy: shared inbox, labels, auto-assignment and templates. The free app is limited to 4 linked devices and gets unmanageable past about 30 chats a day.
- **Auto-qualifier flow** (runs before a human replies, under 60 seconds):
  1. "Are you hiring staff, or looking for a job?" Job seekers are routed to the /jobs/ reply and labelled.
  2. Role? (buttons: factory, BPO, office, housekeeping, hospital, retail, warehouse, other)
  3. How many people?
  4. Which city or district?
  5. When do you need them? (this week, 2 weeks, this month, planning)
  6. Then: "Thanks. A Lifeline Crew coordinator will reply within 5 minutes during working hours."
- Messages from the website composer already arrive with role, headcount, city, date and source filled in, so the flow can skip straight to the human reply.
- **Lead sheet columns and source tags:** docs/09. Report cost per *qualified* lead weekly (docs/07).

## 8. Tamil Nadu rollout
| Wave | When | Districts | What is needed |
|---|---|---|---|
| 1 | Now | Chennai, Kanchipuram (Sriperumbudur, Oragadam), Chengalpattu, Tiruvallur | Live; Ads and Meta start here |
| 2 | Month 2-3 | Coimbatore, Tiruppur, Erode, Salem, Hosur, Krishnagiri | City pages live; add Ads ad groups per cluster; answer pages with local questions |
| 3 | Month 4-6 | Madurai, Tiruchirappalli, Thanjavur, Dindigul, Karur, Namakkal, Vellore | City pages live; local answers; consider a local recruiter if leads exceed 5 a day |
| 4 | Month 6-9 | Tirunelveli, Thoothukudi, Nagercoil, then Ranipet, Tiruvannamalai (Cheyyar), Cuddalore, Virudhunagar, Pudukkottai and the rest | Add a city page only where there is real local detail; never publish templated near-duplicates |

## 9. What was implemented today
- 9 answer pages, plus the `/answers/` hub linked from the home page, header and footer
- A Tamil home page `/ta/` with hreflang (en-IN, ta-IN, x-default) and a Tamil WhatsApp request composer
- The bilingual composer: every page writes a WhatsApp message with role, headcount, city and date, tagged with the lead source
- Sitemap, llms.txt and the keyword map regenerate automatically (62 pages)

## 10. Owner actions this week (in order)
1. Send the social and directory profile URLs (for sameAs).
2. Approve the Ads and Meta test budgets and the cost-per-qualified-lead target.
3. Choose a WhatsApp API provider, or confirm who will reply on the free app until volume passes 30 a day.
4. Confirm the replacement terms and the largest order size: two of the most-asked answers depend on them.
5. Have a native Tamil speaker review `/ta/` before launch.
