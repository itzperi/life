// Industry page data for Lifeline Placements.
// Rules: docs/00-facts-and-rules.md. Tokens such as {{TURNAROUND}} render as "[to confirm]" chips.
// Employers named in `context` are local context only, never Lifeline clients.

module.exports = [
  // 1. IT companies
  {
    slug: "it-companies",
    name: "IT companies",
    primaryKeyword: "it staffing company chennai",
    title: "IT Staffing Company in Chennai and Tamil Nadu | Lifeline",
    description: "IT helpdesk, network, developer, tester and non-tech staff for IT firms on OMR, in Guindy and Coimbatore. Permanent, contract or C2H. WhatsApp or call us.",
    h1: "IT Staffing and Recruitment for Companies in Chennai and Tamil Nadu",
    tamil: "ஐடி நிறுவனங்களுக்கு தகுதியான பணியாளர்கள்",
    summary: "Lifeline Placements recruits for IT companies and IT-enabled firms across Tamil Nadu. We fill IT helpdesk, system admin, network, junior developer, software tester and data analyst roles, plus the HR, admin and accounts staff an IT office needs. Most demand comes from OMR, Guindy, Taramani and Porur in Chennai, with more from Coimbatore, Madurai and Tiruchirappalli. Screened profiles can reach you within {{TURNAROUND}}. Send the job description on WhatsApp or call +91 99622 99076.",
    roles: [
      { group: "Infrastructure and support", items: ["IT helpdesk engineers", "System administrators", "Network engineers (CCNA level)", "IT asset and hardware technicians"] },
      { group: "Development and testing", items: ["Junior and mid-level developers (Java, .NET, Python, front end)", "Manual and automation testers", "Data analysts"] },
      { group: "Non-technical staff for IT offices", items: ["HR and recruitment executives", "Admin and facility executives", "Accounts executives"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Core engineering roles where you want retention, full benefits and a normal 30 to 90 day notice cycle.", example: "A product company in Guindy hiring a permanent QA lead" },
      { model: "Contract staffing", bestFor: "Project-bound roles, client-site deployments and contract-to-hire trials, where payroll, PF and ESI sit with the staffing partner.", example: "A services firm on OMR needing six testers for a nine-month client project" },
      { model: "Bulk hiring", bestFor: "Fresher batches for support desks or rollout projects that need many people trained at the same time.", example: "A Coimbatore firm onboarding 30 helpdesk freshers for a new support contract" }
    ],
    context: [
      "Chennai's IT employers sit mainly along OMR, from Taramani and Perungudi down to Sholinganallur and the SIPCOT IT Park at Siruseri. Guindy, Porur and Ambattur hold another large share. Outside Chennai, TIDEL Park in Coimbatore and the ELCOT IT parks in Madurai and Tiruchirappalli draw firms to tier-2 cities, where salaries and attrition both run lower. Candidates in these cities often prefer to work near home, which helps retention in support roles.",
      "Notice periods shape every IT hire. Mid-level engineers usually serve 30 to 90 days, so many offers fall through when a counter-offer arrives. We ask about notice period and buy-out options in the first call. We also run a short technical screen, because keyword-stuffed resumes are common. For contract roles, overlapping entries in a candidate's UAN service history can reveal dual employment, which most IT employers do not allow.",
      "Contract IT staff are still employees for PF and ESI purposes. ESI covers wages up to Rs 21,000 a month, so it mostly touches helpdesk and junior roles (ESIC, as of Nov 2026). A contractor who deploys 50 or more contract workers in one establishment needs a contract labour licence under the OSH Code (as of Nov 2026). Client-site deployments also need written terms on laptops, access cards and data access."
    ],
    screening: [
      "Run a short technical screen on the skills listed in the CV",
      "Confirm notice period, buy-out terms and last drawn CTC",
      "Check relieving letters and payslips from the last two employers",
      "Check the UAN service history for overlapping employment",
      "Confirm willingness for rotational or US-shift timings where the role needs it"
    ],
    faqs: [
      { q: "How do you charge for permanent IT placements?", a: "Our fee for IT placements is {{FEE}}. As market context only, Indian agencies commonly quote 8.33% to 16.67% of the candidate's annual CTC for permanent roles, and 18% GST is added to the fee. The rate usually depends on seniority, how niche the skill is and how many roles you open together. Share the role and we will quote in writing." },
      { q: "Can you provide contract-to-hire IT staff?", a: "Yes. Under contract-to-hire, the engineer first works on our payroll, and you move them onto your own rolls once you are satisfied. The contract period and conversion terms are agreed before the engineer starts. During the contract phase we handle salary, PF, ESI where applicable and statutory records. Conversion charges, if any, are {{FEE}}." },
      { q: "What happens if a candidate does not join after accepting the offer?", a: "Offer drop-outs are a known risk in IT hiring, usually caused by a counter-offer during the notice period. If a placed candidate fails to join or leaves early, our replacement terms are {{REPLACEMENT}}. As market context, agencies commonly offer replacement windows of 30 to 90 days. For critical roles we keep a backup candidate warm until the joining date." },
      { q: "How quickly can you share profiles for an IT role?", a: "For common roles such as helpdesk engineers, testers or junior developers, we aim to share screened profiles within {{TURNAROUND}}. Niche skills and senior roles take longer because fewer people are actively looking. The bigger delay is often the candidate's notice period, which runs 30 to 90 days for experienced engineers. Immediate joiners exist but usually ask for more." },
      { q: "Do you check candidates for moonlighting or fake experience?", a: "We check what we can before sending a profile: payslips, relieving letters and the UAN service history, which shows PF contributions by employer and period. Gaps or overlaps get questioned in the screening call. Formal background verification through a specialist firm stays your decision, and we pass on the documents your verifier needs." }
    ],
    relatedIndustries: ["bpo-call-centres", "office-staff", "ecommerce"],
    relatedCities: ["chennai", "coimbatore", "madurai", "tiruchirappalli"]
  },

  // 2. BPO and call centres
  {
    slug: "bpo-call-centres",
    name: "BPO & call centres",
    primaryKeyword: "call centre staffing agency chennai",
    title: "BPO and Call Centre Staffing in Chennai and TN | Lifeline",
    description: "Voice and non-voice agents, team leaders and QAs for BPOs in Chennai, Coimbatore and Madurai. Tamil, Hindi and English processes. WhatsApp or call to start.",
    h1: "BPO and Call Centre Staffing in Chennai and Tamil Nadu",
    tamil: "கால் சென்டர்களுக்கு திறமையான பணியாளர்கள்",
    summary: "Lifeline Placements supplies voice and non-voice agents, team leaders, quality analysts and back-office executives to BPOs and call centres in Tamil Nadu. We recruit for domestic processes in Tamil, English and Hindi, and for international voice where English fluency is tested. Most seats are in Chennai, at Ambattur, Guindy and along OMR, with growing centres in Coimbatore, Madurai and Tiruchirappalli. A training batch can be lined up within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your process details.",
    roles: [
      { group: "Voice process", items: ["Domestic voice agents (Tamil, English, Hindi)", "International voice agents", "Telesales and collections callers", "Support agents for Telugu, Kannada and Malayalam"] },
      { group: "Non-voice and back office", items: ["Chat and email support executives", "Back-office and data entry executives", "Claims and document processing executives"] },
      { group: "Supervision and quality", items: ["Team leaders", "Quality analysts", "Process trainers", "Workforce management (WFM) analysts"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Team leaders, trainers and quality analysts whose process knowledge you want to keep beyond a single client contract.", example: "A Guindy centre replacing a quality analyst who moved to a client role" },
      { model: "Contract staffing", bestFor: "Seasonal or client-linked campaigns where headcount follows the contract and attrition needs constant backfill.", example: "An Ambattur telesales unit adding 15 callers for a three-month insurance campaign" },
      { model: "Bulk hiring", bestFor: "New process launches that need a full training batch to join on the same date.", example: "A Madurai BPO opening a 40-seat Tamil voice process for a telecom client" }
    ],
    context: [
      "BPO hiring in Tamil Nadu splits by language. Domestic processes need agents who switch easily between Tamil and English, and many national accounts also want Hindi. Telugu, Kannada and Malayalam speakers are in steady demand for south India support desks. International voice relies on clear, neutral English and willingness to work US or UK hours. Madurai and Tiruchirappalli supply many Tamil voice agents, often with lower attrition than Chennai.",
      "Attrition in the first 90 days is the main cost in this industry. Most early exits come from night shifts, long commutes and targets the agent did not understand at hiring. We explain shift timings, cab drop policy, week-offs and incentive structure before the interview, not after it. Freshers with no calling experience take a mock call, so both sides see how they handle an angry customer.",
      "Women can work night shifts with their written consent and safe transport. Section 43 of the OSH Code allows work before 6 am and after 7 pm on those terms, subject to state rules (as of Nov 2026). Check the current Tamil Nadu notification for your type of establishment as well. Your cab, escort and drop policy should be ready before night-shift hiring begins."
    ],
    screening: [
      "Assess spoken English, Tamil or Hindi through a recorded mock call",
      "Test typing speed and accuracy for chat and non-voice roles",
      "Confirm in writing that the candidate accepts night or rotational shifts",
      "Check the distance from home to the centre and cab route coverage",
      "Verify previous BPO tenure through payslips or relieving letters"
    ],
    faqs: [
      { q: "Can you supply agents for night shifts and US processes?", a: "Yes. We screen for night-shift readiness in the first call and confirm it again before the interview. International voice candidates also take an English assessment. For women on night shifts, the OSH Code requires their consent and safe transport, and Tamil Nadu rules add conditions, so share your cab and safety arrangements with us before we start sourcing." },
      { q: "How many agents can you supply for a new process?", a: "Batch size depends on language mix, shift and salary. A Tamil and English day-shift batch fills faster than a night-shift international batch. First profiles arrive within {{TURNAROUND}}[[, and our capacity for a single order is {{CAPACITY}}]]. Tell us the go-live date and the training start date, and we plan the hiring drive backwards from there." },
      { q: "What if agents leave during training?", a: "Training dropouts are normal in BPO hiring, so we plan for them from the start. We usually line up more candidates than the batch size, so the batch is full on day one. Replacement terms for agents who leave after joining are {{REPLACEMENT}}. As market context, agencies commonly offer 30 to 90 day replacement windows." },
      { q: "Do contract BPO agents get PF and ESI?", a: "They must. Contract agents are covered by EPF, and by ESI when their wages fall within the ESI limit. ESI applies to wages up to Rs 21,000 a month, with 3.25% paid by the employer and 0.75% by the employee (ESIC, as of Nov 2026). These costs are built into the monthly contract billing, not deducted from the agent's fee." },
      { q: "What is your fee for BPO hiring?", a: "Our fee is {{FEE}}. As market context, contract staffing in India is usually billed as salary plus statutory costs plus a service charge of 5% to 15% or more, with 18% GST, generally on the full invoice. Permanent placement fees in the market run from 8.33% to 16.67% of annual CTC. Volume and shift type move the rate." }
    ],
    relatedIndustries: ["it-companies", "office-staff", "ecommerce"],
    relatedCities: ["chennai", "coimbatore", "madurai", "tiruchirappalli"]
  },

  // 3. Office staff
  {
    slug: "office-staff",
    name: "Office staff",
    primaryKeyword: "office staff supply agency chennai",
    title: "Office Staff Recruitment Agency in Chennai, TN | Lifeline",
    description: "Receptionists, admin executives, data entry operators, Tally accounts assistants and office boys for offices across Chennai and Tamil Nadu. WhatsApp or call us.",
    h1: "Office Staff Recruitment in Chennai and Tamil Nadu",
    tamil: "அலுவலகப் பணிகளுக்கு நம்பகமான ஊழியர்கள்",
    summary: "Lifeline Placements recruits front office and support staff for general offices in Tamil Nadu: receptionists, admin executives, data entry operators, accounts assistants with Tally, personal assistants and office boys. Employers include small firms, CA and law offices, builders, trading companies and corporate branch offices. Most requests come from Chennai, around Anna Nagar, T Nagar, Guindy and Ambattur, and from Coimbatore, Madurai and Salem. Candidates can be shortlisted within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 to share the role.",
    roles: [
      { group: "Front office", items: ["Receptionists", "Front desk executives", "Telephone operators"] },
      { group: "Admin and data", items: ["Admin executives", "Data entry operators", "Personal assistants and secretaries", "MIS executives"] },
      { group: "Accounts", items: ["Accounts assistants (Tally, GST)", "Billing executives", "Cashiers"] },
      { group: "Office support", items: ["Office boys", "Office drivers", "Housekeeping staff"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Receptionists, accounts assistants and PAs who handle your clients, money or confidential files and should stay for years.", example: "A CA firm in T Nagar replacing its senior accounts assistant before the audit season" },
      { model: "Contract staffing", bestFor: "Leave cover, short projects or roles you prefer to keep off your own payroll, such as data entry and office boys.", example: "A builder's office in Anna Nagar needing two data entry operators for a six-month records project" },
      { model: "Bulk hiring", bestFor: "A new branch or back office where the whole support team must start in the same week.", example: "A trading company setting up a Coimbatore branch office with eight support staff" }
    ],
    context: [
      "Office roles look simple, yet a poor hire is costly because these people handle visitors, cash, records and client calls. Accounts assistants should be tested on Tally entries, GST invoice basics and bank reconciliation, not on CV wording. Data entry operators are tested for typing speed and accuracy in English, and sometimes in Tamil. Receptionists are judged on spoken English and Tamil, phone manner and how they deal with a difficult visitor.",
      "Pay expectations for office staff differ sharply across Tamil Nadu. A receptionist in Guindy or on OMR expects more than one in Salem or Madurai, and commute time weighs heavily for women candidates. We match candidates to offices within a practical travel distance, because long bus rides are a frequent reason for resignations in the first few months.",
      "Office staff in shops and commercial establishments are covered by Tamil Nadu's minimum wage notifications, which were revised from 1 April 2026 (TN Labour Department, as of Nov 2026). Staff placed on an agency's payroll must be covered by PF and, for wages up to Rs 21,000 a month, by ESI (ESIC, as of Nov 2026). Check the current notified rate before you fix an offer."
    ],
    screening: [
      "Test typing speed and accuracy for data entry roles",
      "Give accounts candidates a short Tally and GST invoice exercise",
      "Assess spoken English and Tamil for front office roles",
      "Check the two-wheeler licence of office boys who run outside errands",
      "Take a reference call on previous employment and reason for leaving",
      "Confirm the commute distance from home to your office"
    ],
    faqs: [
      { q: "Can you send a receptionist on short notice?", a: "Often, yes. Receptionists and front desk staff are among the roles we can shortlist fastest, and first profiles reach you within {{TURNAROUND}}. Speed depends on your location, timings and salary. A Guindy office with a 9.30 to 6 schedule fills faster than one that needs Saturday evenings. For leave cover, a contract placement avoids adding to your rolls." },
      { q: "Do you test accounts assistants before sending them?", a: "Yes. Accounts candidates complete a short practical task before we share their profile. It covers Tally voucher entry, a GST invoice and a simple bank reconciliation. We send you the result along with the CV, so you see actual skill rather than claims. For senior accounts roles, your own auditor or CA may want to run a second round." },
      { q: "What does it cost to hire office staff through you?", a: "Our charge is {{FEE}}. For context, agencies in India commonly bill a permanent hire at 8.33% to 16.67% of yearly CTC, which works out to one to two months' salary. Contract staff are billed monthly as salary plus PF, ESI and a service charge, with 18% GST, generally on the full invoice. These are market figures, not our rates." },
      { q: "Is there a trial period for office staff?", a: "Probation is set by you, not by us, and many offices use three to six months for support roles. Our replacement terms, if a placed person leaves or does not fit, are {{REPLACEMENT}}. If you want a longer trial, a contract-to-hire arrangement lets the person work on our payroll before you take them on directly." },
      { q: "Can office boys also handle bank and courier work?", a: "Yes, if you say so in the requirement. Office boys who run outside errands need a valid two-wheeler licence, basic reading in English and Tamil, and a record that lets you trust them with cash and cheques. We check the licence and take a reference from a previous employer for such roles. Give us your errand list so we screen for it." }
    ],
    relatedIndustries: ["it-companies", "bpo-call-centres", "retail-showrooms"],
    relatedCities: ["chennai", "coimbatore", "madurai", "salem"]
  },

  // 4. Manufacturing
  {
    slug: "manufacturing",
    name: "Manufacturing",
    primaryKeyword: "factory manpower supply tamil nadu",
    title: "Factory Manpower Supply for Manufacturing in TN | Lifeline",
    description: "ITI operators, helpers, welders, fitters and QC staff for factories in Ambattur, Gummidipoondi, Hosur and Coimbatore. Contract or permanent. Call or WhatsApp.",
    h1: "Factory Manpower Supply for Manufacturing Units in Tamil Nadu",
    tamil: "தொழிற்சாலைகளுக்கு திறமையான தொழிலாளர்கள்",
    summary: "Lifeline Placements supplies production staff to engineering, fabrication, plastics, packaging and food processing factories in Tamil Nadu. We provide machine operators, CNC and VMC operators, ITI fitters, welders, electricians, helpers, QC inspectors and store keepers. Requests come from Ambattur, Thirumazhisai and Gummidipoondi near Chennai, from Hosur, and from Coimbatore and Salem. Helpers and operators can be mobilised within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your shift plan and headcount.",
    roles: [
      { group: "Production floor", items: ["Machine operators", "CNC and VMC operators", "Press operators", "Production helpers", "Packing staff"] },
      { group: "Skilled trades", items: ["ITI fitters", "Welders (arc, MIG, TIG)", "Electricians", "Turners and machinists"] },
      { group: "Quality and stores", items: ["QC inspectors", "Store keepers", "Forklift operators"] },
      { group: "Supervision", items: ["Shift supervisors", "Production planning executives"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Supervisors, QC inspectors and skilled tradesmen who carry process knowledge and are hard to replace mid-year.", example: "A fabrication unit in Gummidipoondi hiring a permanent shift supervisor" },
      { model: "Contract staffing", bestFor: "Helpers, packers and operators on lines where orders swing month to month and headcount must flex.", example: "A plastics moulding unit in Thirumazhisai adding 12 helpers for a seasonal order" },
      { model: "Bulk hiring", bestFor: "A new line, plant expansion or added shift that needs a full crew recruited and inducted together.", example: "A packaging plant in Hosur starting a third shift with 35 operators and helpers" }
    ],
    context: [
      "Tamil Nadu's general manufacturing is spread across many small and mid-sized estates. Around Chennai, Ambattur Industrial Estate, Thirumazhisai and Gummidipoondi hold engineering, plastics and fabrication units. Hosur has a large base of engineering and component makers close to Bengaluru. Coimbatore is known for pumps, motors, foundries and textile machinery, and Salem and Madurai have their own SIDCO estates. Each area has a different labour pool and wage expectation.",
      "Most factories run three eight-hour shifts or two twelve-hour shifts, and the rotation affects who will stay. Skilled roles are filled most reliably by ITI holders in the right trade, such as fitter, welder, electrician or machinist. Many units also take apprentices under the Apprentices Act, which builds a trained pipeline. A growing share of helpers in the Chennai belt now come from other states, so accommodation, food and language need planning.",
      "Contract labour rules matter more on a factory floor than almost anywhere else. Under the OSH Code, a contractor with 50 or more contract workers needs a licence, and the principal employer can be held liable if the contractor defaults on PF or ESI (as of Nov 2026). Keep monthly challans and wage registers from every contractor you use.[[ Lifeline's own licence details are {{LICENCES}}.]]"
    ],
    screening: [
      "Check ITI or diploma certificates against the trade asked for",
      "Run a basic practical test for welders, fitters and CNC operators",
      "Check age proof so no one under 18 is sent to the shop floor",
      "Collect Aadhaar, bank and nominee details for PF and ESI enrolment",
      "Confirm acceptance of rotational shifts and the plant's location",
      "Ask about basic PPE habits and any past safety incidents"
    ],
    faqs: [
      { q: "Can you supply helpers and operators on a contract basis?", a: "Yes. Helpers, packers and machine operators are the roles most factories take on contract. They work on our payroll, and we handle wages, PF, ESI and attendance records while your supervisors direct the work. Mobilisation time is {{TURNAROUND}}. Share the shift timings, wage and number of heads, and we confirm availability before you commit." },
      { q: "Do we need a contract labour licence if we use your workers?", a: "It depends on numbers. Under the OSH Code, the 50-worker threshold applies to the contractor, so a contractor deploying 50 or more contract workers needs a licence (as of Nov 2026). State rules may add details. As principal employer, keep copies of the contractor's licence, wage records and PF and ESI challans.[[ Our licence status is {{LICENCES}}.]]" },
      { q: "How fast can you replace a worker who stops coming?", a: "Absconding workers are a real problem on factory floors, especially in the first month. Replacement terms for contract helpers and operators are {{REPLACEMENT}}. We keep a standby list for common roles in each area, so one absence does not stop a line. Tell us the same day a worker goes missing, not at month end." },
      { q: "Can you supply ITI apprentices or trainees?", a: "We can source ITI pass-outs and diploma holders for trainee roles. Formal apprenticeship under the Apprentices Act must be registered by your company, with stipend and training rules that apply to you directly. We help you find suitable candidates in the right trade, while the apprenticeship contract stays between your unit and the apprentice." },
      { q: "What wages should we offer factory helpers?", a: "The floor is the Tamil Nadu minimum wage for your industry schedule, revised from 1 April 2026 (TN Labour Department, as of Nov 2026). Above that, the local market decides. Helpers in the Ambattur and Sriperumbudur belts usually expect more than helpers in Salem or Madurai. Free food, transport or accommodation often matter as much as the cash figure." }
    ],
    relatedIndustries: ["automobile", "mobile-phone-manufacturing", "logistics-warehousing"],
    relatedCities: ["chennai", "tiruvallur", "hosur", "coimbatore"]
  },

  // 5. Automobile
  {
    slug: "automobile",
    name: "Automobile",
    primaryKeyword: "automobile industry manpower supply chennai",
    title: "Automobile Industry Manpower Supply in Chennai | Lifeline",
    description: "Assembly, weld shop, paint shop and CMM staff for auto OEMs and suppliers in Oragadam, Sriperumbudur and Hosur. Contract or bulk batches. WhatsApp or call us.",
    h1: "Manpower Supply for the Automobile Industry in Chennai and Tamil Nadu",
    tamil: "வாகன உற்பத்தித் துறைக்கு பணியாளர்கள்",
    summary: "Lifeline Placements supplies shop-floor and quality staff to vehicle makers and tier-1 and tier-2 component suppliers in Tamil Nadu. Roles include assembly line operators, weld shop and paint shop operators, CNC machinists, CMM operators, quality inspectors and maintenance technicians. Demand centres on Chennai's auto belt at Oragadam, Sriperumbudur, Irungattukottai and Maraimalai Nagar, with more from Hosur and Coimbatore. Operators can be deployed within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your line and shift details.",
    roles: [
      { group: "Assembly and body", items: ["Assembly line operators", "Spot and MIG welders", "Paint shop operators", "Trim and final line operators"] },
      { group: "Machining and press", items: ["CNC machinists", "Press shop operators", "Tool room technicians"] },
      { group: "Quality", items: ["Quality inspectors", "CMM operators", "PDI inspectors"] },
      { group: "Maintenance and material", items: ["Maintenance technicians (mechanical and electrical)", "Material handlers and forklift drivers"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Quality engineers, maintenance technicians and tool room staff whose skills the plant cannot rebuild quickly.", example: "A tier-1 supplier in Oragadam hiring a CMM operator before a customer audit" },
      { model: "Contract staffing", bestFor: "Line operators and material handlers on volume-linked work, where model launches and schedules change the headcount.", example: "A component plant near Sriperumbudur adding 20 operators for a new model's ramp-up" },
      { model: "Bulk hiring", bestFor: "Plant start-ups or an added shift, where a large operator batch must finish induction together.", example: "A supplier in Hosur onboarding 50 ITI operators for a new assembly line" }
    ],
    context: [
      "Chennai's auto cluster lies west and south-west of the city. Hyundai's plant at Irungattukottai near Sriperumbudur, the Renault Nissan and Daimler India Commercial Vehicles plants at Oragadam, and Royal Enfield's units at Oragadam and Vallam Vadagal anchor hundreds of suppliers. Hosur has TVS Motor and Ashok Leyland plants, and Ashok Leyland also runs its Ennore plant in Chennai. These names are local context only, not Lifeline clients.",
      "Auto suppliers work to the quality systems their customers audit, usually IATF 16949. That means training records, skill matrices and operator certification at each station. New operators need induction before they touch a live line. We match ITI trades to stations: fitters for assembly, welders for the body shop, painters for the paint shop. Operators with prior experience on a moving assembly line settle faster than those from job shops.",
      "Production schedules swing with model launches and festival-season demand, so plants use contract operators to absorb peaks. Contract operators deployed through an agency need PF and ESI from the first day of work. Licensing under the OSH Code applies once a single contractor deploys 50 or more contract workers (as of Nov 2026). Many plants also run trainee and apprentice schemes, so be clear which route each role follows."
    ],
    screening: [
      "Match the ITI trade to the station: fitter, welder, painter or electrician",
      "Run a practical test for welding, CNC setting or CMM reading",
      "Check experience on moving assembly lines versus job-shop work",
      "Ask for an eye test report for paint shop and inspection roles",
      "Verify previous plant experience with payslips or service certificates"
    ],
    faqs: [
      { q: "Can you supply operators for IATF-audited plants?", a: "We look for operators with prior experience in audited auto plants, and we record their earlier stations and trades. Station certification and induction still happen inside your plant, because auditors expect your own training records. Send us the skill matrix requirements for each station, and we screen candidates against them before they reach your HR team." },
      { q: "How quickly can you staff a new model ramp-up?", a: "A ramp-up needs lead time. Tell us the start-of-production date, the shift plan and how many operators each shift needs. First batches can be ready within {{TURNAROUND}}[[, and our largest single-order capacity is {{CAPACITY}}]]. Leave time for your own induction and safety training before operators go live on the line." },
      { q: "Are contract operators covered for PF and ESI?", a: "They must be. Every contract operator should be enrolled in EPF, and in ESI where monthly wages are within Rs 21,000 (ESIC, as of Nov 2026). As principal employer, ask for monthly challans and the ECR listing each worker by name. If a contractor defaults, the liability can come back to your plant, so ask every contractor, including us, for these records with each invoice." },
      { q: "What is the usual fee for auto plant contract staffing?", a: "Our rate is {{FEE}}. Published vendor rates put the service charge at 5% to 15% or more over wages and statutory costs, with 18% GST, generally on the full invoice. That range is market context, not our price. Plants with high volumes and stable shifts tend to get rates toward the lower end." },
      { q: "Do you supply women operators for assembly lines?", a: "Yes, where the plant has the facilities. Many auto suppliers now hire women for assembly, inspection and wiring harness work. Night shifts need the women's written consent and safe transport, under Section 43 of the OSH Code and state rules (as of Nov 2026). Rest rooms, a woman supervisor and a reliable transport plan help retention." }
    ],
    relatedIndustries: ["manufacturing", "mobile-phone-manufacturing", "logistics-warehousing"],
    relatedCities: ["kanchipuram", "chengalpattu", "hosur", "coimbatore"]
  },

  // 6. Pharma
  {
    slug: "pharma",
    name: "Pharma",
    primaryKeyword: "pharma manpower consultancy tamil nadu",
    title: "Pharma Manpower Consultancy in Tamil Nadu | Lifeline",
    description: "Production chemists, QC analysts, packing staff and pharmacists for pharma units at Alathur, Gummidipoondi and Chennai distributors. WhatsApp or call us today.",
    h1: "Pharma Manpower Supply in Chennai and Tamil Nadu",
    tamil: "மருந்து நிறுவனங்களுக்கு பணியாளர்கள்",
    summary: "Lifeline Placements supplies staff to pharmaceutical manufacturers, API units, formulation plants and pharma distributors in Tamil Nadu. We fill production chemists and operators, QC and QA executives, packing line staff, warehouse assistants and registered pharmacists. Demand comes from the SIDCO pharma estate at Alathur near Thiruporur, from Gummidipoondi in Tiruvallur district, and from distributors and stockists across Chennai. Profiles can be shared within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 to discuss your vacancy.",
    roles: [
      { group: "Production", items: ["Production chemists (B.Sc, M.Sc)", "Granulation, compression and coating operators", "Production helpers"] },
      { group: "Quality", items: ["QC chemists and analysts (HPLC, GC)", "QA and IPQA executives", "Microbiologists"] },
      { group: "Packing and distribution", items: ["Packing line operators", "Warehouse assistants", "Registered pharmacists for stores and distribution"] },
      { group: "Engineering and utilities", items: ["Boiler and utility operators", "HVAC and maintenance technicians"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "QA, QC and production chemists whose GMP training and documentation history the plant needs to keep stable.", example: "An API unit at Alathur hiring a QC chemist with HPLC experience" },
      { model: "Contract staffing", bestFor: "Packing lines, warehouse loading and helper roles, where volumes change with tenders and export orders.", example: "A formulation plant near Gummidipoondi adding 10 packing operators for an export batch" },
      { model: "Bulk hiring", bestFor: "Commissioning a new block, or a distributor opening a warehouse that must start with a full team.", example: "A distributor opening a Chennai warehouse needing 25 pickers and two pharmacists" }
    ],
    context: [
      "Pharma hiring in Tamil Nadu centres on a few clusters. The SIDCO pharmaceutical estate at Alathur, near Thiruporur in Chengalpattu district, houses API and formulation units. Gummidipoondi in Tiruvallur district, near the Andhra Pradesh border, has chemical and pharma plants. Chennai itself is a large hub for distributors, C&F agents and stockists, who need warehouse staff and pharmacists rather than chemists. Each cluster draws a different workforce.",
      "Every production and quality role sits inside a GMP system. The revised Schedule M under the Drugs and Cosmetics Rules raised expectations on training, documentation and data integrity. Interviewers therefore probe how candidates filled batch manufacturing records, handled deviations and worked in classified areas. QC analysts are tested on the instruments they claim, such as HPLC or dissolution testers. Pharmacists must hold current registration with the Tamil Nadu Pharmacy Council.",
      "Plants with sterile or beta-lactam blocks need staff who follow gowning and segregation rules without being reminded. Shift work is common in production and utilities. Contract packing and stores staff must be enrolled in PF and ESI, and the OSH Code requires a licence for any contractor with 50 or more contract workers (as of Nov 2026). Auditors may also ask to see training records for contract staff."
    ],
    screening: [
      "Check B.Pharm, D.Pharm or M.Sc certificates against the role",
      "Verify pharmacist registration with the Tamil Nadu Pharmacy Council",
      "Ask QC candidates to explain their own HPLC or dissolution work",
      "Review GMP training history and experience with batch records",
      "Check boiler attendant certificates for utility operators"
    ],
    faqs: [
      { q: "Do you check pharmacist registration?", a: "Yes. For any role that needs a registered pharmacist, we ask for the Tamil Nadu Pharmacy Council registration certificate and check that the renewal is current. Wholesale and retail drug licences depend on a qualified person being present, so a lapsed registration can put your licence at risk. A copy of the certificate goes with the profile." },
      { q: "Can you find QC analysts with regulatory audit experience?", a: "We can search for them, though they are scarce and take longer to find than packing or production staff. Analysts who have faced USFDA, WHO-GMP or EU audits get frequent offers, so expect counter-offers. We test claims about instruments and audits in the screening call. Shortlist timing for standard roles is {{TURNAROUND}}." },
      { q: "What fee do you charge for pharma hiring?", a: "Our pharma hiring fee is {{FEE}}. For context only, permanent placement fees in the Indian market typically run from one to two months of the hire's annual pay, that is 8.33% to 16.67%, and specialist QA or regulatory roles sit toward the upper end. Contract staff are billed as wages plus statutory costs plus a service charge, with 18% GST, generally on the full invoice." },
      { q: "Can contract staff work in GMP areas?", a: "Yes, if they are trained and documented like your own staff. Auditors look at training records, not employment type. Contract packing and stores staff need induction on GMP, hygiene and gowning before they enter a controlled area. We send candidates with basic awareness, and your QA team completes the site-specific training and sign-off." },
      { q: "What documents do you collect before a pharma joining?", a: "We collect educational certificates, Pharmacy Council registration where relevant, the last three payslips, relieving letters, Aadhaar, PAN and bank details. For contract staff we also take nominee details for PF and ESI. Originals are seen at the interview, and your HR keeps copies under your own document control procedure." }
    ],
    relatedIndustries: ["manufacturing", "hospitals-clinics", "logistics-warehousing"],
    relatedCities: ["chengalpattu", "tiruvallur", "chennai"]
  },

  // 7. Textile and garments
  {
    slug: "textile-garments",
    name: "Textile & garments",
    primaryKeyword: "textile and garment manpower supply tamil nadu",
    title: "Textile and Garment Factory Manpower in TN | Lifeline",
    description: "Tailors, overlock operators, checkers and spinning mill workers for units in Tiruppur, Coimbatore, Erode, Karur and Chennai. WhatsApp or call us today.",
    h1: "Textile and Garment Manpower Supply in Tamil Nadu",
    tamil: "ஜவுளி மற்றும் ஆடை நிறுவனங்களுக்கு தொழிலாளர்கள்",
    summary: "Lifeline Placements supplies workers to spinning mills, weaving and processing units and garment exporters in Tamil Nadu. We recruit tailors, single-needle and overlock operators, cutters, checkers, ironing and packing staff, spinning machine tenders and mill fitters. The main clusters are Tiruppur for knitwear, Coimbatore and Dindigul for spinning, Erode and Komarapalayam for powerlooms, Karur for home textiles, and garment units in Chennai. Workers can be mobilised within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your order dates.",
    roles: [
      { group: "Garment stitching", items: ["Tailors and single-needle operators", "Overlock and flatlock operators", "Cutting masters and cutters"] },
      { group: "Finishing", items: ["Checkers and quality inspectors", "Ironing staff", "Packing staff"] },
      { group: "Spinning and weaving", items: ["Spinning machine tenders", "Doffers", "Powerloom and auto-loom weavers", "Mill fitters"] },
      { group: "Supervision", items: ["Line supervisors", "Merchandisers"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Merchandisers, line supervisors and cutting masters who know your buyers' standards and keep orders on schedule.", example: "A Tiruppur exporter hiring a merchandiser to handle a European buyer" },
      { model: "Contract staffing", bestFor: "Stitching and finishing staff for order peaks before shipment dates, when line capacity must rise for a few weeks.", example: "A knitwear unit adding 30 tailors to finish a summer order" },
      { model: "Bulk hiring", bestFor: "A new spinning shed or garment line that needs operators recruited, housed and trained as one group.", example: "A Dindigul spinning mill filling a new shift with 40 tenders and doffers" }
    ],
    context: [
      "Tamil Nadu's textile chain is spread across the western districts. Tiruppur leads in knitwear and export garments. Coimbatore and Dindigul have dense spinning mill clusters. Erode and Komarapalayam run powerlooms and processing, and Karur is known for home textiles such as bed linen and curtains. Chennai has export garment units of its own. Pay, hostel facilities and the mix of local and migrant workers differ in each place.",
      "Garment work is paid in several ways: monthly salary, daily wage or piece rate. Operators judge an offer by take-home pay, overtime and hostel facilities, not by the headline salary. Demand rises before export shipment windows and before Deepavali, then drops sharply. A trial on the machine is the only reliable test of a tailor's speed and finish, so we arrange trial stitching wherever the unit allows it.",
      "Buyer social audits look closely at labour practices. Most buyers require every worker to be 18 or older, wages to reach the notified minimum, and overtime to be voluntary and paid at twice the ordinary rate. Hostel workers must be free to leave the premises and keep their own documents. Many buyer codes follow the employer-pays principle, so workers should not pay any recruitment fee."
    ],
    screening: [
      "Arrange a machine trial to check stitching speed and finish",
      "Verify age proof so every worker is 18 or older",
      "Confirm the worker holds their own ID documents and bank account",
      "Explain piece-rate, overtime and hostel terms before joining",
      "Check prior mill or unit experience by machine type"
    ],
    faqs: [
      { q: "Can you supply tailors at short notice before a shipment?", a: "Yes, for common machine types such as single needle, overlock and flatlock. First workers arrive within {{TURNAROUND}}, depending on headcount and whether your unit provides hostel space. Tell us the order quantity, garment type and shipment date. Short-notice batches are easier in Tiruppur than in areas with fewer trained tailors." },
      { q: "Will your workers pass a buyer social audit?", a: "We cannot promise an audit result, because it also depends on your working hours, overtime records and hostel conditions. What we can do is supply workers with age proof, ID, a bank account in their own name and documented wages, which are the first things auditors check.[[ Lifeline's licence position is {{LICENCES}}.]]" },
      { q: "Do you supply workers with hostel accommodation?", a: "Accommodation is usually provided by the mill or unit, not by the agency. Many spinning mills and garment exporters in Tiruppur, Coimbatore and Dindigul run worker hostels. If you offer one, tell us the facilities and rules, and we explain them to candidates before they travel. Workers must be free to come and go and keep their own documents." },
      { q: "Do you work on piece-rate or daily-wage terms?", a: "We work with the wage system your unit already uses, whether monthly, daily or piece rate. Whatever the method, a worker's earnings for normal hours must not fall below the Tamil Nadu minimum wage for the relevant textile or garment schedule (TN Labour Department, as of Nov 2026). Our service charge is {{FEE}}, billed in addition to wages and statutory costs." },
      { q: "How do you reduce workers leaving after a few weeks?", a: "We explain take-home pay, overtime, food and hostel rules before joining, because surprises cause most early exits. For units without hostels, we prefer candidates from nearby villages and towns. Replacement terms for workers who leave early are {{REPLACEMENT}}. Inside the unit, a fair supervisor and wages paid on time do most of the retention work." }
    ],
    relatedIndustries: ["manufacturing", "retail-showrooms", "logistics-warehousing"],
    relatedCities: ["tiruppur", "coimbatore", "erode", "karur"]
  },

  // 8. Retail and showrooms
  {
    slug: "retail-showrooms",
    name: "Retail & showrooms",
    primaryKeyword: "showroom staff supply chennai",
    title: "Showroom and Retail Staff Supply in Chennai, TN | Lifeline",
    description: "Sales staff, cashiers and floor staff for textile, jewellery, mobile and furniture showrooms in Chennai and Tamil Nadu. WhatsApp or call before the season.",
    h1: "Showroom and Retail Staff Supply in Chennai and Tamil Nadu",
    tamil: "ஷோரூம்களுக்கு விற்பனை பணியாளர்கள்",
    summary: "Lifeline Placements supplies sales and store staff to textile, jewellery, footwear, mobile, electronics and furniture showrooms in Tamil Nadu. Roles include salesmen and saleswomen, cashiers, billing executives, section in-charges, store keepers, delivery helpers and housekeeping staff. Requests come from T Nagar, Purasawalkam and Anna Nagar in Chennai, from Cross Cut Road in Coimbatore, and from the shopping streets of Madurai and Tirunelveli. Festival staff can be lined up within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 before the season starts.",
    roles: [
      { group: "Sales floor", items: ["Sales executives (men and women)", "Section in-charges", "Customer care staff"] },
      { group: "Billing and cash", items: ["Cashiers", "Billing executives", "Store accountants"] },
      { group: "Back of store", items: ["Store keepers and stock assistants", "Delivery helpers", "Housekeeping staff"] },
      { group: "Specialist counters", items: ["Jewellery sales staff with gold knowledge", "Mobile and electronics product advisors"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Section in-charges, cashiers and jewellery sales staff who handle cash, stock and repeat customers.", example: "A jewellery showroom in T Nagar replacing a cashier who moved to another city" },
      { model: "Contract staffing", bestFor: "Seasonal sales staff for Deepavali, Pongal and the wedding season, when footfall jumps for a few weeks.", example: "A textile showroom in Purasawalkam adding 15 sales staff for the Deepavali rush" },
      { model: "Bulk hiring", bestFor: "New store openings that need a full floor team hired and trained before the launch date.", example: "A furniture chain opening a Coimbatore store with 20 floor and back-office staff" }
    ],
    context: [
      "Retail hiring in Tamil Nadu follows the festival calendar. Deepavali, Pongal, the Aadi sales and the wedding season bring short, intense peaks, especially for textile and jewellery showrooms. In Chennai, Ranganathan Street and Usman Road in T Nagar, Purasawalkam and Anna Nagar draw the biggest crowds. Coimbatore, Madurai, Tiruchirappalli and Tirunelveli have their own showroom streets. Staff hired four to six weeks before a festival have time to learn the stock.",
      "Many large Chennai showrooms recruit sales staff from the southern districts and house them in staff hostels. Candidates now weigh working hours, weekly offs and hostel conditions as much as pay. Spoken Tamil is essential on the floor, and English or Hindi helps in malls and tourist areas. Jewellery staff need basic knowledge of purity, weight and making charges before they face a customer.",
      "Shops come under the Tamil Nadu Shops and Establishments Act. State orders have allowed shops with 10 or more workers to stay open round the clock, with conditions. Under the same orders, women can work between 8 pm and 6 am only with written consent and employer transport. Check the current notification before planning late closing. Retail wages must also meet the shops minimum wage revised from 1 April 2026 (TN Labour Department, as of Nov 2026)."
    ],
    screening: [
      "Assess spoken Tamil and customer handling in a short role-play",
      "Test billing and cash handling for cashier roles",
      "Check basic gold purity and weight knowledge for jewellery staff",
      "Verify previous showroom employment with a reference call",
      "Confirm willingness to work festival-season hours and Sundays"
    ],
    faqs: [
      { q: "How early should we book festival staff?", a: "Book four to six weeks before the festival. That leaves time to source, interview and train staff on your stock and billing system. Requests made in Deepavali week are harder, because every showroom in T Nagar is hiring at once. First profiles arrive within {{TURNAROUND}} once we have the role details and pay." },
      { q: "Can women sales staff work till 10 pm?", a: "Under Tamil Nadu's orders for shops and establishments, women may work between 8 pm and 6 am only with their written consent, and the employer must provide transport (as of Nov 2026). Check the current notification, because these orders are time-bound. Keep signed consent forms on file and plan drop arrangements before the festival rush begins." },
      { q: "Do you supply jewellery showroom staff?", a: "Yes. For jewellery counters we look for candidates with earlier experience in gold or silver sales who understand purity, weight, wastage and making charges. Trust matters more here than in any other retail role, so we take references from previous employers. Your own vetting process and any bond terms remain with you." },
      { q: "What does seasonal retail staffing cost?", a: "Our seasonal staffing rate is {{FEE}}. Market context only: contract staff are billed as wages, plus PF and ESI, plus an agency service charge that vendors quote from 5% to 15% or more. GST of 18% applies to the service charge. Short assignments of a few weeks often carry a higher charge than year-round contracts." },
      { q: "What if a salesperson leaves in the middle of the season?", a: "Mid-season exits hurt, so we try to prevent them by explaining hours, hostel and pay clearly at the hiring stage. If someone still leaves early, replacement terms are {{REPLACEMENT}}. For large showrooms, keeping one or two standby staff during peak weeks is a practical safeguard. Tell us the same day someone stops coming." }
    ],
    relatedIndustries: ["textile-garments", "office-staff", "spas-salons"],
    relatedCities: ["chennai", "coimbatore", "madurai", "tirunelveli"]
  },

  // 9. Spas and salons
  {
    slug: "spas-salons",
    name: "Spas & salons",
    primaryKeyword: "spa and salon staff recruitment chennai",
    title: "Spa and Salon Staff Recruitment in Chennai, TN | Lifeline",
    description: "Hair stylists, beauticians, makeup artists, spa therapists and front desk staff for salons and spas in Chennai, Coimbatore and Madurai. WhatsApp or call us.",
    h1: "Spa and Salon Staff Recruitment in Chennai and Tamil Nadu",
    tamil: "ஸ்பா மற்றும் சலூன்களுக்கு பணியாளர்கள்",
    summary: "Lifeline Placements recruits staff for beauty salons, unisex salons, spas and wellness centres in Tamil Nadu. We find hair stylists, beauticians, makeup artists, nail technicians, spa therapists, front desk executives and housekeeping staff. Most requests come from Chennai, around Anna Nagar, Velachery, Nungambakkam, Adyar and along OMR and ECR, and from Coimbatore and Madurai. Trial-ready candidates can be shared within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with the services your outlet offers.",
    roles: [
      { group: "Hair", items: ["Senior hair stylists", "Junior hair stylists", "Hair colour technicians"] },
      { group: "Beauty and makeup", items: ["Beauticians", "Bridal makeup artists", "Nail technicians"] },
      { group: "Spa", items: ["Spa therapists", "Spa managers"] },
      { group: "Front desk and support", items: ["Front desk and billing executives", "Salon managers", "Housekeeping staff"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Senior stylists, salon managers and spa managers who build a loyal client base for the outlet.", example: "A unisex salon in Anna Nagar hiring a senior stylist to grow its colour services" },
      { model: "Contract staffing", bestFor: "Front desk cover, housekeeping and extra beauticians for the wedding season, when bookings run ahead of staff.", example: "A bridal studio in Velachery adding two makeup artists for the wedding season" },
      { model: "Bulk hiring", bestFor: "A chain opening several outlets at once, or a new spa that needs a full team before launch.", example: "A salon chain staffing three new Coimbatore outlets in the same month" }
    ],
    context: [
      "Salon and spa hiring is skill-first. A stylist's CV says little; a practical trial on a model client says a lot. Employers check cutting technique, colour knowledge, hygiene habits and how the candidate talks to a client. Certificates from academies or from the Beauty and Wellness Sector Skill Council help, but chains still run their own trials. Experienced stylists often take their regular clients with them when they move, so retention and incentives matter.",
      "Spa and massage centres in Tamil Nadu have faced police inspections and court cases over how they operate, and licensing conditions vary by local body. Employers therefore want therapists with genuine training certificates, verified identity and clean work histories. Keep copies of each therapist's ID, address proof and qualification on file. A spa that runs strictly by the rules also finds it easier to attract trained staff.",
      "Pay in this industry mixes a fixed salary with service incentives and product commissions. Candidates compare the total, along with the weekly off, working hours and accommodation for staff who move from other states. Many salons stay open late into the evening. Women staff working after 8 pm need written consent and transport under Tamil Nadu's shops and establishments orders, so plan closing-time drops in advance."
    ],
    screening: [
      "Arrange a practical trial on a model client at your outlet",
      "Check training certificates from academies or the sector skill council",
      "Verify identity and address proof for every therapist",
      "Ask makeup artists and senior stylists for a portfolio of their work",
      "Confirm the candidate's expected mix of salary and incentive"
    ],
    faqs: [
      { q: "Can a stylist do a trial before we hire?", a: "Yes, and we recommend a trial for every stylist, beautician and therapist. A trial on a model client at your outlet shows technique, hygiene and client handling far better than an interview does. Agree the trial date and services in advance. If the candidate spends a full day at your outlet, paying a fair trial amount is good practice." },
      { q: "Do you verify spa therapists?", a: "Yes. We collect and check identity proof, address proof and training certificates for every spa therapist before sending a profile, and we call a previous employer where possible. Police verification, where your local station or licence requires it, is completed by you as the employer, using the documents we provide. Keep the file ready for inspections." },
      { q: "How do you handle incentive and commission terms?", a: "You set the incentive structure, and we explain it honestly to candidates before the trial. Most salons pay a fixed salary plus a percentage on services and product sales. Unclear incentive rules cause many early resignations in this industry. Put the terms in the offer letter, including how incentives are calculated and the date they are paid." },
      { q: "What is your fee for salon staff?", a: "For salon roles, our fee is {{FEE}}. In the wider market, agencies price a permanent hire as a share of annual CTC, typically between 8.33% and 16.67%, plus 18% GST. Senior stylists and makeup artists with a client following cost more to place than juniors. Treat these as market numbers, not Lifeline's price." },
      { q: "Can you staff a new spa before opening?", a: "Yes. Give us six to eight weeks before the opening date, the list of treatments you plan to offer and your pay structure. We line up therapists, a front desk team and housekeeping, then schedule trials in the last fortnight before launch.[[ Our capacity for a single opening is {{CAPACITY}}.]]" }
    ],
    relatedIndustries: ["hostels-service-apartments", "retail-showrooms", "hospitals-clinics"],
    relatedCities: ["chennai", "coimbatore", "madurai"]
  },

  // 10. Hospitals and clinics
  {
    slug: "hospitals-clinics",
    name: "Hospitals & clinics",
    primaryKeyword: "hospital staffing agency chennai",
    title: "Hospital and Clinic Staffing Agency in Chennai | Lifeline",
    description: "Staff nurses, ward aides, lab and X-ray technicians, pharmacists and front office staff for hospitals and clinics across Tamil Nadu. WhatsApp or call us today.",
    h1: "Hospital and Clinic Staffing in Chennai and Tamil Nadu",
    tamil: "மருத்துவமனைகளுக்கு செவிலியர்கள் மற்றும் பணியாளர்கள்",
    summary: "Lifeline Placements supplies nursing, paramedical and support staff to hospitals, nursing homes, clinics, diagnostic centres and dental practices in Tamil Nadu. We recruit staff nurses, ward aides, lab technicians, X-ray technicians, OT technicians, pharmacists, front office and billing staff, and housekeeping. Requests come from Chennai's hospital zones around Greams Road, Vadapalani and Porur, from Vellore, and from Coimbatore, Madurai and Tiruchirappalli. Shortlists can reach you within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 to discuss your roster.",
    roles: [
      { group: "Nursing", items: ["Staff nurses (GNM, B.Sc Nursing)", "ICU and OT nurses", "Nursing assistants and ward aides"] },
      { group: "Paramedical", items: ["Lab technicians (DMLT, B.Sc MLT)", "X-ray and CT technicians", "OT technicians", "Dialysis technicians"] },
      { group: "Pharmacy and front office", items: ["Pharmacists", "Front office and billing executives", "Insurance desk (TPA) executives"] },
      { group: "Support", items: ["Housekeeping staff", "Patient care attendants"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Staff nurses, ICU and OT staff, and pharmacists, where continuity of care and registration compliance matter most.", example: "A 50-bed hospital in Porur hiring two ICU nurses after resignations" },
      { model: "Contract staffing", bestFor: "Housekeeping, patient attendants and billing staff, or extra cover during leave and seasonal fever surges.", example: "A nursing home in Madurai adding four ward aides during the monsoon fever season" },
      { model: "Bulk hiring", bestFor: "New hospital wings, dialysis centres or diagnostic branches that must open with a full roster.", example: "A diagnostic chain opening a Tiruchirappalli branch needing lab, X-ray and front office staff" }
    ],
    context: [
      "Chennai is one of India's largest healthcare markets, with dense hospital zones around Greams Road, Vadapalani, Porur and the OMR and GST Road corridors. Vellore draws patients from across India because of its large medical college hospital. Coimbatore, Madurai and Tiruchirappalli have their own big private hospitals. Experienced staff nurses trained in Tamil Nadu are in demand in many places, so they move often and hospitals plan for constant backfill.",
      "Every nurse must hold current registration with the Tamil Nadu Nurses and Midwives Council. GNM and B.Sc Nursing holders are verified by registration number and renewal status. Lab technicians usually hold a DMLT or B.Sc MLT, and radiology staff need a recognised radiography qualification. Pharmacists must be registered with the Tamil Nadu Pharmacy Council. NABH-accredited hospitals also expect a credential file and documented competency checks for every clinical employee.",
      "Hospitals run round the clock, and night duty is unavoidable for nursing and support staff. Women on night duty are covered by the consent and safety conditions in Section 43 of the OSH Code and the state's rules (as of Nov 2026). Housekeeping and attendant staff on contract need PF, and ESI where wages are within Rs 21,000 a month (ESIC, as of Nov 2026). Clinical establishments must also meet state registration rules."
    ],
    screening: [
      "Verify nursing council registration number and renewal status",
      "Check Pharmacy Council registration for pharmacists",
      "Confirm DMLT, B.Sc MLT or radiography qualification certificates",
      "Ask clinical candidates which departments and bed sizes they have worked in",
      "Check hepatitis B vaccination status where the hospital requires it",
      "Confirm acceptance of night duty and rotational shifts"
    ],
    faqs: [
      { q: "Do you verify nursing registration?", a: "Yes. Every staff nurse profile we send includes the Tamil Nadu Nurses and Midwives Council registration number, and we check that the registration is current. Nurses registered in another state generally need Tamil Nadu registration to practise here. Your HR team or nursing superintendent should still see the original certificate on the joining day." },
      { q: "Can you send relief nurses for short leave cover?", a: "Short-term nursing cover is possible for some roles, but it is harder than permanent hiring because many nurses want stable posts. Contract cover works well for ward aides, attendants and housekeeping. For nurses, give us the dates, ward type and shift pattern as early as you can. First profiles arrive within {{TURNAROUND}}." },
      { q: "What is the replacement policy if a nurse leaves early?", a: "Nurse turnover is high across Tamil Nadu, so replacement terms matter. Ours are {{REPLACEMENT}}. As market context, recruitment agencies in India commonly give 30 to 90 days of free replacement for permanent hires. Ask any agency to put the replacement window, its conditions and its exclusions in writing before you sign an agreement." },
      { q: "Do NABH hospitals need anything extra from you?", a: "NABH-accredited hospitals keep a credential file for each clinical employee, so we send copies of qualifications, council registration, experience letters and ID with every clinical profile. Competency assessment and privileging stay with the hospital's own clinical leads. Tell us your document checklist, and we collect it before the candidate is shortlisted." },
      { q: "How do fees work for hospital staffing?", a: "Our hospital staffing fee is {{FEE}}. As a market reference, permanent hires through agencies are often priced at one to two months of salary, or 8.33% to 16.67% of annual CTC. Contract support staff are billed monthly with PF, ESI and a service charge, plus 18% GST, generally on the full invoice. These figures describe the market, not our rates." }
    ],
    relatedIndustries: ["pharma", "hostels-service-apartments", "spas-salons"],
    relatedCities: ["chennai", "vellore", "coimbatore", "madurai"]
  },

  // 11. Hostels and service apartments
  {
    slug: "hostels-service-apartments",
    name: "Hostels & service apartments",
    primaryKeyword: "hostel and service apartment staff chennai",
    title: "Hostel and Service Apartment Staff Supply in TN | Lifeline",
    description: "Wardens, cooks, housekeeping, caretakers and front desk staff for hostels, PGs and service apartments in Chennai and Tamil Nadu. WhatsApp or call to start.",
    h1: "Staff for Hostels and Service Apartments in Chennai and Tamil Nadu",
    tamil: "விடுதிகள் மற்றும் சர்வீஸ் அபார்ட்மென்ட்களுக்கு பணியாளர்கள்",
    summary: "Lifeline Placements supplies staff to working women's and men's hostels, student hostels, PG accommodation and service apartments in Tamil Nadu. We recruit wardens, cooks and kitchen helpers, housekeeping and laundry staff, caretakers, front desk executives and maintenance staff such as electricians and plumbers. Demand is strongest near Chennai's IT corridor on OMR, around Guindy and T Nagar, near the hospitals in Vellore, and in Coimbatore. Staff can be placed within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your property details.",
    roles: [
      { group: "Management", items: ["Wardens (women and men)", "Property managers", "Front desk executives"] },
      { group: "Kitchen", items: ["Cooks (South Indian and North Indian)", "Kitchen helpers", "Mess supervisors"] },
      { group: "Housekeeping", items: ["Housekeeping staff", "Laundry staff"] },
      { group: "Maintenance", items: ["Caretakers", "Electricians", "Plumbers"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Wardens and property managers whom residents and parents must trust over a long period.", example: "A working women's hostel in Guindy hiring a resident woman warden" },
      { model: "Contract staffing", bestFor: "Housekeeping, laundry and kitchen helpers, where absence and turnover are frequent and cover must come quickly.", example: "A service apartment near a Vellore hospital needing housekeeping cover for six rooms" },
      { model: "Bulk hiring", bestFor: "A new property, or an operator taking over several buildings, where every role must be filled before residents arrive.", example: "An operator opening two OMR hostels with 18 staff across kitchen, housekeeping and front desk" }
    ],
    context: [
      "Hostels and service apartments in Tamil Nadu cluster where people come for work, study or treatment. In Chennai that means OMR and Sholinganallur for IT staff, Guindy and T Nagar for working women, and the streets around large hospitals. Vellore's service apartments host patients' families for weeks at a time. Coimbatore has many student and working hostels near its colleges and industrial areas. Each type of property needs a different staff mix.",
      "Hostels and homes for women in Tamil Nadu must be registered with the District Collector under the Tamil Nadu Hostels and Homes for Women and Children (Regulation) Act, 2014. Inspections look at safety, staffing and records. Most operators put a woman warden in charge of a women's hostel and keep resident and staff registers up to date. Background checks on live-in staff matter more here than in most industries.",
      "Cooks are the hardest role to fill and the first one residents complain about. Test cooking for the menu you actually serve, whether South Indian, North Indian or both, and for your real number of residents. Live-in staff need clear terms on room, food, working hours and weekly off. Live-in arrangements do not remove PF and ESI obligations for contract staff."
    ],
    screening: [
      "Run a cooking trial for your menu and number of residents",
      "Verify identity, address and a previous employer reference for wardens and live-in staff",
      "Collect documents for police verification where the property requires it",
      "Confirm willingness to live in and the weekly off pattern",
      "Check language: Tamil plus Hindi or English for properties with outstation residents"
    ],
    faqs: [
      { q: "Can you supply a woman warden for a ladies hostel?", a: "Yes. We look for women with earlier hostel, school or institutional experience who can stay on site and handle residents, parents and staff. We check identity, address and previous employers before sending a profile. Shortlisting time is {{TURNAROUND}}. Share the hostel's size, gate timings and whether the warden must live in." },
      { q: "Do you supply cooks who can stay on site?", a: "Yes, live-in cooks and kitchen helpers are a common request from hostels. Tell us the menu, the number of residents, meal times and the room and food you provide. We ask the cook to do a trial in your kitchen before you confirm. If the cook leaves early, replacement terms are {{REPLACEMENT}}." },
      { q: "Does our women's hostel need registration?", a: "Yes. Under the Tamil Nadu Hostels and Homes for Women and Children (Regulation) Act, 2014, hostels and homes for women must be registered with the District Collector, and the rules prescribe the forms and conditions (as of Nov 2026). Registration is your responsibility as the operator. We supply staff; we do not handle the registration." },
      { q: "Can you supply housekeeping staff on contract?", a: "Yes. Contract housekeeping and laundry staff work on our payroll, and we manage their wages, PF, ESI and attendance. You receive one monthly invoice, and absence cover terms are {{REPLACEMENT}}. Our service charge is {{FEE}}. For comparison, vendors in the market quote a markup of 5% to 15% or more on wages, plus 18% GST." },
      { q: "What hours do hostel staff usually work?", a: "Hours depend on the role. Kitchen staff start before breakfast and finish after dinner, usually with a long break in the afternoon. Housekeeping works day shifts, while wardens or caretakers stay on call through the night. Working hours, overtime and the weekly off must stay within the law, so write them into the appointment letter." }
    ],
    relatedIndustries: ["hospitals-clinics", "spas-salons", "office-staff"],
    relatedCities: ["chennai", "vellore", "coimbatore", "chengalpattu"]
  },

  // 12. E-commerce
  {
    slug: "ecommerce",
    name: "E-commerce",
    primaryKeyword: "ecommerce warehouse manpower chennai",
    title: "E-commerce Warehouse and Delivery Staff, Chennai | Lifeline",
    description: "Pickers, packers, sorters, returns and delivery staff for e-commerce warehouses, dark stores and hubs in Chennai and Tamil Nadu. WhatsApp or call before a sale.",
    h1: "E-commerce Warehouse and Delivery Staffing in Chennai and Tamil Nadu",
    tamil: "இ-காமர்ஸ் கிடங்குகளுக்கு பணியாளர்கள்",
    summary: "Lifeline Placements supplies staff to e-commerce sellers, marketplace warehouses, quick-commerce dark stores and delivery hubs in Tamil Nadu. We recruit pickers, packers, sorters, inventory and returns executives, loaders, delivery executives, and catalogue and customer support staff. Most demand sits in Chennai's warehouse belts at Sriperumbudur, Oragadam and Red Hills, in dark stores across the city, and in Coimbatore. Sale-season batches can be lined up within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 well before your peak.",
    roles: [
      { group: "Warehouse floor", items: ["Pickers", "Packers", "Sorters", "Loaders and unloaders"] },
      { group: "Inventory and returns", items: ["Inventory executives", "Returns and QC executives", "WMS and data entry operators"] },
      { group: "Last mile", items: ["Delivery executives (two-wheeler)", "Hub supervisors", "Dark store associates"] },
      { group: "Seller support", items: ["Catalogue executives", "Customer support executives"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Hub supervisors, inventory controllers and WMS operators who run the site through every season.", example: "A marketplace seller in Ambattur hiring a permanent inventory controller" },
      { model: "Contract staffing", bestFor: "Pickers, packers and delivery staff whose numbers follow monthly order volume and must flex quickly.", example: "A dark store in Velachery adding six associates when it extends its hours" },
      { model: "Bulk hiring", bestFor: "Sale events and festival peaks, when warehouses add large temporary batches for a few weeks.", example: "A fulfilment warehouse near Sriperumbudur adding 120 packers for a Deepavali sale" }
    ],
    context: [
      "E-commerce hiring in Tamil Nadu is driven by sale events. The weeks before Deepavali and the big online sales bring the sharpest peaks, followed by a dip in the new year. Warehouses on the Sriperumbudur–Oragadam corridor and around Red Hills serve the whole state, while dark stores and delivery hubs sit inside Chennai's neighbourhoods. Coimbatore has its own regional hubs. Planning for a sale should start about two months ahead.",
      "Warehouse roles need speed and accuracy more than experience. Pickers and packers must read English product labels, use a handheld scanner and stay on their feet through a long shift. Delivery executives need a two-wheeler, a valid driving licence, a smartphone and knowledge of local streets. Returns and QC staff need care with damaged-item checks, since errors there cost money directly.",
      "Night shifts are routine in large warehouses. Women can work them with written consent and safe transport under Section 43 of the OSH Code (as of Nov 2026). Delivery executives on an agency's payroll are employees, so PF and ESI apply to them. Gig delivery partners on platform terms are a different arrangement, which the Code on Social Security treats separately."
    ],
    screening: [
      "Check that pickers can read English labels and use a handheld scanner",
      "Verify driving licence and vehicle RC for delivery executives",
      "Confirm a working smartphone for app-based delivery and hub roles",
      "Confirm willingness for night shifts and standing work",
      "Collect address proof and an emergency contact for delivery staff"
    ],
    faqs: [
      { q: "Can you supply 100 or more staff for a sale event?", a: "Large sale batches are possible with enough lead time. Share the headcount, shifts, site location and exact sale dates six to eight weeks ahead. First batches can join within {{TURNAROUND}}[[, and our capacity for one order is {{CAPACITY}}]]. Transport from the city to the Sriperumbudur or Red Hills belt often decides how many people actually turn up." },
      { q: "Are delivery executives employees or gig workers?", a: "It depends on the contract. Delivery executives deployed on an agency's payroll are employees, and the agency handles their wages, PF and ESI. Gig partners working on platform terms fall under the separate gig and platform worker provisions of the Code on Social Security (as of Nov 2026). Choose the model before you hire, because the costs and duties differ." },
      { q: "What happens if temporary staff do not turn up on day one?", a: "No-shows are common on short sale contracts, so we plan for them. We confirm each candidate the evening before joining and keep standby candidates ready for the first week. Replacement terms beyond that are {{REPLACEMENT}}. Free transport or a pickup point near a bus terminus also helps first-day turnout." },
      { q: "How is short-term warehouse staffing billed?", a: "Our billing terms are {{FEE}}. As market context, short-term warehouse staff are usually billed per head per day or per month, covering wages, statutory costs and a service charge of 5% to 15% or more, plus 18% GST, generally on the full invoice. Overtime during sale weeks is paid at the statutory overtime rate and billed separately." },
      { q: "Do warehouse staff need any certification?", a: "Most warehouse roles need no formal certificate, only basic reading, fitness and willingness to work shifts. Forklift and reach truck operators are the exception. They should show proof of operator training and pass a practical test on your equipment before working alone. Supervisors benefit from experience with a warehouse management system." }
    ],
    relatedIndustries: ["logistics-warehousing", "retail-showrooms", "bpo-call-centres"],
    relatedCities: ["chennai", "kanchipuram", "tiruvallur", "coimbatore"]
  },

  // 13. Logistics and warehousing
  {
    slug: "logistics-warehousing",
    name: "Logistics & warehousing",
    primaryKeyword: "logistics manpower supply chennai",
    title: "Logistics and Warehouse Manpower Supply, Chennai | Lifeline",
    description: "Loaders, forklift operators, drivers, supervisors and documentation staff for logistics firms near Chennai's ports and across Tamil Nadu. WhatsApp or call us.",
    h1: "Logistics and Warehousing Manpower Supply in Chennai and Tamil Nadu",
    tamil: "சரக்கு மற்றும் கிடங்கு நிறுவனங்களுக்கு பணியாளர்கள்",
    summary: "Lifeline Placements supplies staff to freight forwarders, transporters, 3PL warehouses, container freight stations and cold chain operators in Tamil Nadu. We recruit loaders, forklift and reach truck operators, heavy vehicle drivers, warehouse supervisors, documentation and customs executives, and inventory staff. Demand centres on Chennai's port belt at Ennore, Manali and Madhavaram, on the Sriperumbudur corridor, and in Thoothukudi and Coimbatore. Crews can be mobilised within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your site and shift.",
    roles: [
      { group: "Warehouse operations", items: ["Loaders and unloaders", "Forklift and reach truck operators", "Warehouse supervisors", "Inventory controllers"] },
      { group: "Transport", items: ["Heavy vehicle drivers", "Light vehicle drivers", "Fleet supervisors"] },
      { group: "Documentation", items: ["Import and export documentation executives", "Customs clearance assistants", "Billing and MIS executives"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Documentation executives, supervisors and fleet staff whose knowledge of clients and customs procedures takes time to build.", example: "A freight forwarder in Chennai hiring an import documentation executive" },
      { model: "Contract staffing", bestFor: "Loaders and forklift crews at warehouses and CFSs, where volume follows vessel schedules and client contracts.", example: "A CFS near Ennore adding a 10-person loading crew for a new client" },
      { model: "Bulk hiring", bestFor: "New warehouse handovers and 3PL contract starts, where a site must run at full strength from the first week.", example: "A 3PL taking over an Oragadam warehouse with 60 staff across three shifts" }
    ],
    context: [
      "Chennai's logistics work concentrates around its ports and highways. Container freight stations and yards cluster near Ennore, Manali and Madhavaram, close to Chennai Port, Kamarajar Port and Kattupalli. Large warehouses line the Sriperumbudur–Oragadam corridor along NH 48. Thoothukudi's V.O. Chidambaranar Port serves the south, and Coimbatore and Hosur have growing inland warehouses. Workers prefer sites near home, so location shapes availability.",
      "Drivers and forklift operators carry the most risk. Heavy vehicle drivers need a valid licence of the right class, and drivers of hazardous goods need additional training under the motor vehicle rules. Forklift operators should show training records and pass a practical test on the site's own equipment. Documentation staff need working knowledge of shipping bills, bills of lading and the ICEGATE customs portal.",
      "Work runs around the clock at ports and in many warehouses. Loading crews often work long shifts, which must still respect daily and weekly hour limits and overtime pay rules. Contract labour licensing under the OSH Code starts at 50 contract workers per contractor (as of Nov 2026), a level many warehouse sites cross quickly. Keep PF and ESI challans for every contract worker on your site."
    ],
    screening: [
      "Check driving licence class and validity in the online licence records",
      "Run a practical forklift or reach truck test",
      "Check prior port, CFS or warehouse experience",
      "Test documentation candidates on shipping bill and bill of lading basics",
      "Confirm willingness for night shifts and travel to the site"
    ],
    faqs: [
      { q: "Can you supply forklift operators with experience?", a: "Yes. We look for operators with earlier warehouse or CFS experience, and we ask for training records and a valid driving licence where the site requires one. A practical test on your own equipment before deployment is the most reliable check. Reach truck and high-bay operators are scarcer than standard forklift drivers, so allow extra time." },
      { q: "Do you verify drivers' licences?", a: "Yes. We check each driver's licence class, validity and endorsements against the government's online licence records before sending a profile. For heavy vehicles we also ask about the routes and loads handled earlier. A road test by your fleet supervisor is still advisable, since a licence alone does not show driving habits." },
      { q: "Can you run a full loading crew for our warehouse?", a: "Yes, as contract staffing. We supply the crew on our payroll and manage attendance, wages, PF and ESI, and replace absentees; replacement terms are {{REPLACEMENT}}. You direct the work and site safety. Crew size and shift pattern decide the cost, and our service charge is {{FEE}}. Share your expected daily volumes and we plan the headcount." },
      { q: "Who is responsible for the safety of contract loaders?", a: "Both parties. The contractor must train and equip its workers, while the principal employer controls the site, the equipment and the hazards. Under the OSH Code, the principal employer also has welfare and safety duties toward contract workers on its premises (as of Nov 2026). Keep an induction record, a PPE issue log and an incident register." },
      { q: "Do you supply customs documentation staff?", a: "Yes. We recruit documentation executives with experience in shipping bills, bills of entry, bills of lading and ICEGATE filing. Licensed customs brokers are rare and usually stay with established firms, so most hires are assistants working under a licensed broker. Shortlists for documentation roles arrive within {{TURNAROUND}}." }
    ],
    relatedIndustries: ["ecommerce", "manufacturing", "automobile"],
    relatedCities: ["chennai", "tiruvallur", "kanchipuram", "thoothukudi"]
  },

  // 14. Mobile phone manufacturing
  {
    slug: "mobile-phone-manufacturing",
    name: "Mobile phone manufacturing",
    primaryKeyword: "mobile manufacturing manpower supply sriperumbudur",
    title: "Mobile Phone Factory Staff Supply, Sriperumbudur | Lifeline",
    description: "SMT, assembly and testing operators, QC inspectors and line leaders for phone and electronics plants in Sriperumbudur, Oragadam and Hosur. WhatsApp or call us.",
    h1: "Manpower for Mobile Phone Manufacturing in Sriperumbudur and Tamil Nadu",
    tamil: "மொபைல் போன் தொழிற்சாலைகளுக்கு பணியாளர்கள்",
    summary: "Lifeline Placements supplies operators and technicians to mobile phone assembly plants, component makers and EMS units in Tamil Nadu. We recruit assembly and testing operators, SMT machine operators, quality inspectors, rework technicians, line leaders and stores staff. Demand is concentrated around Sriperumbudur, Oragadam and Mahindra World City near Chennai, and in the Hosur and Krishnagiri belt. Operator batches can be mobilised within {{TURNAROUND}}. WhatsApp or call +91 99622 99076 with your batch size and joining date.",
    roles: [
      { group: "Assembly and testing", items: ["Assembly line operators", "Testing operators", "Packing operators"] },
      { group: "SMT and technical", items: ["SMT machine operators", "AOI and X-ray inspection operators", "Rework and soldering technicians"] },
      { group: "Quality", items: ["IPQC inspectors", "OQC inspectors"] },
      { group: "Line support", items: ["Line leaders", "Stores and material handlers", "Maintenance technicians"] }
    ],
    models: [
      { model: "Permanent placement", bestFor: "Line leaders, SMT technicians and quality inspectors who keep product knowledge across model changes.", example: "An EMS unit in Oragadam hiring two SMT technicians for a new line" },
      { model: "Contract staffing", bestFor: "Assembly and packing operators whose numbers rise and fall with model launches and export orders.", example: "A component maker near Sriperumbudur adding 40 operators before a new phone launch" },
      { model: "Bulk hiring", bestFor: "Plant start-ups and launch ramps that need hundreds of operators recruited, housed and trained in waves.", example: "A new assembly block in the Hosur belt onboarding operators in weekly batches of 100" }
    ],
    context: [
      "Tamil Nadu is one of India's main hubs for phone assembly. Foxconn's plant near Sriperumbudur and Tata Electronics' operations in the Hosur area are the most widely reported names, surrounded by component, charger and packaging suppliers in Sriperumbudur, Oragadam and Mahindra World City. These employers are named only as local context. Hiring here runs at very large scale, and a launch season can change headcount within weeks.",
      "Much of the operator workforce in this industry is young women, many from other districts, living in company or partner hostels. Plants usually ask for Class 12, ITI or diploma qualifications. Fine motor skill, good eyesight and patience for repetitive work matter more than experience. Every operator must follow ESD discipline: wrist straps, ESD-safe clothing and careful handling of boards and screens.",
      "Plants typically run shifts round the clock. Women operators can work at night only with written consent, safe transport and the safeguards the state sets under Section 43 of the OSH Code (as of Nov 2026). Hostel food, safety and transport in this sector have drawn public attention, and brand owners audit them. Contract operators also need PF and ESI enrolment from their first day."
    ],
    screening: [
      "Check age proof so every operator is at least 18",
      "Ask for a basic eye test and run a simple dexterity task",
      "Confirm Class 12, ITI or diploma certificates as the plant requires",
      "Explain hostel, food, transport and shift terms before travel",
      "Collect Aadhaar, bank and nominee details for PF and ESI from day one",
      "Check ESD awareness and prior SMT or cleanroom experience for technical roles"
    ],
    faqs: [
      { q: "How many operators can you supply for a launch ramp?", a: "Volume depends on lead time, location and whether your plant offers hostel accommodation. First batches arrive within {{TURNAROUND}}[[, and our capacity for a single order is {{CAPACITY}}]]. For ramps of several hundred people, we plan weekly batches matched to your induction capacity. Share the start date, shifts and eligibility rules, and we confirm a realistic plan." },
      { q: "Can women operators work night shifts?", a: "Yes, with conditions. Under Section 43 of the OSH Code, women may work before 6 am and after 7 pm only with their consent and subject to safety conditions the state sets, such as transport (as of Nov 2026). Collect written consent from each operator, and keep the transport and safety plan on record for inspections and audits." },
      { q: "Do you recruit operators from other districts?", a: "Yes. Phone plants near Chennai draw operators from across Tamil Nadu, and some also hire from other states. Out-of-district candidates need hostel space, clear travel arrangements and a joining date that will not slip. We brief each candidate on salary, deductions, food and hostel rules before they travel, so there are no surprises on arrival." },
      { q: "What documents do operators need at joining?", a: "Most plants ask for Aadhaar, the Class 10 or 12 marksheet, an ITI or diploma certificate if relevant, a bank passbook, photographs and nominee details for PF and ESI. Some also ask for a medical fitness certificate. We collect these before the joining day, so your HR induction is not held up by missing papers." },
      { q: "What is the fee for bulk operator hiring?", a: "Our bulk hiring charge is {{FEE}}. For market context, large contract staffing orders are usually priced as wages plus statutory costs plus a service charge, and published vendor ranges start around 5% and go to 15% or more. Large, steady orders tend to sit at the lower end. GST at 18% generally applies to the full invoice for manpower supply." }
    ],
    relatedIndustries: ["automobile", "manufacturing", "logistics-warehousing"],
    relatedCities: ["kanchipuram", "chengalpattu", "hosur", "krishnagiri"]
  }
];
