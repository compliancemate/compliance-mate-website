import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Bureau of Indian Standards (BIS)",
  "overview": "The ISI Mark is commonly associated with BIS product certification under Scheme I. The historical Indian Standards Institution is now represented by BIS as the national standards body. Certification assesses conformity to the relevant Indian Standard, including product testing and manufacturing capability. It is voluntary for some products and mandatory for those covered by applicable Quality Control Orders or other requirements.",
  "audience": [
    "Domestic manufacturers of notified products",
    "Manufacturers seeking voluntary BIS certification",
    "Businesses introducing new product grades or sizes",
    "Facilities expanding the scope of an existing BIS licence"
  ],
  "documents": [
    "Product specifications and applicable Indian Standard",
    "Manufacturing unit details and process flow",
    "Equipment, testing facilities and calibration information",
    "Quality control plan and relevant test reports",
    "Product range and marking proposal",
    "Existing licences and scope details for amendments"
  ],
  "steps": [
    [
      "Identify product standard",
      "Review the current Indian Standard, certification scheme and mandatory coverage."
    ],
    [
      "Assess factory readiness",
      "Compare manufacturing and testing capability with applicable scheme requirements."
    ],
    [
      "Prepare testing and application",
      "Organize required records, testing arrangements and licence application."
    ],
    [
      "Support assessment and surveillance",
      "Prepare for factory assessment and ongoing quality control or licence obligations."
    ]
  ],
  "support": [
    "Applicable standard and QCO assessment",
    "Factory and quality documentation guidance",
    "BIS application and testing coordination",
    "Licence scope and surveillance readiness support"
  ],
  "faqs": [
    [
      "Is ISI certification mandatory for all goods?",
      "No. Check whether the product is covered by a mandatory order or a voluntary certification route."
    ],
    [
      "Can a trader use an ISI Mark without a licence?",
      "The mark may only be used in accordance with the relevant BIS licence and conditions."
    ],
    [
      "Is CRS the same as ISI marking?",
      "No. Scheme I product certification and Scheme II registration have different procedures."
    ],
    [
      "Does testing alone establish certification?",
      "No. A compliant test report is part of the applicable assessment; BIS grants the licence."
    ]
  ],
  "note": "Use the Standard Mark only after grant of the appropriate licence and within its authorized scope.",
  "sources": [
    [
      "BIS product certification overview",
      "https://www.bis.gov.in/product-certification/product-certification-overview/?lang=en"
    ],
    [
      "BIS application guidance",
      "https://www.bis.gov.in/apply-for-a-license/?lang=en"
    ]
  ],
  "reference": "https://eprnexuss.com/services/indian-standards-institute"
};

export default function IndianStandardsInstitute() {
  return <LicensePageLayout slug="indian-standards-institute" content={content} />;
}
