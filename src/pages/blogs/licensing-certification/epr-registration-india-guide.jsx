import LicensingArticleLayout from './LicensingArticleLayout';

export const article = {
  "slug": "epr-registration-india-guide",
  "title": "EPR Registration in India: A Beginner’s Guide for Producers, Importers and Recyclers",
  "description": "Understand Extended Producer Responsibility, registration, recycling certificates and ongoing compliance across regulated waste streams.",
  "service": "Extended Producer Responsibility (EPR)",
  "serviceSlug": "extended-producer-responsibility",
  "icon": "leaf",
  "readTime": "5 min read",
  "takeaways": [
    "Identify the relevant waste stream and your legal role before registering.",
    "EPR registration is only the beginning of ongoing compliance.",
    "Verify certificate eligibility, supporting records and portal transactions."
  ],
  "sections": [
    {
      "title": "What does EPR mean?",
      "paragraphs": [
        "Extended Producer Responsibility (EPR) assigns specified end-of-life management responsibilities to regulated businesses under applicable waste rules. In India, different EPR frameworks cover waste streams such as plastic packaging, electronic waste, batteries, waste tyres and used oil.",
        "The obligations are not interchangeable. A company selling packaged products, a battery importer and a recycling facility may each have different duties. Begin with the legal role and product category rather than assuming a single registration covers every activity."
      ]
    },
    {
      "title": "Who should assess EPR applicability?",
      "paragraphs": [
        "Businesses introducing regulated products or packaging into the Indian market should review their obligations. Waste processors and recyclers should also check whether their activities require registration under the relevant framework."
      ],
      "items": [
        "Producers, importers and brand owners in applicable plastic packaging categories.",
        "Producers and other covered entities in electronic and battery waste frameworks.",
        "Entities covered by waste tyre or used oil EPR requirements.",
        "Recyclers and other eligible processors seeking recognized registration."
      ]
    },
    {
      "title": "What information is needed?",
      "paragraphs": [
        "Prepare reliable business and transaction records before registering. The current portal and waste-specific rules determine the exact fields and evidence required."
      ],
      "items": [
        "Entity identification, PAN, GST and authorized representative details, as applicable.",
        "Product or packaging categories, quantities, sales and import information.",
        "Facility and environmental approvals for waste processors, where required.",
        "Production, processing and material movement records relevant to the activity."
      ]
    },
    {
      "title": "How does EPR registration work?",
      "paragraphs": [
        "Identify the applicable rules and regulator, access the official portal and choose the correct registration role. Complete the requested disclosures, upload documents and respond to verification or clarification requests. Check current portal migration notices before creating a duplicate account.",
        "Once registered, identify applicable targets, reporting periods and responsibilities. Set up a recordkeeping process that reconciles regulatory submissions with business records."
      ]
    },
    {
      "title": "How do EPR certificates work?",
      "paragraphs": [
        "Depending on the waste stream, registered eligible recyclers or processors may generate certificates through the relevant portal based on qualifying processing activities and required evidence. Obligated entities may use eligible certificates according to the applicable rules and portal mechanisms.",
        "A certificate must match the relevant category, eligibility conditions and compliance period. Check the seller’s registration, certificate availability and supporting records before agreeing to a transaction. Do not assume that a private invoice alone fulfils an EPR obligation."
      ]
    },
    {
      "title": "Maintain compliance after registration",
      "paragraphs": [
        "Create a calendar for applicable returns, target assessment and documentation reviews. Reconcile quantities and certificates with invoices and actual transactions, and preserve supporting evidence for audits. Monitor regulatory and portal updates, since obligations and procedures can change. Compliance Mate can assist with registration, documentation and ongoing compliance coordination."
      ]
    }
  ],
  "faqs": [
    [
      "Is one EPR registration valid for all waste types?",
      "No. Assess the applicable waste-specific framework and registration role."
    ],
    [
      "Does EPR registration replace CTE or CTO?",
      "No. Environmental consent and EPR registration address different obligations."
    ],
    [
      "Can any recycler issue EPR certificates?",
      "Only eligible, registered entities meeting the relevant scheme and portal requirements can generate recognized certificates."
    ],
    [
      "Do I need to file annual returns?",
      "Reporting duties depend on the waste-specific rules and your entity role. Check the current portal and applicable requirements."
    ]
  ],
  "sources": [
    [
      "PIB: circular economy and operational EPR portals",
      "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2244104&lang=2&reg=3"
    ],
    [
      "CPCB: plastic packaging EPR portal",
      "https://eprplastic.cpcb.gov.in/"
    ],
    [
      "CPCB: waste tyre EPR portal",
      "https://eprtyres.cpcb.gov.in/"
    ]
  ],
  "related": [
    [
      "Consent to Establish (CTE) guide",
      "consent-to-establish-cte-guide-india"
    ],
    [
      "Consent to Operate (CTO) guide",
      "consent-to-operate-cto-guide-india"
    ],
    [
      "Hazardous Waste Authorization guide",
      "hazardous-waste-authorization-guide-india"
    ]
  ]
};

export default function LicensingBlog() {
  return <LicensingArticleLayout article={article} />;
}
