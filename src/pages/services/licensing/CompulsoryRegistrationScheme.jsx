import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Bureau of Indian Standards (BIS)",
  "overview": "The BIS Compulsory Registration Scheme, generally associated with Scheme II, applies to notified products subject to the relevant orders and Indian Standards. Covered manufacturers establish product conformity through the prescribed testing and registration process. Product category, model family, manufacturing location and brand details must be reviewed carefully because a registration is not a blanket approval for all products or factories.",
  "audience": [
    "Manufacturers of notified electronics and IT goods",
    "Foreign manufacturers of products covered under CRS",
    "Brands introducing new models",
    "Businesses checking applicable standards before market launch"
  ],
  "documents": [
    "Product specifications, model list and brand details",
    "Manufacturing location and legal entity documents",
    "Applicable Indian Standard and product category assessment",
    "Prescribed test reports from eligible laboratories",
    "Label and registration marking details",
    "Authorized Indian Representative documents for foreign applicants where required"
  ],
  "steps": [
    [
      "Confirm product coverage",
      "Identify the applicable notification, Indian Standard and model grouping rules."
    ],
    [
      "Coordinate testing",
      "Prepare technical samples and documents for eligible laboratory testing."
    ],
    [
      "Prepare BIS registration",
      "Organize reports, manufacturing and brand details and applicable declarations."
    ],
    [
      "Manage registration scope",
      "Review permitted models, marking and updates when products or manufacturing details change."
    ]
  ],
  "support": [
    "Product and standard applicability review",
    "Testing coordination and technical documentation",
    "CRS application assistance",
    "Model inclusion and renewal or change support where applicable"
  ],
  "faqs": [
    [
      "Does every electronic product require CRS?",
      "No. Check the currently notified product list and applicable Indian Standard."
    ],
    [
      "Can an importer obtain registration instead of a manufacturer?",
      "The applicant and manufacturing premises must meet the scheme requirements. Foreign manufacturers may need an Indian representative."
    ],
    [
      "Is a CE mark sufficient for India?",
      "No. Foreign conformity markings do not automatically replace an applicable Indian mandatory certification."
    ],
    [
      "Can I add models later?",
      "Model inclusion may be possible subject to scheme rules and supporting testing or documentation."
    ]
  ],
  "note": "Confirm current BIS notified lists, implementation dates and standards before manufacturing, importing or selling covered products.",
  "sources": [
    [
      "BIS Scheme II registration product list",
      "https://www.bis.gov.in/product-certification/products-under-compulsory-certification/scheme-ii-registration-scheme/?lang=en"
    ],
    [
      "BIS official website",
      "https://www.bis.gov.in/?lang=en"
    ]
  ],
  "reference": "https://eprnexuss.com/services/complusory-registration-scheme"
};

export default function CompulsoryRegistrationScheme() {
  return <LicensePageLayout slug="compulsory-registration-scheme" content={content} />;
}
