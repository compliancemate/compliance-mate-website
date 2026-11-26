import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "State Pollution Control Board / Pollution Control Committee",
  "overview": "Hazardous and other waste management in India is governed by the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, as amended. Authorization requirements depend on waste classification, quantities and the activities undertaken, including generation, storage, recovery, recycling and disposal. The application should demonstrate appropriate handling, storage, pollution control and authorized downstream arrangements rather than merely list waste names.",
  "audience": [
    "Industrial waste generators",
    "Authorized recyclers, recoverers and utilization facilities",
    "Waste storage and treatment operators",
    "Facilities adding new waste streams or changing authorized quantities"
  ],
  "documents": [
    "Waste classification, source, quantity and composition",
    "Process flow and facility layout showing designated storage",
    "Applicable CTE and CTO or consent application details",
    "Waste handling, labeling, emergency and safety arrangements",
    "Agreements with authorized receivers or disposal facilities",
    "Waste records, returns and prior authorization where relevant"
  ],
  "steps": [
    [
      "Classify waste streams",
      "Match the materials and processes against applicable schedules and identify the activity requiring authorization."
    ],
    [
      "Review handling arrangements",
      "Assess storage segregation, compatible containers, labeling, spill response and authorized destinations."
    ],
    [
      "Prepare the application",
      "Organize technical documents, waste quantities and operating information for the board."
    ],
    [
      "Maintain traceability",
      "Plan manifests, records, returns, changes to authorization and safe transfer documentation."
    ]
  ],
  "support": [
    "Waste classification and applicability review",
    "Application and renewal document preparation",
    "Waste management plan and authorized receiver coordination guidance",
    "Recordkeeping and regulatory clarification support"
  ],
  "faqs": [
    [
      "Is hazardous waste authorization the same as CTO?",
      "No. Consent and waste authorization address different obligations, even when the board processes them together."
    ],
    [
      "Can waste be sent to any recycler?",
      "The receiving facility must be legally eligible to handle the specific waste and activity. Verify its permissions before transfer."
    ],
    [
      "Are storage periods unlimited?",
      "No. Applicable storage limits and conditions must be followed; exceptions require the appropriate basis."
    ],
    [
      "Does authorization automatically permit import?",
      "No. Transboundary movement involves additional eligibility, permissions and customs requirements."
    ]
  ],
  "note": "Handle hazardous waste only within the authorized scope and applicable safety and transport requirements. A separate import assessment is necessary for cross-border shipments.",
  "sources": [
    [
      "MoEFCC hazardous substances rules and regulations",
      "https://moef.gov.in/rules-regulations-3"
    ],
    [
      "Online Consent Management & Monitoring System",
      "https://www.ocmms.nic.in/OCMMS_NEW/index.jsp"
    ]
  ],
  "reference": "https://eprnexuss.com/services/hazardous-waste-authorization"
};

export default function HazardousWasteAuthorization() {
  return <LicensePageLayout slug="hazardous-waste-authorization" content={content} />;
}
