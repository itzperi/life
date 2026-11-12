# JSON-LD schema blocks

Extracted from the built pages on 2026-11-12. Every page carries the EmploymentAgency node and a WebPage node with a speakable selector; page types add BreadcrumbList, Service, FAQPage, HowTo, ItemList, Article, Person, AboutPage or ContactPage. FAQPage includes only questions whose answers contain no unconfirmed facts. No Review or AggregateRating markup is used.

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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%2C%20Nelson%20Towers%2C%20Nelson%20Manickam%20Road%2C%20Aminjikarai%2C%20Chennai%20600029",
      "areaServed": [
        {
          "@type": "State",
          "name": "Tamil Nadu",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@type": "City",
          "name": "Chennai"
        },
        {
          "@type": "City",
          "name": "Kanchipuram"
        },
        {
          "@type": "City",
          "name": "Chengalpattu"
        },
        {
          "@type": "City",
          "name": "Tiruvallur"
        },
        {
          "@type": "City",
          "name": "Coimbatore"
        },
        {
          "@type": "City",
          "name": "Tiruppur"
        },
        {
          "@type": "City",
          "name": "Erode"
        },
        {
          "@type": "City",
          "name": "Salem"
        },
        {
          "@type": "City",
          "name": "Namakkal"
        },
        {
          "@type": "City",
          "name": "Karur"
        },
        {
          "@type": "City",
          "name": "Madurai"
        },
        {
          "@type": "City",
          "name": "Dindigul"
        },
        {
          "@type": "City",
          "name": "Tiruchirappalli"
        },
        {
          "@type": "City",
          "name": "Thanjavur"
        },
        {
          "@type": "City",
          "name": "Tirunelveli"
        },
        {
          "@type": "City",
          "name": "Nagercoil"
        },
        {
          "@type": "City",
          "name": "Thoothukudi"
        },
        {
          "@type": "City",
          "name": "Vellore"
        },
        {
          "@type": "City",
          "name": "Hosur"
        },
        {
          "@type": "City",
          "name": "Krishnagiri"
        }
      ],
      "description": "Lifeline Placements is a Chennai-based manpower supply and recruitment agency. It supplies staff to employers across Tamil Nadu through permanent placement, contract staffing and bulk hiring.",
      "founder": {
        "@id": "https://www.lifelineplacements.com/about/#founder"
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
      "knowsLanguage": [
        "en",
        "ta"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+919962299076",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": [
            "English",
            "Tamil"
          ]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+919962299076",
          "contactType": "customer service",
          "url": "https://wa.me/919962299076",
          "areaServed": "IN",
          "availableLanguage": [
            "English",
            "Tamil"
          ]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Staffing services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Permanent placement",
              "url": "https://www.lifelineplacements.com/services/permanent-placement/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Contract staffing",
              "url": "https://www.lifelineplacements.com/services/contract-staffing/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bulk hiring",
              "url": "https://www.lifelineplacements.com/services/bulk-hiring/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Payroll outsourcing",
              "url": "https://www.lifelineplacements.com/services/payroll-outsourcing/"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lifelineplacements.com/#website",
      "url": "https://www.lifelineplacements.com/",
      "name": "Lifeline Placements",
      "alternateName": "Life Line Placements",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.lifelineplacements.com/#org"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.lifelineplacements.com/#webpage",
      "url": "https://www.lifelineplacements.com/",
      "name": "Manpower Agency in Tamil Nadu | Lifeline Placements",
      "description": "Lifeline Placements supplies factory, BPO, office, housekeeping, hospital and retail staff to employers across Tamil Nadu. WhatsApp +91 99622 99076 today.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.lifelineplacements.com/#website"
      },
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "dateModified": "2026-11-12",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/og-default.png"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".summary"
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a manpower agency charge in Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For permanent placement, published market rates run from about 8.33% to 16.67% of the hire's annual CTC. For contract staffing, agencies add a monthly service charge to wages, PF and ESI, plus 18% GST. Rates depend on role, volume and duration. Lifeline Placements' fee is quoted in writing for each requirement before you commit. WhatsApp your role for a written quote."
          }
        },
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
          "name": "Do you do bulk hiring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lifeline Placements handles bulk hiring for factories, warehouses, BPOs and retail chains across Tamil Nadu, from our Chennai office. Tell us the roles, headcount per shift, wage and joining date. Our bulk hiring checklist explains what to prepare before the drive starts."
          }
        },
        {
          "@type": "Question",
          "name": "What is the replacement guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a placed person leaves or does not work out within the agreed window, the agency finds a replacement. Market practice in India ranges from 30 to 90 days for permanent placement. For contract staff, replacement continues for the life of the contract. Lifeline Placements' replacement terms are set out in writing with every quote."
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
    },
    {
      "@type": "HowTo",
      "@id": "https://www.lifelineplacements.com/#howto",
      "name": "How to hire staff through Lifeline Placements",
      "totalTime": "P7D",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Send the requirement",
          "text": "WhatsApp or call +91 99622 99076 with the role, how many people, the location and the date you need them."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Get a written quote",
          "text": "We confirm wages, shifts, the hiring model and our charges in writing. Turnaround: 48 hours for helpers and 7 days for skilled roles."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Interview shortlisted people",
          "text": "We screen candidates against your checklist and send profiles. You interview and select."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Joining and follow-up",
          "text": "We coordinate documents and joining day. Replacement terms if someone leaves: set out in writing with every quote."
        }
      ]
    }
  ]
}
```

## /services/contract-staffing/

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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%2C%20Nelson%20Towers%2C%20Nelson%20Manickam%20Road%2C%20Aminjikarai%2C%20Chennai%20600029",
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
      "@type": "WebPage",
      "@id": "https://www.lifelineplacements.com/services/contract-staffing/#webpage",
      "url": "https://www.lifelineplacements.com/services/contract-staffing/",
      "name": "Contract Staffing Services in Tamil Nadu | Lifeline",
      "description": "Contract workers on our payroll for factories, warehouses, hospitals and offices in Tamil Nadu. We handle wages, PF, ESI and replacements. WhatsApp us today.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.lifelineplacements.com/#website"
      },
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "dateModified": "2026-11-12",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/og-default.png"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".summary"
        ]
      },
      "breadcrumb": {
        "@id": "https://www.lifelineplacements.com/services/contract-staffing/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lifelineplacements.com/services/contract-staffing/#breadcrumb",
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
          "name": "Services",
          "item": "https://www.lifelineplacements.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contract staffing",
          "item": "https://www.lifelineplacements.com/services/contract-staffing/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lifelineplacements.com/services/contract-staffing/#service",
      "name": "Contract staffing",
      "serviceType": "Contract staffing",
      "description": "Contract staffing means the workers you need stay on the Lifeline Placements payroll while they work at your site under your supervision. We pay wages, PF and ESI, keep attendance and wage records, and send you one monthly invoice. If someone leaves or stays absent, we send a replacement. It suits helpers, operators, packers, housekeeping, warehouse and front-office roles. First batches can be ready within 48 hours for helpers and 7 days for skilled roles.",
      "provider": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Employers in Tamil Nadu"
      },
      "url": "https://www.lifelineplacements.com/services/contract-staffing/",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://wa.me/919962299076",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+919962299076"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is contract staffing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contract staffing is a manpower supply model where the agency employs the workers and deploys them at the client's site. The agency pays wages, PF and ESI and bills the client monthly, while the client directs the daily work. Lifeline Placements supplies contract staff to employers across Tamil Nadu."
          }
        },
        {
          "@type": "Question",
          "name": "Who pays PF and ESI for contract workers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In contract staffing, Lifeline Placements pays the PF and ESI contributions for workers on its payroll and shows them on the monthly invoice. As principal employer you should still ask for the challans every month, because the law can hold you responsible if the contractor does not pay."
          }
        },
        {
          "@type": "Question",
          "name": "Can contract workers become permanent later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many employers use contract staffing as a trial and later move good workers onto their own payroll. Conversion terms are agreed in writing before the worker starts, so there are no surprises. Tell us at the start if you expect to convert people after a set period."
          }
        },
        {
          "@type": "Question",
          "name": "Does a manpower contractor need a licence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the OSH Code, which took effect on 21 Nov 2025, a contractor deploying 50 or more contract workers needs a contract labour licence (as of Nov 2026). Ask any agency for its licence and its PF and ESI registration numbers before you sign, and check that monthly challans match the headcount."
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%2C%20Nelson%20Towers%2C%20Nelson%20Manickam%20Road%2C%20Aminjikarai%2C%20Chennai%20600029",
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
      "@type": "WebPage",
      "@id": "https://www.lifelineplacements.com/industries/pharma/#webpage",
      "url": "https://www.lifelineplacements.com/industries/pharma/",
      "name": "Pharma Manpower Consultancy in Tamil Nadu | Lifeline",
      "description": "Production chemists, QC analysts, packing staff and pharmacists for pharma units at Alathur, Gummidipoondi and Chennai distributors. WhatsApp or call us today.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.lifelineplacements.com/#website"
      },
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "dateModified": "2026-11-12",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/og-default.png"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".summary"
        ]
      },
      "breadcrumb": {
        "@id": "https://www.lifelineplacements.com/industries/pharma/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lifelineplacements.com/industries/pharma/#breadcrumb",
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
      "url": "https://www.lifelineplacements.com/industries/pharma/",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pharma roles",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Production chemists (B.Sc, M.Sc) supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Granulation, compression and coating operators supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Production helpers supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QC chemists and analysts (HPLC, GC) supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QA and IPQA executives supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Microbiologists supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Packing line operators supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Warehouse assistants supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Registered pharmacists for stores and distribution supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boiler and utility operators supply"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "HVAC and maintenance technicians supply"
            }
          }
        ]
      }
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
          "name": "What fee do you charge for pharma hiring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pharma hiring fee is quoted in writing for each requirement before you commit. For context only, permanent placement fees in the Indian market typically run from one to two months of the hire's annual pay, that is 8.33% to 16.67%, and specialist QA or regulatory roles sit toward the upper end. Contract staff are billed as wages plus statutory costs plus a service charge, with 18% GST, generally on the full invoice."
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%2C%20Nelson%20Towers%2C%20Nelson%20Manickam%20Road%2C%20Aminjikarai%2C%20Chennai%20600029",
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
      "@type": "WebPage",
      "@id": "https://www.lifelineplacements.com/cities/kanchipuram/#webpage",
      "url": "https://www.lifelineplacements.com/cities/kanchipuram/",
      "name": "Manpower Supply in Sriperumbudur and Oragadam | Lifeline",
      "description": "Operators, assemblers, quality and stores staff for plants in Sriperumbudur, Irungattukottai and Oragadam, sent from Chennai; WhatsApp or call +91 99622 99076.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.lifelineplacements.com/#website"
      },
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "dateModified": "2026-11-12",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/og-default.png"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".summary"
        ]
      },
      "breadcrumb": {
        "@id": "https://www.lifelineplacements.com/cities/kanchipuram/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lifelineplacements.com/cities/kanchipuram/#breadcrumb",
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
        },
        {
          "@type": "Question",
          "name": "Can you provide women assembly operators for electronics plants in Sriperumbudur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recruit women for assembly, testing and packing lines. Hostel availability matters, so tell us whether the plant offers a hostel or transport and what the shift pattern is. We pass that on clearly to candidates before they join, which helps reduce early dropouts."
          }
        },
        {
          "@type": "Question",
          "name": "Do contract workers for Oragadam plants come with PF and ESI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, under contract staffing, workers are on our payroll, and we handle their PF and ESI contributions, wage slips and attendance records while they work at your plant. Our service charge for contract staffing is quoted in writing for each requirement before you commit, plus GST."
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%2C%20Nelson%20Towers%2C%20Nelson%20Manickam%20Road%2C%20Aminjikarai%2C%20Chennai%20600029",
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
      "@type": "WebPage",
      "@id": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/#webpage",
      "url": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/",
      "name": "Cost of Contract Staffing in Tamil Nadu: 2026 Breakdown",
      "description": "What a contract worker really costs in Tamil Nadu: wages, PF, ESI, bonus, gratuity, service charge and GST, with a worked example. WhatsApp us for a quote.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.lifelineplacements.com/#website"
      },
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "dateModified": "2026-11-12",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/og-default.png"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".summary"
        ]
      },
      "breadcrumb": {
        "@id": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/#breadcrumb",
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
      "reviewedBy": {
        "@id": "https://www.lifelineplacements.com/about/#founder"
      },
      "publisher": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "mainEntityOfPage": "https://www.lifelineplacements.com/guides/staffing-cost-tamil-nadu/",
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "inLanguage": "en-IN",
      "about": {
        "@type": "Thing",
        "name": "manpower cost tamil nadu"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a manpower agency charge in Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For permanent placement, published market rates run from about 8.33% to 16.67% of the hire's annual CTC. For contract staffing, agencies add a monthly service charge on top of wages and statutory dues, plus 18% GST. Rates depend on role, volume and duration. Lifeline Placements' fee: quoted in writing for each requirement before you commit. Send your role on WhatsApp for a written quote."
          }
        },
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.lifelineplacements.com/assets/og-default.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "4th Floor, Nelson Towers, A Wing, No. 51/117, Nelson Manickam Road, Aminjikarai",
        "postalCode": "600029"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Life%20Line%20Placements%2C%20Nelson%20Towers%2C%20Nelson%20Manickam%20Road%2C%20Aminjikarai%2C%20Chennai%20600029",
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
      "@type": "AboutPage",
      "@id": "https://www.lifelineplacements.com/about/#webpage",
      "url": "https://www.lifelineplacements.com/about/",
      "name": "About Lifeline Placements | Manpower Agency in Chennai",
      "description": "Who we are: Lifeline Placements, a manpower supply and recruitment agency in Aminjikarai, Chennai, serving employers across Tamil Nadu. Call +91 99622 99076.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.lifelineplacements.com/#website"
      },
      "about": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "dateModified": "2026-11-12",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.lifelineplacements.com/assets/og-default.png"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".summary"
        ]
      },
      "breadcrumb": {
        "@id": "https://www.lifelineplacements.com/about/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lifelineplacements.com/about/#breadcrumb",
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
      "@type": "Person",
      "@id": "https://www.lifelineplacements.com/about/#founder",
      "name": "V. Arun Kumar",
      "jobTitle": "Head of Lifeline Placements",
      "worksFor": {
        "@id": "https://www.lifelineplacements.com/#org"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "B.Sc"
      },
      "knowsAbout": [
        "Recruitment",
        "Contract staffing",
        "Manpower supply in Tamil Nadu"
      ]
    }
  ]
}
```
