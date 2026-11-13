# GEO analysis: AI-citation readiness (13 Nov 2026)

Scope: the built site in `dist/` (51 pages), before launch. Method: a scripted check of every page plus robots.txt, following the `seo-geo` skill. Google's position applies: optimising for AI search is SEO done well. llms.txt carries no weight for Google.

## Score: 78/100 (readiness; not a measured citation rate)
| Area | Weight | Result | Notes |
|---|---|---|---|
| Citability | 25% | 23/25 | 50 of 51 pages state who, what, where and how to contact in their first 30%; the guides hub was fixed in this pass. Turnaround is a concrete, quotable fact (helpers 48 h, skilled 7 days) |
| Structure | 20% | 19/20 | One H1 per page. Question headings on 49 pages. FAQ blocks with 40-60 word direct answers. Comparison tables on services and guides |
| Multi-modal | 15% | 7/15 | Map, icons and share image only. No video, and no real photos of the office or team. YouTube is the strongest brand-mention signal (Ahrefs 2025) |
| Authority and brand | 20% | 11/20 | Founder named (Person schema), dates on every page, primary sources cited in the cost guide. **Missing:** `sameAs` profile links, case studies, a Wikipedia or Wikidata entity, Reddit or Quora presence. The rename splits the entity until the listings are renamed |
| Technical access | 20% | 18/20 | All content is server-rendered HTML. robots.txt allows Googlebot, Bingbot, Applebot, OAI-SearchBot, Claude-SearchBot and PerplexityBot. Not live yet, so nothing is indexed |

## Crawler access (each line governs a different capability)
- Google Search, AI Overviews, AI Mode: **Googlebot allowed**
- ChatGPT Search citations: **OAI-SearchBot allowed** (GPTBot, the training crawler, is separately allowed)
- Claude search citations: **Claude-SearchBot allowed** (ClaudeBot, training, separately allowed)
- Perplexity: **PerplexityBot allowed**
- Bing and Copilot: **Bingbot allowed**
- Apple Siri, Spotlight and Safari: **Applebot allowed** (Applebot-Extended, training opt-out signal, allowed)
- Gemini and Vertex training and grounding: **Google-Extended allowed**. This does not affect Google Search

## llms.txt
Present (`/llms.txt` and `/llms-full.txt`), with the brand facts block and the old names listed. Optional; Google ignores it.

## Top 5 changes, by impact
1. **Rename the Business Profile and directories to Lifeline Crew** once the signboard matches (see docs/04). Until then AI answers will keep naming "Life Line Placements".
2. **Send the profile URLs** (Facebook, LinkedIn, YouTube, Instagram, JustDial, IndiaMART) so they go into `sameAs`. Web search could not confirm the exact URLs, so none were guessed.
3. **Publish 8 short YouTube videos** (calendar in docs/05), each linking to its matching page. Mention "Lifeline Crew" plus the role and city in the title.
4. **Two or three case studies with written permission**, giving client type, headcount, role, city and days to fill. This is the single most citable proof.
5. **Fill the remaining facts** (fee range, replacement days, largest order, licences, years). Sentences about these stay hidden until confirmed, and each one adds a quotable answer.

## Re-check
After launch, run the same 10 prompts monthly in ChatGPT, Gemini, Perplexity and AI Overviews (template in docs/07). Baseline from 12 Nov 2026: ChatGPT listed "Life Line Placements, Aminjikarai" as a secondary option; AI Overviews listed it for pharma manpower queries.
