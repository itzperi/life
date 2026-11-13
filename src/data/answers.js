// Answer pages: one employer question per page, written for featured snippets, voice answers and AI citations.
// Rules (docs/00-facts-and-rules.md): direct 40-60 word answer first, dated legal facts with sources, no invented numbers.
// bodyHtml is trusted HTML; {{TOKENS}} resolve through src/config.js.
module.exports = [
  {
    slug: 'get-helpers-in-48-hours',
    q: 'How can I get helpers and loaders within 48 hours in Tamil Nadu?',
    primaryKeyword: 'helpers within 48 hours chennai',
    title: 'Get Helpers in 48 Hours in Chennai & Tamil Nadu | Lifeline',
    description: 'Lifeline Crew supplies helpers, loaders and packers within 48 hours of a confirmed requirement, and skilled staff in 7 days. WhatsApp your headcount now.',
    answer: 'Send Lifeline Crew the role, headcount, work location, shift and daily or monthly wage on WhatsApp at +91 99622 99076. Once the requirement and quote are agreed in writing, Lifeline Crew supplies helpers, loaders and packers within 48 hours, and skilled roles such as operators, nurses and accounts staff within 7 days.',
    bodyHtml: `
<h2 id="what-to-send">What should I send to get staff fastest?</h2>
<p><strong>Five details let us start sourcing the same day: the role, how many people, the work location with a map pin, the shift timing, and the wage. Add whether you provide transport, food or a room. Missing wages and unclear shifts are the most common reasons a 48-hour order slips.</strong></p>
<ol>
<li><strong>Role and count:</strong> for example, 20 loading helpers and 4 packers.</li>
<li><strong>Location:</strong> the factory gate or warehouse address, and a Google Maps pin.</li>
<li><strong>Shift:</strong> the timing, and whether there is a night shift.</li>
<li><strong>Wage:</strong> per day or per month, and when it is paid.</li>
<li><strong>Facilities:</strong> bus pick-up, canteen, room or hostel, uniform and safety shoes.</li>
</ol>
<h2 id="timeline">What happens in the 48 hours?</h2>
<div class="tbl"><table><thead><tr><th>Time</th><th>What happens</th></tr></thead><tbody>
<tr><td>Hour 0</td><td>You send the requirement on WhatsApp or call</td></tr>
<tr><td>Same day</td><td>We confirm wage, shift, model and our charges in writing</td></tr>
<tr><td>Within 48 hours</td><td>Helpers report at your gate</td></tr>
<tr><td>After joining</td><td>Replacements for no-shows and early leavers, under the terms in your quote</td></tr>
</tbody></table></div>
<p class="meta">The 48-hour and 7-day turnarounds are Lifeline Crew's own confirmed timelines (Nov 2026), counted from written agreement on the requirement.</p>
<h2 id="skilled">Why do skilled roles take 7 days?</h2>
<p><strong>Skilled roles need screening that helpers do not: trade tests for operators and welders, registration checks for nurses and pharmacists, typing or voice tests for BPO and office staff, and notice periods for people already employed. Seven days lets us send screened profiles rather than whoever is free today.</strong></p>`,
    faqs: [
      { q: 'Do you supply helpers outside Chennai within 48 hours?', a: 'Lifeline Crew serves all Tamil Nadu districts from its Chennai office. The 48-hour timeline applies to helper roles once the requirement is agreed. For distant districts, tell us early whether you provide a room or transport, because that decides how quickly people from other towns can join.' },
    ],
    sources: [],
    related: { guides: ['bulk-hiring-checklist'], industries: ['manufacturing', 'logistics-warehousing'], services: ['contract-staffing', 'bulk-hiring'] },
  },
  {
    slug: 'contract-labour-licence-50-workers',
    q: 'Does a contractor need a licence to supply 50 workers in Tamil Nadu?',
    primaryKeyword: 'contract labour licence 50 workers tamil nadu',
    title: 'Contract Labour Licence for 50 Workers in Tamil Nadu (2026)',
    description: 'Under the OSH Code, contractors with 50 or more contract workers need a licence. What it means for Tamil Nadu employers, with sources. WhatsApp Lifeline Crew.',
    answer: 'Yes. Under the Occupational Safety, Health and Working Conditions Code, in force since 21 November 2025, a contractor engaging 50 or more contract workers needs a licence before supplying them. The old Contract Labour Act set the limit at 20. The principal employer also has duties, so ask any agency for its licence copy before signing.',
    bodyHtml: `
<h2 id="what-changed">What changed from the old Contract Labour Act?</h2>
<div class="tbl"><table><thead><tr><th>Point</th><th>Old law (CLRA Act, 1970)</th><th>OSH Code, 2020 (from 21 Nov 2025)</th></tr></thead><tbody>
<tr><td>Licence threshold</td><td>20 or more contract workers</td><td>50 or more contract workers</td></tr>
<tr><td>Counting</td><td>Per establishment</td><td>Any day in the preceding 12 months; commentators read it as cumulative across a contractor's sites</td></tr>
<tr><td>Existing licences</td><td>n/a</td><td>Saved and carried over</td></tr>
<tr><td>Core activities</td><td>Abolition by notification</td><td>Section 57 restricts contract labour in core activities, with listed exceptions</td></tr>
</tbody></table></div>
<h2 id="principal-employer">What does the principal employer have to do?</h2>
<p><strong>Check the contractor's licence and registration before work starts, keep copies, and make sure wages and statutory dues are paid on time. If the contractor defaults on wages or contributions, the principal employer can be held liable and may recover the amount from the contractor. Monthly proof of payment protects you.</strong></p>
<p>See <a href="/answers/monthly-compliance-documents-contractor/">the documents to collect every month</a>.</p>
<h2 id="core">Can contract workers do core work?</h2>
<p><strong>Section 57 of the OSH Code restricts contract labour in an establishment's core activities. Exceptions include work normally done through contractors, work that does not need full-time workers for most of the day, and sudden increases in volume that must be finished in a set time. Check how this applies to your unit with a labour-law adviser.</strong></p>
<p class="meta">As of Nov 2026. State rules under the OSH Code decide procedure, and Tamil Nadu's rules may differ in detail. General information, not legal advice.</p>`,
    faqs: [
      { q: 'Does Lifeline Crew hold a contract labour licence?', a: 'Ask Lifeline Crew for its registration and licence copies along with the quote, and file them before work starts.[[ Licences held: {{LICENCES}}.]] WhatsApp +91 99622 99076 if you need them for an audit or a principal-employer registration, and check that the licence is valid for your site.' },
    ],
    sources: [
      { name: 'Occupational Safety, Health and Working Conditions Code, 2020 (India Code)', url: 'https://www.indiacode.nic.in/bitstream/123456789/22041/1/2020-37.pdf' },
      { name: 'Ministry of Labour and Employment, Labour Codes', url: 'https://labour.gov.in/' },
    ],
    related: { guides: ['how-to-choose-a-manpower-agency', 'contract-vs-permanent-vs-payroll-staffing'], industries: ['manufacturing', 'automobile'], services: ['contract-staffing'] },
  },
  {
    slug: 'who-pays-pf-esi-contract-workers',
    q: 'Who pays PF and ESI for contract workers: the agency or the company?',
    primaryKeyword: 'pf esi for contract workers who pays',
    title: 'Who Pays PF and ESI for Contract Workers? Agency vs Company',
    description: 'The agency deducts and deposits PF and ESI for contract workers, but the principal employer can be liable if it defaults. What to check each month. WhatsApp us.',
    answer: 'The manpower agency, as the direct employer, deducts the employee share of PF and ESI, adds the employer share, deposits both and bills the cost to you. But if the agency defaults, the principal employer can be made to pay and then recover the amount from the agency. Check monthly challans for every worker at your site.',
    bodyHtml: `
<h2 id="rates">What are the PF and ESI rates?</h2>
<div class="tbl"><table><thead><tr><th>Scheme</th><th>Employer</th><th>Employee</th><th>Applies to</th></tr></thead><tbody>
<tr><td>EPF (incl. EPS)</td><td>12%</td><td>12%</td><td>PF wages (basic + DA). Mandatory up to the wage ceiling, reported raised from Rs 15,000 to Rs 25,000 from 17 Sep 2026; confirm with EPFO</td></tr>
<tr><td>EDLI + admin</td><td>0.5% + 0.5%</td><td>None</td><td>PF wages</td></tr>
<tr><td>ESI</td><td>3.25%</td><td>0.75%</td><td>Employees earning up to Rs 21,000 a month</td></tr>
</tbody></table></div>
<p>The employer's PF share cannot be deducted from the worker's pay, whatever the contract says.</p>
<h2 id="protect">How do I protect my company?</h2>
<ol>
<li>Before work starts, collect the agency's PF and ESI establishment codes.</li>
<li>Every month, ask for the PF ECR and ESI challan showing each worker deployed at your site.</li>
<li>Match the names and headcount against your attendance register.</li>
<li>Release the invoice only after you have the challans.</li>
<li>Keep the records for audits and labour inspections.</li>
</ol>
<p>Ask any agency, including Lifeline Crew, for a sample invoice before you sign. It should show wages, PF, ESI, the service charge and GST as separate lines.</p>
<p class="meta">Rates as of Nov 2026. Some Madras High Court rulings limit the principal employer's PF liability where the contractor has its own code; others do not. General information, not legal advice.</p>`,
    faqs: [
      { q: 'Can the agency deduct the employer PF share from the worker?', a: 'No. The Code on Social Security bars passing the employer\'s share of PF to the worker, notwithstanding any contract to the contrary. If a worker\'s payslip shows both shares deducted from their wage, raise it with the agency immediately, because the liability can come back to the principal employer.' },
    ],
    sources: [
      { name: 'Employees\' Provident Fund Organisation', url: 'https://www.epfindia.gov.in/' },
      { name: 'Employees\' State Insurance Corporation', url: 'https://www.esic.gov.in/' },
    ],
    related: { guides: ['staffing-cost-tamil-nadu'], industries: ['logistics-warehousing', 'textile-garments'], services: ['contract-staffing', 'payroll-outsourcing'] },
  },
  {
    slug: 'monthly-compliance-documents-contractor',
    q: 'What documents should a manpower contractor give you every month?',
    primaryKeyword: 'contractor monthly compliance documents',
    title: 'Monthly Compliance Documents From a Manpower Contractor',
    description: 'A checklist of the documents to collect from your manpower contractor each month: wage records, PF and ESI challans, attendance and licence copies. WhatsApp us.',
    answer: 'Each month, collect from your manpower contractor the wage sheet with bank transfer proof, PF ECR and payment challan, ESI challan, attendance matched to your gate register, and an invoice showing wages, statutory dues, service charge and GST separately. Keep the contractor\'s licence and registration copies on file. Release payment only after you receive them.',
    bodyHtml: `
<h2 id="checklist">Monthly checklist</h2>
<div class="tbl"><table><thead><tr><th>Document</th><th>Why you need it</th></tr></thead><tbody>
<tr><td>Wage sheet with bank transfer proof</td><td>Shows every worker was paid at least the minimum wage, on time</td></tr>
<tr><td>PF ECR and payment challan</td><td>Proves PF was deposited for the workers at your site</td></tr>
<tr><td>ESI challan</td><td>Proves ESI cover for workers earning up to Rs 21,000</td></tr>
<tr><td>Attendance summary</td><td>Matches billed days to your gate or biometric register</td></tr>
<tr><td>Invoice with line items</td><td>Wages, PF, ESI, bonus provision, service charge and GST shown separately</td></tr>
<tr><td>Licence and registration copies (once, then on renewal)</td><td>Needed when the contractor has 50 or more contract workers</td></tr>
</tbody></table></div>
<h2 id="annual">What should I collect once a year?</h2>
<p><strong>Collect the bonus payment record, the leave and gratuity provisions, and the contractor's renewed licence. Also check that annual returns required under the labour codes were filed. These are the papers inspectors and auditors usually ask principal employers to produce.</strong></p>
<p class="meta">As of Nov 2026, under the Labour Codes in force from 21 Nov 2025. General information, not legal advice.</p>`,
    faqs: [
      { q: 'Does Lifeline Crew provide these documents every month?', a: 'Ask for them in the agreement. With contract staff on an agency payroll, it is reasonable to make the monthly wage, PF and ESI proof a condition of releasing each invoice. WhatsApp Lifeline Crew at +91 99622 99076 for a sample invoice format before you sign.' },
    ],
    sources: [{ name: 'Ministry of Labour and Employment, Labour Codes', url: 'https://labour.gov.in/' }],
    related: { guides: ['how-to-choose-a-manpower-agency'], industries: ['manufacturing', 'hospitals-clinics'], services: ['contract-staffing', 'payroll-outsourcing'] },
  },
  {
    slug: 'psara-licence-security-guards',
    q: 'Do you need a PSARA-licensed agency to hire security guards in Tamil Nadu?',
    primaryKeyword: 'psara licence security agency tamil nadu',
    title: 'PSARA Licence: Hiring Security Guards in Tamil Nadu (2026)',
    description: 'Only agencies holding a PSARA licence may supply private security guards. How to check an agency\'s licence in Tamil Nadu before you sign. WhatsApp us for help.',
    answer: 'Yes. Under the Private Security Agencies (Regulation) Act, 2005, only an agency holding a PSARA licence from the state Controlling Authority may supply private security guards. A general manpower or housekeeping licence does not cover guards. Ask for the licence number, check it on psara.gov.in, and confirm it covers Tamil Nadu.',
    bodyHtml: `
<h2 id="check">How do I check a security agency's licence?</h2>
<ol>
<li>Ask for the PSARA licence copy, with its number, validity and the state that issued it.</li>
<li>Check the state-wise list of issued licences on <a href="https://psara.gov.in/" rel="noopener">psara.gov.in</a>.</li>
<li>Confirm that the licence covers Tamil Nadu. A licence from another state does not automatically allow deployment here.</li>
<li>Ask how guards are trained and police-verified, as the Act and state rules require.</li>
</ol>
<h2 id="lifeline">Does Lifeline Crew supply security guards?</h2>
<p><strong>This website does not offer security guard supply. Lifeline Crew supplies housekeeping, factory, office, BPO, retail, hospital and warehouse staff. For guards, use an agency with a valid PSARA licence for Tamil Nadu. For housekeeping and front-desk staff alongside your security team, WhatsApp +91 99622 99076.</strong></p>
<p class="meta">As of Nov 2026. Sources disagree on whether Tamil Nadu's 2008 security agency rules were replaced in 2022; confirm the current rules with the Controlling Authority.</p>`,
    faqs: [],
    sources: [{ name: 'PSARA portal, Ministry of Home Affairs', url: 'https://psara.gov.in/' }],
    related: { guides: ['how-to-choose-a-manpower-agency'], industries: ['hostels-service-apartments', 'office-staff'], services: ['contract-staffing'] },
  },
  {
    slug: 'women-night-shift-tamil-nadu',
    q: 'Can women work night shifts in Tamil Nadu factories and offices?',
    primaryKeyword: 'women night shift rules tamil nadu',
    title: 'Women on Night Shift in Tamil Nadu: Rules for Employers 2026',
    description: 'The OSH Code allows women to work night shifts with consent and safety arrangements. What Tamil Nadu employers must check before rostering. WhatsApp us today.',
    answer: 'Yes, with conditions. Section 43 of the OSH Code, in force since 21 November 2025, allows women to work before 6 am and after 7 pm with their consent and the safeguards set by the government, such as safe transport and security. Tamil Nadu\'s own rules and shop notifications add conditions, so check them before rostering.',
    bodyHtml: `
<h2 id="safeguards">What safeguards are usually required?</h2>
<ul>
<li>The woman's consent to night work, recorded and kept on file.</li>
<li>Safe transport from the workplace to near her residence, with GPS-tracked vehicles where rules require.</li>
<li>Adequate lighting, security and CCTV on the premises and at pick-up points.</li>
<li>An internal committee under the POSH Act, and a clear grievance contact.</li>
<li>No penalty for a woman who declines night shifts.</li>
</ul>
<h2 id="tamil-nadu">What is different in Tamil Nadu?</h2>
<p><strong>Tamil Nadu amended its shops and establishments law in 2025 to allow women on night shifts with safeguards, and has issued notifications on employee safety. State rules under the OSH Code were still being finalised in 2026. Check the current Tamil Nadu notification that applies to your establishment, or ask a labour-law adviser.</strong></p>
<h2 id="staffing">How does this affect agency staffing?</h2>
<p>When you hire women for night shifts through an agency, agree in writing who arranges transport and security, and who keeps the consent records. Tell us your shift plan, and we screen candidates who can work it.</p>
<p class="meta">As of Nov 2026. Central OSH rules were notified in 2026; Tamil Nadu rules may differ. General information, not legal advice.</p>`,
    faqs: [],
    sources: [{ name: 'Occupational Safety, Health and Working Conditions Code, 2020 (India Code)', url: 'https://www.indiacode.nic.in/bitstream/123456789/22041/1/2020-37.pdf' }],
    related: { guides: ['bulk-hiring-checklist'], industries: ['mobile-phone-manufacturing', 'bpo-call-centres'], services: ['contract-staffing', 'bulk-hiring'] },
  },
  {
    slug: 'fixed-term-employment-vs-contract-staffing',
    q: 'Fixed-term employment or contract staffing: which is better under the labour codes?',
    primaryKeyword: 'fixed term employment vs contract staffing',
    title: 'Fixed-Term Employment vs Contract Staffing (Labour Codes)',
    description: 'Fixed-term employees join your payroll with equal benefits; contract staff stay on the agency payroll. Which suits your project, compared clearly. WhatsApp us.',
    answer: 'Fixed-term employment puts the worker on your own payroll for a set period, with the same wages and benefits as permanent staff and gratuity after one year. Contract staffing keeps the worker on the agency payroll, with the agency handling wages, compliance and replacements. Choose fixed-term for skilled roles you manage; choose contract staffing for volume.',
    bodyHtml: `
<h2 id="compare">Side-by-side comparison</h2>
<div class="tbl"><table><thead><tr><th>Point</th><th>Fixed-term employment</th><th>Contract staffing</th></tr></thead><tbody>
<tr><td>Whose payroll</td><td>Yours</td><td>The agency's</td></tr>
<tr><td>Benefits</td><td>Same as permanent staff doing the same work</td><td>Statutory benefits paid by the agency</td></tr>
<tr><td>Gratuity</td><td>After one year of service</td><td>Agency's liability, billed to you</td></tr>
<tr><td>Replacement if someone leaves</td><td>You recruit again</td><td>The agency replaces under the contract</td></tr>
<tr><td>Licence issues</td><td>None for the arrangement itself</td><td>Contractor licence at 50 or more workers</td></tr>
<tr><td>Fits</td><td>Projects of 6-24 months needing skilled people</td><td>Volume roles, seasonal peaks, high churn</td></tr>
</tbody></table></div>
<h2 id="mix">Can I combine both?</h2>
<p><strong>Yes. Many employers hire supervisors and skilled operators on fixed-term contracts and run helpers and packers through contract staffing. Lifeline Crew can recruit fixed-term hires through permanent placement, so they join your payroll, and supply the volume roles on contract.</strong></p>
<p class="meta">As of Nov 2026, under the Code on Social Security and the Industrial Relations Code. General information, not legal advice.</p>`,
    faqs: [],
    sources: [{ name: 'Ministry of Labour and Employment, Labour Codes', url: 'https://labour.gov.in/' }],
    related: { guides: ['contract-vs-permanent-vs-payroll-staffing'], industries: ['it-companies', 'pharma'], services: ['permanent-placement', 'contract-staffing'] },
  },
  {
    slug: 'hiring-migrant-workers-tamil-nadu',
    q: 'What must an employer provide when hiring workers from other states in Tamil Nadu?',
    primaryKeyword: 'inter state migrant workers rules tamil nadu',
    title: 'Hiring Workers From Other States in Tamil Nadu: 2026 Rules',
    description: 'Under the OSH Code, inter-state migrant workers get equal benefits and a yearly journey allowance. What Tamil Nadu employers must provide. WhatsApp us today.',
    answer: 'Under the OSH Code, an inter-state migrant worker is entitled to the same benefits as other workers at the establishment, plus a lump-sum journey fare to their native place and back once a year, paid by the employer. If a contractor defaults, the principal employer can become liable. The provisions apply from 10 such workers.',
    bodyHtml: `
<h2 id="obligations">Main obligations</h2>
<div class="tbl"><table><thead><tr><th>Obligation</th><th>Who</th><th>Notes</th></tr></thead><tbody>
<tr><td>Equal wages and benefits</td><td>Employer or contractor</td><td>Same as other workers in that establishment</td></tr>
<tr><td>Yearly journey allowance (to and fro)</td><td>Employer</td><td>Section 61; the Code fixes no amount</td></tr>
<tr><td>Records of migrant workers</td><td>Employer and contractor</td><td>Kept in the format set by rules</td></tr>
<tr><td>Liability on contractor default</td><td>Principal employer</td><td>Can recover from the contractor</td></tr>
</tbody></table></div>
<h2 id="practical">What helps migrant workers stay?</h2>
<p><strong>Accommodation, food the workers are used to, and a supervisor who speaks their language matter more than wage differences of a few hundred rupees. A room near the unit and a supervisor who speaks the workers' language often decide whether a migrant crew stays past the first month.</strong></p>
<p class="meta">As of Nov 2026. Sources differ on whether a separate displacement allowance survives under the Code; the enacted Code's migrant-worker sections list none. General information, not legal advice.</p>`,
    faqs: [],
    sources: [{ name: 'Occupational Safety, Health and Working Conditions Code, 2020 (India Code)', url: 'https://www.indiacode.nic.in/bitstream/123456789/22041/1/2020-37.pdf' }],
    related: { guides: ['bulk-hiring-checklist'], industries: ['textile-garments', 'manufacturing'], services: ['contract-staffing', 'bulk-hiring'] },
  },
  {
    slug: 'agency-vs-job-portal-blue-collar',
    q: 'Manpower agency or job portal: which is better for hiring blue-collar staff?',
    primaryKeyword: 'manpower agency vs job portal',
    title: 'Manpower Agency vs Job Portal for Blue-Collar Hiring in TN',
    description: 'Job portals give you applicants; a manpower agency gives screened people who turn up, plus replacements and payroll. When each fits in Tamil Nadu. WhatsApp us.',
    answer: 'A job portal gives you applicants, and your team does the calling, screening, joining follow-up and replacements. A manpower agency hands you screened people who report for work, replaces those who leave, and on contract also runs payroll and PF. Portals suit a few hires with an HR team; agencies suit volume, urgency and high churn.',
    bodyHtml: `
<h2 id="compare">Comparison</h2>
<div class="tbl"><table><thead><tr><th>Point</th><th>Job portal</th><th>Manpower agency</th></tr></thead><tbody>
<tr><td>What you get</td><td>Applications</td><td>Screened candidates who report</td></tr>
<tr><td>Your team's time</td><td>Calling, screening, follow-up</td><td>Interview and select only</td></tr>
<tr><td>No-shows and early exits</td><td>You re-advertise</td><td>The agency replaces under agreed terms</td></tr>
<tr><td>Payroll and PF</td><td>Yours</td><td>The agency's, on contract staffing</td></tr>
<tr><td>Cost</td><td>Subscription or per-post fee</td><td>Placement fee, or a monthly service charge</td></tr>
<tr><td>Fits</td><td>A few hires, with an in-house HR team</td><td>Bulk, urgent or high-churn roles</td></tr>
</tbody></table></div>
<h2 id="both">Should I use both?</h2>
<p><strong>Many employers do. They post skilled openings on portals and send volume, urgent and replacement-heavy roles to an agency. If your HR team spends more time chasing no-shows than interviewing, that role belongs with an agency.</strong></p>`,
    faqs: [],
    sources: [],
    related: { guides: ['how-to-choose-a-manpower-agency'], industries: ['logistics-warehousing', 'retail-showrooms'], services: ['contract-staffing', 'permanent-placement'] },
  },
];
