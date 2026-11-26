import LicensingArticleLayout from './LicensingArticleLayout';

export const article = {
  "slug": "consent-to-establish-cte-guide-india",
  "title": "Consent to Establish (CTE) in India: Documents, Process and Common Mistakes",
  "description": "Learn when a pollution control consent is needed, what documents to prepare and how to plan your industrial project before construction.",
  "service": "Consent to Establish (CTE)",
  "serviceSlug": "consent-to-establish",
  "icon": "factory",
  "readTime": "5 min read",
  "takeaways": [
    "Check consent applicability and site suitability before committing to construction.",
    "Prepare a consistent process description, site layout and pollution-control plan.",
    "CTE does not automatically permit commercial operation."
  ],
  "sections": [
    {
      "title": "What is Consent to Establish?",
      "paragraphs": [
        "Consent to Establish, commonly called CTE, is an environmental consent for applicable industrial projects before establishment. It is administered by the relevant State Pollution Control Board (SPCB) or Pollution Control Committee (PCC) under the applicable Water and Air Acts. The consent mechanism examines proposed activities and pollution-control arrangements.",
        "For an entrepreneur planning a CBG facility, recycling plant or manufacturing unit, this is an early planning milestone. Not every activity requires the same consent: check current exemptions and the classification of your actual process."
      ]
    },
    {
      "title": "Check your site before investing",
      "paragraphs": [
        "A suitable site is more than a plot with enough space. Before finalising a lease, examine whether the proposed activity is permitted at the location, whether necessary utilities are available and whether the project can meet applicable siting requirements. A machinery quotation alone cannot establish that the site is suitable."
      ],
      "items": [
        "Permitted land use and site ownership or lease documents.",
        "Distance and siting restrictions applicable to the specific project.",
        "Water source, wastewater management and power availability.",
        "Whether environmental clearance or other approvals are separately required."
      ]
    },
    {
      "title": "Documents to prepare",
      "paragraphs": [
        "Make a single project information sheet and use it consistently throughout your application. The exact document list is specified by the responsible authority."
      ],
      "items": [
        "Company registration, applicant details and authorization.",
        "Land papers, location plan and proposed plant layout.",
        "Project report, process flow, capacity and raw material details.",
        "Water balance, wastewater treatment and proposed air pollution controls.",
        "Waste generation estimates, handling plan and investment details for applicable fees."
      ]
    },
    {
      "title": "How to apply for CTE",
      "paragraphs": [
        "Identify the responsible board and its current application channel. Complete the application for your actual manufacturing or processing activity, upload supporting records and pay the prescribed fee. Respond to clarification requests and facilitate any required inspection. If granted, read the consent conditions before proceeding.",
        "Track every condition that affects the engineering design. If you later change capacity, product, site or process, assess whether a new or amended consent is needed before making the change."
      ]
    },
    {
      "title": "Avoid common application delays",
      "paragraphs": [
        "Typical preventable problems include inconsistent capacity figures, incomplete land documents, vague process descriptions and pollution-control plans that do not match the machinery. Have the project engineer and compliance team review the same technical data before submission.",
        "Approval timelines and fees depend on the applicable rules and project facts. Do not order equipment or begin regulated construction solely on the assumption that approval is certain."
      ]
    },
    {
      "title": "What happens after CTE?",
      "paragraphs": [
        "Keep a record of approved plans, consent conditions and any changes made during implementation. Install the required pollution-control infrastructure and prepare for Consent to Operate where applicable. Compliance Mate can assist with the technical documentation and application coordination at each stage."
      ]
    }
  ],
  "faqs": [
    [
      "Is CTE required for every business?",
      "No. Applicability depends on the activity, current exemptions, jurisdiction and relevant rules. Confirm your classification before applying."
    ],
    [
      "Can I apply before buying machinery?",
      "You can often prepare the application using proposed equipment and design details, subject to the authority’s requirements. Keep all assumptions consistent."
    ],
    [
      "Does CTE allow me to start production?",
      "It is not a substitute for the operational consent or other permissions that may be required."
    ],
    [
      "How much does CTE cost?",
      "The statutory fee and consultancy scope depend on the jurisdiction and project. Check the relevant authority’s current fee schedule."
    ]
  ],
  "sources": [
    [
      "PIB: updates to the uniform consent guidelines",
      "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2219415&lang=2&reg=48"
    ],
    [
      "PIB: consent framework and UCAMS",
      "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2307658&lang=1&reg=48"
    ]
  ],
  "related": [
    [
      "Consent to Operate (CTO) guide",
      "consent-to-operate-cto-guide-india"
    ],
    [
      "Hazardous Waste Authorization guide",
      "hazardous-waste-authorization-guide-india"
    ],
    [
      "Extended Producer Responsibility (EPR) guide",
      "epr-registration-india-guide"
    ]
  ]
};

export default function LicensingBlog() {
  return <LicensingArticleLayout article={article} />;
}
