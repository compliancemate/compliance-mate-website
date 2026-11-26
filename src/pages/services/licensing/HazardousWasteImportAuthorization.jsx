import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "MoEFCC / SPCB or PCC / Customs, as applicable",
  "overview": "Import of hazardous and other waste is regulated under the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, as amended. The applicable route depends on the material classification, relevant schedules, intended use, importer status and country of export. Some waste is prohibited; eligible waste may require ministry permission, prior informed consent or specified customs documents. Import for disposal is not permitted under these rules. Establish the legal route before placing an order or dispatching a shipment.",
  "audience": [
    "Eligible actual users and authorized recycling or recovery units",
    "Industrial businesses procuring eligible secondary raw materials",
    "Importers assessing specific waste classifications",
    "Facilities seeking permission for a defined material and end use"
  ],
  "documents": [
    "Waste specification, analysis, proposed classification and quantity",
    "Importer IEC and business details",
    "Valid site consents and waste authorization where applicable",
    "Processing capacity and intended recycling or recovery use",
    "Exporter, country of origin and shipment-related documentation",
    "Prescribed forms, permissions and movement documents as applicable"
  ],
  "steps": [
    [
      "Identify material and import eligibility",
      "Review the composition, schedule entry, import restrictions and intended end use before purchase."
    ],
    [
      "Check applicant and facility status",
      "Confirm the proposed applicant's role, permitted capacity and receiving facility documents."
    ],
    [
      "Prepare the required permission route",
      "Determine the applicable ministry or customs procedure, supporting evidence and prior consents."
    ],
    [
      "Plan compliant shipment documentation",
      "Coordinate the documentation checklist with the importer and customs professional before dispatch."
    ]
  ],
  "support": [
    "Waste classification and import eligibility assessment",
    "Import permission documentation and coordination",
    "Facility compliance and capacity review",
    "Shipment document readiness and clarification support"
  ],
  "faqs": [
    [
      "Can every recyclable material be imported?",
      "No. Restrictions, prohibitions and documentation depend on the specific waste entry and other applicable rules."
    ],
    [
      "Does IEC alone permit hazardous waste import?",
      "No. IEC is a trade identifier; waste-specific restrictions and permissions must also be satisfied."
    ],
    [
      "Is MoEFCC permission always required?",
      "Not for every eligible waste category. The relevant schedule and conditions determine the route."
    ],
    [
      "Can a trader import without a processing facility?",
      "Eligibility depends on the particular material and rules for actual users or other permitted entities. Assess this before committing to a shipment."
    ]
  ],
  "note": "Never dispatch a shipment before establishing material eligibility, importer status and the applicable permission route.",
  "sources": [
    [
      "MoEFCC import/export of hazardous and other waste",
      "https://moef.gov.in/importexport-of-hazardous-other-waste"
    ],
    [
      "MoEFCC rules and regulations",
      "https://moef.gov.in/rules-regulations-3"
    ]
  ],
  "reference": "https://eprnexuss.com/services/hazardous-waste-impact-authorization"
};

export default function HazardousWasteImportAuthorization() {
  return <LicensePageLayout slug="hazardous-waste-import-authorization" content={content} />;
}
