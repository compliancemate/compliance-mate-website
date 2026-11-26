import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "State Pollution Control Board / Pollution Control Committee",
  "overview": "CTE is the environmental consent sought before establishing or expanding an industrial unit when the applicable consent requirements apply. The Water Act, Air Act and relevant state procedures govern the assessment. A well-prepared application explains what will be manufactured, where the facility will be located, how much water and energy will be used, and how pollution will be controlled. Exemptions and special procedures vary by activity and jurisdiction.",
  "audience": [
    "New manufacturing and processing units",
    "Recycling, waste processing and renewable energy facilities",
    "Existing units proposing expansion, a new product or a process change",
    "Businesses evaluating a new industrial location"
  ],
  "documents": [
    "Site and land-use documents, ownership or lease details",
    "Company particulars and authorized signatory details",
    "Project report, capacity, process flow and site layout",
    "Water balance, wastewater treatment and disposal arrangements",
    "Air emission sources, pollution control equipment and waste details",
    "Applicable prior approvals and capital investment information"
  ],
  "steps": [
    [
      "Assess the activity and site",
      "Identify the competent board, applicable industry classification and siting requirements before committing to equipment or construction."
    ],
    [
      "Prepare the technical dossier",
      "Document production capacity, material balance, utilities and pollution controls consistently across drawings and forms."
    ],
    [
      "File the consent application",
      "Coordinate the relevant online submission, supporting records and applicable fee."
    ],
    [
      "Address scrutiny and conditions",
      "Assist with clarifications and inspection preparation; review conditions before moving towards CTO."
    ]
  ],
  "support": [
    "Site suitability and applicable approvals review",
    "Technical documentation and application coordination",
    "Pollution control planning and clarification support",
    "Roadmap for operational consent after establishment"
  ],
  "faqs": [
    [
      "Is CTE required before purchasing land?",
      "A land purchase is not itself a consent grant. Verify zoning, siting restrictions and applicability before committing to a site; obtain CTE before undertaking establishment works where required."
    ],
    [
      "Can I start production after receiving CTE?",
      "CTE is not permission to operate. Obtain CTO or other operational permission where applicable before production, including trial production where required."
    ],
    [
      "Does expansion require a fresh CTE?",
      "An increase in capacity or change of process may require amended or fresh consent. Check the existing conditions and the relevant board."
    ],
    [
      "How long does approval take?",
      "The applicable classification, state process, completeness and inspection requirements determine timelines. No fixed approval date can be promised."
    ]
  ],
  "note": "Do not treat CTE as a substitute for land-use approval, environmental clearance or other independent project permissions.",
  "sources": [
    [
      "Online Consent Management & Monitoring System",
      "https://www.ocmms.nic.in/OCMMS_NEW/index.jsp"
    ],
    [
      "Uttar Pradesh Pollution Control Board consent portal",
      "https://www.upocmms.nic.in/UP/index.gsp"
    ]
  ],
  "reference": "https://eprnexuss.com/services/consent-to-establish"
};

export default function ConsentToEstablish() {
  return <LicensePageLayout slug="consent-to-establish" content={content} />;
}
