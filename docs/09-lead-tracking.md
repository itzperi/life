# Lead tracking: sources, UTMs and the lead sheet

## How the website tags each lead
`/assets/site.js` works out the visitor's source once per session and adds it to every WhatsApp message as a last line, for example:

```
Ref: organic/google.com /industries/pharma/
Ref: ai/chatgpt.com /cities/hosur/
Ref: google/cpc /cities/chennai/
Ref: google/organic/gbp /cities/chennai/
Ref: directory/justdial.com /
Ref: direct /contact/
```

The first part is the source and the second is the landing page. The person handling WhatsApp copies it into the lead sheet's **Source** column. The quote form also sends the same data to the sheet automatically, once the endpoint below is set.

GA4 receives `call_click`, `whatsapp_click` (with `link_location`: header, hero, sticky_bar, final_cta, footer, form…) and `lead_submit` (with industry, city, headcount, lead_source).

## UTM conventions (use exactly these)
| Placement | Link |
|---|---|
| Business Profile website | `/cities/chennai/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Google Ads | auto-tagging (gclid) is on; the source shows as `google/cpc` |
| Meta click-to-WhatsApp | opens WhatsApp directly. Put a code in the prefilled text: `[META-HK]`, `[META-FAC]`, `[META-BPO]` |
| JustDial / IndiaMART / Sulekha website field | `/?utm_source=justdial&utm_medium=directory` (change the source per directory) |
| LinkedIn posts | `?utm_source=linkedin&utm_medium=social&utm_campaign=<post-topic>` |
| YouTube descriptions | `?utm_source=youtube&utm_medium=video&utm_campaign=<video-slug>` |
| WhatsApp status / broadcasts | `?utm_source=whatsapp&utm_medium=broadcast` |

Calls cannot carry a tag. Ask every caller: "How did you find us: Google Maps, Google search, ChatGPT or another AI app, JustDial, an ad, or a referral?"

## Lead sheet (Google Sheets) columns
`Date | Time | Name / company | Phone | Industry | Role | Headcount | City | Needed by | Source | Landing page | Status (New / Qualified / Quoted / Won / Lost / Job seeker) | Quote value (Rs) | Quote date | Won date | Placements | Lost reason | Notes`

**Qualified** means: an employer (not a job seeker), with a real role, a headcount, and a start date within 60 days.

## Auto-append form leads (Google Apps Script)
1. Create the sheet with the columns above and name the tab `Leads`.
2. Extensions → Apps Script → paste:

```javascript
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActive().getSheetByName('Leads');
  var now = new Date();
  var parts = String(d.source || '').split(' ');
  sh.appendRow([
    Utilities.formatDate(now, 'Asia/Kolkata', 'yyyy-MM-dd'),
    Utilities.formatDate(now, 'Asia/Kolkata', 'HH:mm'),
    d.name, '', d.industry, d.role, d.headcount, d.city, d.by,
    parts[0] || '', parts[1] || d.page, 'New'
  ]);
  return ContentService.createTextOutput('ok');
}
```
3. Deploy → New deployment → Web app → Execute as: Me; Who has access: Anyone. Copy the `/exec` URL.
4. Put it in `src/config.js` → `leadEndpoint`, then rebuild and redeploy.
5. Test: submit the form on the live site. A row appears, and WhatsApp opens with the message.

The form posts only what the employer typed, plus the source and page. Phone numbers arrive through WhatsApp itself. Copy the number into the sheet when you reply.

## Weekly numbers to pull (for 07-weekly-report-template.md)
- Leads by source: count the sheet rows by Source (for calls, use the caller's answer).
- Cost per qualified lead: ad spend for the week ÷ qualified leads from `google/cpc` and `META-*`.
- Top pages by leads: count by Landing page.
- GA4: key events by page, and the `lead_source` dimension.
