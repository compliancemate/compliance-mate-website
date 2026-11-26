import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Bureau of Indian Standards (BIS)",
  "overview": "FMCS is a BIS route through which foreign manufacturers may obtain a licence to use the applicable Standard Mark for conforming products manufactured at identified premises. The assessment involves the relevant Indian Standard, factory and quality capabilities, testing and scheme-specific obligations. Products under a separate registration scheme, including notified electronics covered by CRS, should follow their applicable route rather than automatically applying through FMCS.",
  "audience": [
    "Overseas factories supplying products to India",
    "Foreign manufacturers covered by Indian Quality Control Orders",
    "Indian importers coordinating certification with their overseas suppliers",
    "Existing foreign licensees seeking scope changes"
  ],
  "documents": [
    "Foreign company and manufacturing premises documents",
    "Product specifications, Indian Standard and proposed scope",
    "Manufacturing process, equipment and quality control records",
    "Testing capability and laboratory information",
    "Authorized Indian Representative documents",
    "Scheme-specific undertakings, assessment and payment documents"
  ],
  "steps": [
    [
      "Determine the correct scheme",
      "Confirm product category, mandatory coverage and whether FMCS is the appropriate route."
    ],
    [
      "Review overseas factory readiness",
      "Assess technical documentation, manufacturing and testing facilities."
    ],
    [
      "Prepare application and representative records",
      "Organize scheme documents and coordinate with the manufacturer and Indian representative."
    ],
    [
      "Coordinate assessment and follow-up",
      "Assist with inspection planning, test documentation and ongoing licence conditions."
    ]
  ],
  "support": [
    "FMCS eligibility and scope assessment",
    "Foreign factory documentation support",
    "Indian representative coordination guidance",
    "Testing, assessment and post-grant readiness support"
  ],
  "faqs": [
    [
      "Can an Indian importer apply as the manufacturer?",
      "FMCS licences are granted to qualifying foreign manufacturers; importers may assist or act in permitted representative roles."
    ],
    [
      "Is one licence valid for all overseas factories?",
      "Licensing is linked to the approved manufacturing premises and product scope. Assess each location."
    ],
    [
      "Does FMCS cover electronics under CRS?",
      "Not automatically. Notified electronic products under CRS follow their specific registration route."
    ],
    [
      "Are inspections always identical?",
      "Assessment requirements depend on the applicable standard and scheme. Confirm the current BIS procedure."
    ]
  ],
  "note": "Plan certification before committing to commercial supply deadlines. BIS determines grant and permitted marking; an application is not a licence.",
  "sources": [
    [
      "BIS FMCS overview",
      "https://www.bis.gov.in/fmcs/fmcs-overview/?lang=en"
    ],
    [
      "BIS FMCS FAQs",
      "https://www.bis.gov.in/fmcs/fmcs-faqs/?lang=en"
    ]
  ],
  "reference": "https://eprnexuss.com/services/foreign-manufacturers-certification-scheme"
};

export default function ForeignManufacturersCertificationScheme() {
  return <LicensePageLayout slug="foreign-manufacturers-certification-scheme" content={content} />;
}
