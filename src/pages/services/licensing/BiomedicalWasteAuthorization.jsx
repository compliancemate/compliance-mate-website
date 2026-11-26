import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "State Pollution Control Board / Pollution Control Committee",
  "overview": "The Bio-Medical Waste Management Rules, 2016, as amended, apply to occupiers and operators handling biomedical waste. Healthcare facilities must organize segregation at the point of generation, appropriate collection and storage, and treatment or handover to an eligible common treatment facility, as applicable. Authorization and records help the competent authority assess whether these arrangements are adequate and whether the facility can manage its waste responsibly.",
  "audience": [
    "Hospitals, nursing homes and healthcare centres",
    "Clinics, diagnostic and pathology laboratories",
    "Veterinary and other covered establishments",
    "Common biomedical waste treatment facility operators"
  ],
  "documents": [
    "Facility registration, ownership and responsible person details",
    "Bed strength or activity details and waste quantities",
    "Segregation, collection and temporary storage arrangements",
    "Agreement with an authorized common treatment facility where applicable",
    "Treatment equipment, process and pollution control details for operators",
    "Previous authorization, training and waste management records where applicable"
  ],
  "steps": [
    [
      "Assess the facility role",
      "Identify occupier or operator responsibilities, waste streams and the applicable authorization route."
    ],
    [
      "Organize waste arrangements",
      "Review segregation, collection and authorized treatment or handover procedures."
    ],
    [
      "Prepare application records",
      "Compile facility details and supporting evidence for the prescribed authority."
    ],
    [
      "Support ongoing compliance",
      "Discuss recordkeeping, applicable reporting, incident documentation and changes to authorization."
    ]
  ],
  "support": [
    "Healthcare facility authorization assistance",
    "Document and waste handling checklist",
    "Treatment facility coordination guidance",
    "Renewal or amendment support where applicable"
  ],
  "faqs": [
    [
      "Does a small clinic need authorization?",
      "The rules cover occupiers handling biomedical waste irrespective of quantity, subject to their applicable procedures."
    ],
    [
      "Is a common treatment facility agreement sufficient?",
      "An agreement supports compliant disposal but does not replace applicable authorization and other duties."
    ],
    [
      "Can biomedical and general waste be mixed?",
      "No. Segregation and handling must follow the applicable waste categories and prescribed system."
    ],
    [
      "Who grants authorization?",
      "Generally the relevant state board or pollution control committee; special arrangements apply in specified cases."
    ]
  ],
  "note": "The content is a compliance overview, not a clinical waste handling protocol. Follow the prescribed waste category, treatment and occupational safety requirements.",
  "sources": [
    [
      "CPCB biomedical waste resources",
      "https://cpcb.nic.in/"
    ],
    [
      "Online Consent Management & Monitoring System",
      "https://www.ocmms.nic.in/OCMMS_NEW/index.jsp"
    ]
  ],
  "reference": "https://eprnexuss.com/services/bio-medical-waste-authorization"
};

export default function BiomedicalWasteAuthorization() {
  return <LicensePageLayout slug="biomedical-waste-authorization" content={content} />;
}
