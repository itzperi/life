# JSON-LD schema blocks

Extracted from the built pages on 2026-11-12. Every page carries the EmploymentAgency node; page types add BreadcrumbList, Service, FAQPage, Article, AboutPage or ContactPage. FAQPage includes only questions whose answers contain no unconfirmed facts, so it grows automatically as the owner confirms facts. No Review or AggregateRating markup is used.

Validate after launch with https://validator.schema.org and https://search.google.com/test/rich-results.

## /

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.lifelineplacements.com/#org",
      "name": "Lifeline Placements",
      "alternateName": "Life Line Placements",
      "url": "https://www.lifelineplacements.com/",
      "telephone": "+919962299076",
      "email": "lifelineplacements@gmail.com",
      "logo": "https://www.lifelineplacements.com/assets/logo-512.png",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      },
      "description": "Lifeline Placements is a Chennai-based manpower supply and recruitment agency. It supplies staff to employers across Tamil Nadu through permanent placement, contract staffing and bulk hiring.",
      "founder": {
        "@type": "Person",
        "name": "V. Arun Kumar"
      },
      "knowsAbout": [
        "IT companies",
        "BPO & call centres",
        "Office staff",
        "Manufacturing",
        "Automobile",
        "Pharma",
        "Textile & garments",
        "Retail & showrooms",
        "Spas & salons",
        "Hospitals & clinics",
        "Hostels & service apartments",
        "E-commerce",
        "Logistics & warehousing",
        "Mobile phone manufacturing"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919962299076",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Tamil"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lifelineplacements.com/#website",
      "url": "https://www.lifelineplacements.com/",
      "name": "Lifeline Placements",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.lifelineplacements.com/#org"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast can Lifeline Placements supply staff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Speed depends on the role, the location and the wage offered. Helpers and housekeeping staff near Chennai usually close faster than skilled operators or nurses in smaller towns. Our turnaround: 48 hours for helpers and 7 days for skilled roles. Send the role, headcount, location and joining date on WhatsApp and we will give you a date in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Contract staffing or permanent placement: which is better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contract staffing suits seasonal peaks, projects and roles where volume is uncertain; the worker stays on the agency payroll and you pay monthly. Permanent placement suits long-term and skilled roles; the worker joins your payroll and you pay the agency once. Many employers use both. Our comparison guide sets out costs and rules."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need to hire through an agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For contract staffing you sign a service agreement and share your work-order details. If the contractor has 50 or more contract workers, it needs a licence under the OSH Code, and you may have principal-employer duties. Workers bring identity, address, bank and education documents. We send a checklist with every quote."
          }
        },
        {
          "@type": "Question",
          "name": "Which agency supplies housekeeping, security, BPO and factory staff in Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lifeline Placements supplies housekeeping, BPO and call-centre, office and factory staff to employers in Chennai and across Tamil Nadu. Security guards are different: only agencies holding a PSARA licence may supply them, so ask any agency for that licence. WhatsApp +91 99622 99076 with your requirement."
          }
        }
      ]
    }
  ]
}
```

## /industries/pharma/

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.lifelineplacements.com/#org",
      "name": "Lifeline Placements",
      "alternateName": "Life Line Placements",
      "url": "https://www.lifelineplacements.com/",
      "telephone": "+919962299076",
      "email": "lifelineplacements@gmail.com",
      "logo": "https://www.lifelineplacements.com/assets/logo-512.png",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lifelineplacements.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://www.lifelineplacements.com/industries/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pharma",
          "item": "https://www.lifelineplacements.com/industries/pharma/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lifelineplacements.com/industries/pharma/#service",
      "name": "Pharma Manpower Supply in Chennai and Tamil Nadu",
      "serviceType": "Manpower supply and recruitment",
      "description": "Lifeline Placements supplies staff to pharmaceutical manufacturers, API units, formulation plants and pharma distributors in Tamil Nadu. We fill production chemists and operators, QC and QA executives, packing line staff, warehouse assistants and registered pharmacists. Demand comes from the SIDCO pharma estate at Alathur near Thiruporur, from Gummidipoondi in Tiruvallur district, and from distributors and stockists across Chennai. Profiles can be shared within 48 hours for helpers and 7 days for skilled roles. WhatsApp or call +91 99622 99076 to discuss your vacancy.",
      "provider": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Pharma employers"
      },
      "url": "https://www.lifelineplacements.com/industries/pharma/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you check pharmacist registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For any role that needs a registered pharmacist, we ask for the Tamil Nadu Pharmacy Council registration certificate and check that the renewal is current. Wholesale and retail drug licences depend on a qualified person being present, so a lapsed registration can put your licence at risk. A copy of the certificate goes with the profile."
          }
        },
        {
          "@type": "Question",
          "name": "Can you find QC analysts with regulatory audit experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can search for them, though they are scarce and take longer to find than packing or production staff. Analysts who have faced USFDA, WHO-GMP or EU audits get frequent offers, so expect counter-offers. We test claims about instruments and audits in the screening call. Shortlist timing for standard roles is 48 hours for helpers and 7 days for skilled roles."
          }
        },
        {
          "@type": "Question",
          "name": "Can contract staff work in GMP areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if they are trained and documented like your own staff. Auditors look at training records, not employment type. Contract packing and stores staff need induction on GMP, hygiene and gowning before they enter a controlled area. We send candidates with basic awareness, and your QA team completes the site-specific training and sign-off."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do you collect before a pharma joining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We collect educational certificates, Pharmacy Council registration where relevant, the last three payslips, relieving letters, Aadhaar, PAN and bank details. For contract staff we also take nominee details for PF and ESI. Originals are seen at the interview, and your HR keeps copies under your own document control procedure."
          }
        }
      ]
    }
  ]
}
```

## /cities/kanchipuram/

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.lifelineplacements.com/#org",
      "name": "Lifeline Placements",
      "alternateName": "Life Line Placements",
      "url": "https://www.lifelineplacements.com/",
      "telephone": "+919962299076",
      "email": "lifelineplacements@gmail.com",
      "logo": "https://www.lifelineplacements.com/assets/logo-512.png",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lifelineplacements.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cities",
          "item": "https://www.lifelineplacements.com/cities/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kanchipuram",
          "item": "https://www.lifelineplacements.com/cities/kanchipuram/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lifelineplacements.com/cities/kanchipuram/#service",
      "name": "Manpower Supply and Recruitment in Kanchipuram District",
      "serviceType": "Manpower supply and recruitment",
      "description": "Lifeline Placements supplies workers to plants in Sriperumbudur, Irungattukottai and Oragadam, and to employers in Kanchipuram town. Typical orders are machine operators, assembly line workers, quality inspectors, stores staff and housekeeping crews for car, two-wheeler, tyre and electronics factories. We work from our Chennai office in Aminjikarai, about an hour's drive from the SIPCOT estates, and can fill openings within 48 hours for helpers and 7 days for skilled roles. Plant HR teams in the Sriperumbudur belt can WhatsApp or call +91 99622 99076.",
      "provider": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "areaServed": {
        "@type": "City",
        "name": "Kanchipuram",
        "containedInPlace": {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      },
      "url": "https://www.lifelineplacements.com/cities/kanchipuram/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you supply staff to Oragadam and Sriperumbudur from Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we serve the Sriperumbudur, Irungattukottai and Oragadam estates from our Chennai office in Aminjikarai, which is about an hour away by road. Candidates travel to the plant for interviews or join directly on the company bus route. For common roles in Kanchipuram, profiles can be shared within 48 hours for helpers and 7 days for skilled roles."
          }
        }
      ]
    }
  ]
}
```

## /guides/staffing-cost-tamil-nadu/

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.lifelineplacements.com/#org",
      "name": "Lifeline Placements",
      "alternateName": "Life Line Placements",
      "url": "https://www.lifelineplacements.com/",
      "telephone": "+919962299076",
      "email": "lifelineplacements@gmail.com",
      "logo": "https://www.lifelineplacements.com/assets/logo-512.png",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lifelineplacements.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Guides",
          "item": "https://www.lifelineplacements.com/guides/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Much Does Contract Staffing Cost in Tamil Nadu? (2026)",
          "item": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/#article",
      "headline": "How Much Does Contract Staffing Cost in Tamil Nadu? (2026)",
      "description": "What a contract worker really costs in Tamil Nadu: wages, PF, ESI, bonus, gratuity, service charge and GST, with a worked example. WhatsApp us for a quote.",
      "datePublished": "2026-11-12",
      "dateModified": "2026-11-12",
      "author": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "publisher": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "mainEntityOfPage": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "inLanguage": "en-IN"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is GST charged on the full invoice or only the service charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For manpower supply, GST at 18% is generally charged on the full value billed, including the wages reimbursed, not only on the agency's service charge. Most registered businesses can claim input tax credit on it. Confirm the treatment for your business with your GST adviser before you compare quotes."
          }
        },
        {
          "@type": "Question",
          "name": "Do contract workers get PF and ESI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. PF and ESI apply to contract workers just as to direct employees, subject to the wage limits. The agency, as the employer, deducts the employee share, adds the employer share and deposits both. As principal employer, you should check monthly challans, because unpaid dues can become your liability."
          }
        }
      ]
    }
  ]
}
```

## /about/

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.lifelineplacements.com/#org",
      "name": "Lifeline Placements",
      "alternateName": "Life Line Placements",
      "url": "https://www.lifelineplacements.com/",
      "telephone": "+919962299076",
      "email": "lifelineplacements@gmail.com",
      "logo": "https://www.lifelineplacements.com/assets/logo-512.png",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lifelineplacements.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.lifelineplacements.com/about/"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.lifelineplacements.com/about/#page",
      "url": "https://www.lifelineplacements.com/about/",
      "name": "About Lifeline Placements",
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      }
    }
  ]
}
```
