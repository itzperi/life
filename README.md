# Lifeline Crew website and growth programme

A static, server-rendered site for **Lifeline Crew** (manpower supply and recruitment, Tamil Nadu). It has 51 pages plus a 404 page, and no runtime dependencies.

```
npm run build    # generate dist/ from src/
npm run check    # acceptance checks
npm run serve    # local preview on :8080
npm run images   # re-render OG image and icons (needs Chrome or Edge)
```

## Where things are
| Path | What |
|---|---|
| `src/config.js` | **All business facts.** Unknown facts no longer show chips: fee and replacement use the neutral wording in `factFallbacks`, and sentences about capacity, licences, years, people placed and candidate fees (wrapped in `[[...]]` in the data files) stay hidden until you fill the value and rebuild |
| `src/data/services.js` | 4 service pages (permanent, contract, bulk, payroll), each with its own prefilled WhatsApp message |
| `src/data/industries.js` | 14 industry pages |
| `src/data/cities.js` | 20 city and district pages |
| `src/data/guides.js` | 4 guides |
| `src/build.js` | Templates for home, hubs, about, contact, jobs and privacy; sitemap, robots, llms.txt, redirects |
| `src/lib/layout.js` | Head, header, footer, sticky Call/WhatsApp bar, quote form, JSON-LD |
| `src/assets/site.js` | Lead-source tagging and the GA4 events `call_click`, `whatsapp_click`, `lead_submit` |
| `dist/` | **Deploy this folder** |
| `docs/` | Strategy deliverables (below) |

## Deliverables
1. Website: `dist/`. Deployment guide: `docs/03-deployment-guide.md`
2. Keyword map and page inventory: `docs/02-keyword-map.md`. Discovery and audit: `docs/01-discovery-and-audit.md`
3. Schema blocks: `docs/12-schema-blocks.md`. The site also ships `dist/robots.txt`, `dist/sitemap.xml` and `dist/llms.txt`
4. Business Profile checklist and directory NAP list: `docs/04-business-profile-and-directories.md`
5. 90-day content calendar and the first 12 drafts: `docs/05-content-calendar.md`
6. WhatsApp scripts: `docs/06-whatsapp-scripts.md`
7. Weekly report template: `docs/07-weekly-report-template.md`
8. Also: paid bridge `docs/08-paid-bridge.md`, lead tracking `docs/09-lead-tracking.md`, owner questions `docs/10-owner-questions.md`, 90-day plan `docs/11-90-day-plan.md`, fact sheet and rules `docs/00-facts-and-rules.md`
9. GEO analysis (AI-citation readiness): `docs/13-geo-analysis.md`
