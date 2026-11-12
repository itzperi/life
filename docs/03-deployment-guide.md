# Deployment guide

The site is plain static HTML generated into `dist/`. It needs no database, no PHP and no WordPress. Any static host works.

## 0. Build locally
```
npm run build      # writes dist/
npm run check      # acceptance checks (H1, titles, canonicals, JSON-LD, phone links, broken links, sitemap)
npm run serve      # preview at http://localhost:8080
```
Requires Node 18 or later. There are no npm dependencies.

To change a fact (address, turnaround, fees, GA4 ID, lead-sheet URL), edit `src/config.js` and rebuild. Every page, the JSON-LD, llms.txt and the sitemap update together.

## Option A (recommended): Cloudflare Pages, free
Why: free SSL, a CDN with edge locations in Chennai and Mumbai, HTTP/3, automatic compression. It also reads the `_redirects` and `_headers` files.

1. Create a free Cloudflare account and add the site `lifelineplacements.com`. Cloudflare copies the existing DNS records.
2. At the domain registrar, change the nameservers to the two Cloudflare gives you. Keep the old hosting live until the new site is tested.
3. Upload the site. Either:
   - Workers & Pages → Create → Pages → **Upload assets** → drag the `dist` folder, or
   - from this machine: `npx wrangler pages deploy dist --project-name lifeline-placements` (wrangler is already installed).
4. Pages project → Custom domains → add `www.lifelineplacements.com` and `lifelineplacements.com`.
5. Rules → Redirect Rules → redirect `lifelineplacements.com/*` to `https://www.lifelineplacements.com/${1}` (301), so there is one canonical host.
6. SSL/TLS → set to **Full**, and turn on **Always Use HTTPS**.
7. Email: if the gmail address is the only mailbox, there are no MX records to move. If a domain mailbox exists, check that its MX records were copied in step 1.

## Option B: keep the current Apache host
1. Back up the current site through the host's file manager or FTP.
2. Delete the old `index.html`, `aboutus.html`, `services.html`, `contactus.html` and `enquiry.html`.
3. Upload **the contents of** `dist/` to `public_html/`, including the hidden `.htaccess`.
4. The `.htaccess` forces HTTPS and www, 301-redirects the old URLs, sets caching and gzip, and serves `404.html`.
5. Ask the host to enable free SSL (Let's Encrypt or AutoSSL) if it is not already on.

## Redirect map (both options)
| Old URL | New URL |
|---|---|
| /index.html | / |
| /aboutus, /aboutus.html | /about/ |
| /contactus, /contactus.html | /contact/ |
| /services, /services.html | /industries/ |
| /enquiry, /enquiry.html | /contact/ |

Test after launch: `curl -I https://www.lifelineplacements.com/aboutus.html` should return `301` with `location: /about/`.

## After go-live (Week 1)
1. **Google Search Console:** add a Domain property (DNS TXT verification works through Cloudflare). Submit `https://www.lifelineplacements.com/sitemap.xml`. Use URL Inspection → Request indexing for the home page, /cities/chennai/ and the top 5 industry pages.
2. **Bing Webmaster Tools:** import from Search Console and submit the sitemap. Bing's index feeds Copilot and is used by ChatGPT search.
3. **IndexNow:** on Cloudflare, enable Caching → Configuration → **Crawler Hints** (it sends IndexNow automatically). On Apache, generate a key in Bing Webmaster → IndexNow, place `<key>.txt` in the site root, and ping `https://api.indexnow.org/indexnow?url=<changed-url>&key=<key>` after each update.
4. **GA4:** create a property, copy the `G-…` ID into `config.ga4`, rebuild and redeploy. In GA4 → Admin → Events, mark `whatsapp_click`, `call_click` and `lead_submit` as key events.
5. **Lead sheet:** follow `09-lead-tracking.md` and put the Apps Script URL into `config.leadEndpoint`.
6. **Business Profile:** set the website to `https://www.lifelineplacements.com/cities/chennai/?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
7. Run PageSpeed Insights (pagespeed.web.dev) on the live home page and on one industry and one city page, and record the results in the first weekly report.

## Updating content
- Edit `src/data/*.js` (industries, cities, guides) or `src/config.js`, update `updated` and `updatedDisplay` in config, then run `npm run build` and `npm run check` and redeploy.
- Refresh the key pages every 60 to 90 days with real changes (new FAQs from WhatsApp enquiries, new proof). Do not just change the date.
