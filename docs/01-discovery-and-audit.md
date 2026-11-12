# Step 1: Discovery and audit (12 Nov 2026)

## 1. Audit of the existing site (www.lifelineplacements.com), 287 words

**Pages found:** 5. These are / (index.html), aboutus, services, contactus and enquiry. There is no robots.txt and no sitemap.xml (both return 404). The server is Apache.

**Titles and descriptions:** every page has the same 400+ character title, a keyword list of areas such as "Best Security Agency in Chennai, T Nagar, Porur…". The description is also duplicated and stuffed. Google truncates both and may rewrite them.

**H1:** none on any page. **Canonical:** none. **Schema:** none. **Open Graph:** none.

**Content:** about 630 words on the home page, about 170 on About and 70 on Contact. The copy is generic. It contains another company's name ("Havansys has experience…"), unrelated text about ERP accounting under "Call Center", and claims such as "100% Placement Services". The testimonials are from job seekers, not employers.

**NAP:** inconsistent across the web.
- Site contact page: Nelson Tower, Aminjikarai, **600029**
- About page: No. 75, SWB Road, T Nagar, 600017
- Google Business Profile: Nelson Towers, Aminjikarai, **600030**
- Directories: two more T Nagar addresses and a second phone number (98847 63475)

**Name:** "Lifeline Placements" on the site, "Life Line Placements" on the Business Profile, JustDial and IndiaMART.

**Speed:** the first response took 13.4 s (cold server); repeat requests took about 0.2 s. The HTML is 45 KB. Run PageSpeed on the live URL to measure field data.

**What ranks:** the brand query "Life Line Placements Chennai" returns the site, the Business Profile (4.6★, 178 reviews), JustDial, IndiaMART and Facebook (3.5K followers). Google's AI Overview for "pharma manpower consultancy tamil nadu" lists Life Line Placements (Aminjikarai). No generic employer query we tested shows the website in the top organic results.

**Keep and redirect:** none of the 5 pages ranks for a non-brand query, so nothing needs preserving. All old URLs 301 to the nearest new page (see `02-keyword-map.md`). The domain and the Business Profile carry the brand equity. Keep both.

**Compliance flags found:** the old site advertises **Security Guard Services** (this needs a PSARA licence) and "Packers and Movers". The new site leaves security guards out until the licence is confirmed.

## 2. Google India SERP study (15 queries, gl=in)

| Query | What wins | Notes / People Also Ask |
|---|---|---|
| manpower supplier chennai | Local pack (BBB, Multi-Purpose, Yas), Randstad, TeamLease, JustDial ×4, IndiaMART, Futurz | PAA: "Do job consultants charge money?", "Who are reputable labour contractors in Chennai?" |
| bulk hiring agency tamil nadu | Cynosure, cliqhr, local pack (Nagercoil, Avadi), Alp, Jobanya, TN govt OMCL | Agency service pages with bulk FAQs win |
| housekeeping staff supplier chennai | **AI Overview**, IndiaMART, JustDial, local pack (maid and security firms), Sulekha | Directories set prices (Rs 499/day) |
| pharma manpower consultancy tamil nadu | **AI Overview lists Life Line Placements**, Seven Consultancy, ScopeHR, local pack including Life Line Placements | Strongest existing visibility |
| bpo staffing coimbatore | JustDial, local pack, Indeed, Naukri, Apna, foundit | Job-board heavy; candidate intent dominates |
| security guard agency chennai for companies | Local pack (security firms), S&IB, JustDial | PSARA firms only; out of scope for now |
| factory manpower supply sriperumbudur | JustDial ×3, Jayathirees, SRS Group, IndiaMART, a local-pack single | Local Sriperumbudur firms win |
| contract staffing company chennai | Local pack (Randstad, Covenant), Google Jobs, Randstad, TalentPro, Seven, RevenueBase list | Lists and big brands |
| manpower agency tiruppur textile | AI Overview, local Tiruppur pack, JustDial, IndiaMART, Facebook | Local office wins the pack |
| manpower consultancy hosur | Local Hosur pack, JustDial, IndiaMART, Divya, Fortuna | Local office wins the pack |
| how much does a manpower agency charge in chennai | Blog posts (8.33-20% of CTC), Quora, PlacementIndia, AB7 | PAA: "Typical fees in India?", "What is the placement fee?" |
| hospital staff recruitment agency chennai | JustDial, nursing agency profile, doctor-recruitment sites | Niche specialists |
| manpower consultancy madurai | Local Madurai pack, JustDial, Indeed | Local office wins the pack |
| "Life Line Placements" Chennai | Own site, Business Profile panel, JustDial, IndiaMART, servicebazzar, idbf, biz15 | AI Overview mixes old addresses |
| 99622 99076 | Own site, servicebazzar, idbf, Facebook, LinkedIn, Castrix case study | Phone is consistent; addresses are not |

**Takeaways**
1. Local packs decide most "near me" style queries. Lifeline can compete in Chennai, where the office is. Other districts need city pages that win the organic results below the pack. A local pack outside Chennai needs a real local office.
2. JustDial and IndiaMART rank for almost every query, so complete listings there are a lead channel in their own right.
3. Job boards crowd generic queries ("bpo staffing coimbatore"). Ads need heavy negative keywords.
4. Competitor pages (CIEL HR, Alp, Fulcrum, TA Solutions) are templated city pages with little local detail. The specific industry and city pages planned here are the gap.

## 3. AI assistant citations

| Assistant | Prompt | Result | Sources cited |
|---|---|---|---|
| ChatGPT (logged out, web search) | Which manpower agency in Chennai supplies housekeeping and factory staff to companies? | Top 4: Godstone Consultech, TrustLine, MetroMates, SAP Ventures. **Life Line Placements (Aminjikarai, +91 99622 99076) listed under "other suppliers worth contacting"** | Agency websites, JustDial-type listings |
| ChatGPT (logged out, web search) | Recommend a bulk hiring agency in Tamil Nadu for 100 factory workers in Sriperumbudur | Raptor Staffing (first), Godstone, DMS, RSK, Adroit. Lifeline not mentioned | Agency websites that state "10 to 500 workers", "24-72 hour mobilisation", PF/ESI and named SIPCOT areas |
| Google AI Overview | pharma manpower consultancy tamil nadu | **Lists Life Line Placements**, Nelson Manickam Road, Aminjikarai | Google's own index and the Business Profile |
| Google AI Overview | "Life Line Placements" Chennai | Describes the firm, names V. Arun Kumar, gives **both** T Nagar and Aminjikarai addresses | Own site, IndiaMART, directories |
| Perplexity | (attempted) | Requires sign-in to answer; not tested. We do not create accounts | n/a |
| Gemini | (attempted) | Requires Google sign-in; not tested | n/a |

**What AI answers reward:** explicit, checkable statements on the agency's own site: capacity range, mobilisation time, PF/ESI handling, named industrial areas, and a phone number. Lifeline's new pages carry all of these, but turnaround and capacity are `[to confirm]` until the owner supplies real numbers. **Those two facts are the biggest GEO lever available.**

Re-check plan: the same 10 prompts every 4 weeks in ChatGPT, Gemini, Perplexity (signed in by the owner) and AI Overviews, logged in the weekly report.

## 4. Keyword map
See `02-keyword-map.md` (generated from the page data on every build, so it cannot drift from the site).
