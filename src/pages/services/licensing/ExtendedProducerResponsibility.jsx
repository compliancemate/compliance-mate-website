import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Central Pollution Control Board / relevant authority",
  "overview": "Extended Producer Responsibility places specified end-of-life management obligations on covered entities under India's waste management frameworks. Plastic packaging, e-waste, batteries and other notified streams have distinct definitions, targets, registration and reporting requirements. Producers, importers, brand owners, recyclers and other entities may have different responsibilities depending on the stream. A compliance plan starts by identifying the correct role, products and quantities, not by buying credits without validating eligibility.",
  "audience": [
    "Plastic packaging producers, importers and brand owners",
    "Covered electrical and electronic equipment producers",
    "Battery producers, recyclers and refurbishers",
    "Entities in notified tyre, used oil or other applicable EPR streams"
  ],
  "documents": [
    "Entity registration details and authorized representative",
    "Product categories, brands and business role",
    "Sales, imports, production or processing quantities for relevant periods",
    "Existing EPR registrations and previous returns",
    "Waste management, recycling and certificate records where applicable",
    "Supporting facility permissions and transaction documents where required"
  ],
  "steps": [
    [
      "Map obligations by stream",
      "Identify the applicable rules, product categories, legal entity and role."
    ],
    [
      "Prepare a quantity baseline",
      "Organize relevant sales, imports, processing and historic data in an auditable format."
    ],
    [
      "Register and plan compliance",
      "Use the applicable official portal and determine reporting, target and eligible certificate requirements."
    ],
    [
      "Track records and returns",
      "Maintain supporting documentation and review target fulfilment and amendments on an ongoing basis."
    ]
  ],
  "support": [
    "EPR applicability and category assessment",
    "Registration and profile documentation support",
    "Target calculation and compliance planning",
    "Certificate due diligence, reconciliation and annual return guidance"
  ],
  "faqs": [
    [
      "Does one EPR registration cover every stream?",
      "No. Different product and waste frameworks have distinct requirements, even if the portal infrastructure is shared."
    ],
    [
      "Who generates EPR certificates?",
      "Eligible registered entities generate certificates under the relevant framework and portal conditions. Rules differ by stream."
    ],
    [
      "Can certificates replace all obligations?",
      "No. Reporting, registration, labeling or other conditions may still apply."
    ],
    [
      "How do I know my target?",
      "The applicable rules, entity role, product category and quantities determine the obligation. Review the current official framework."
    ]
  ],
  "note": "Portal procedures and deadlines can change. Verify current CPCB directions, eligibility and transaction rules before filing or purchasing certificates.",
  "sources": [
    [
      "Central Pollution Control Board",
      "https://cpcb.nic.in/"
    ],
    [
      "CPCB battery EPR portal",
      "https://eprbattery.cpcb.gov.in/"
    ],
    [
      "CPCB e-waste portal",
      "https://eprewaste.cpcb.gov.in/"
    ]
  ],
  "reference": "https://eprnexuss.com/services/extended-producer-responsibility"
};

export default function ExtendedProducerResponsibility() {
  return <LicensePageLayout slug="extended-producer-responsibility" content={content} />;
}
