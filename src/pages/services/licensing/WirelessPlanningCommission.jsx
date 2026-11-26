import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Wireless Planning & Coordination Wing, Department of Telecommunications",
  "overview": "WPC is the Wireless Planning and Coordination Wing of the Department of Telecommunications. It administers relevant radio spectrum and equipment permissions. Equipment Type Approval (ETA) is one route for qualifying wireless devices operating in permitted licence-exempt frequency bands. Devices using other bands, power levels or applications may need a different authorization. Reviewing the actual RF parameters is essential before selecting a filing route.",
  "audience": [
    "Importers and manufacturers of wireless-enabled devices",
    "Businesses introducing Bluetooth, Wi-Fi or other radio products",
    "Equipment suppliers assessing permitted frequency operation",
    "Entities evaluating radio equipment requiring a different authorization"
  ],
  "documents": [
    "Product model, manufacturer and technical datasheet",
    "Radio technology, frequency bands and transmit power",
    "RF test report and supporting technical evidence",
    "Applicant identity and authorized representative details where applicable",
    "Intended use, import and deployment information",
    "Existing approvals or related product certifications where relevant"
  ],
  "steps": [
    [
      "Identify the radio configuration",
      "Review frequency bands, power, RF modules and intended operation against applicable conditions."
    ],
    [
      "Choose the authorization route",
      "Assess whether ETA or another spectrum or equipment permission applies."
    ],
    [
      "Prepare technical documents",
      "Coordinate supporting test evidence, product datasheets and applicant records."
    ],
    [
      "Review market readiness",
      "Confirm the authorization scope and other applicable product or import requirements."
    ]
  ],
  "support": [
    "RF parameter and applicable route assessment",
    "ETA documentation and filing assistance",
    "Testing evidence and model review",
    "Coordination for related regulatory requirements"
  ],
  "faqs": [
    [
      "Does every Wi-Fi device automatically qualify for ETA?",
      "No. The actual frequency, transmit power and applicable exemption conditions must be checked."
    ],
    [
      "Does a foreign radio certificate replace WPC permission?",
      "No. Foreign test evidence may support the application only if accepted under the Indian procedure."
    ],
    [
      "Is WPC ETA equivalent to BIS?",
      "No. Radio equipment authorization and BIS product certification address different requirements."
    ],
    [
      "Can I import before verifying the approval route?",
      "Assess applicable permissions and import conditions before committing to a shipment."
    ]
  ],
  "note": "The WPC route is determined by the equipment and radio parameters. Do not assume that licence-exempt operation means no equipment approval is needed.",
  "sources": [
    [
      "DoT Equipment Type Approval information",
      "https://www.eservices.dot.gov.in/equipment-type-approval-eta"
    ],
    [
      "DoT document requirements",
      "https://eservices.dot.gov.in/document-required-for-services?field_services_type_target_id=307"
    ]
  ],
  "reference": "https://eprnexuss.com/services/wireless-planning-commision"
};

export default function WirelessPlanningCommission() {
  return <LicensePageLayout slug="wireless-planning-commission" content={content} />;
}
