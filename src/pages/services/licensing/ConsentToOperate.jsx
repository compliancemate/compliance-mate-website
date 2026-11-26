import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "State Pollution Control Board / Pollution Control Committee",
  "overview": "CTO is the operational consent for industrial activities subject to the applicable Water and Air Act requirements. The authority assesses the facility's actual equipment, production, emissions and wastewater controls against the approved proposal and applicable standards. A consent may prescribe capacity, discharge limits, monitoring, recordkeeping and other conditions. Renewals and amendments should be planned before the existing consent expires or the operation changes.",
  "audience": [
    "Established industrial units ready for operation",
    "Existing plants approaching consent expiry",
    "Facilities changing installed capacity, products or operating conditions",
    "Recycling units with pollution control systems installed"
  ],
  "documents": [
    "Existing CTE and relevant conditions",
    "Installed machinery list, actual capacity and plant layout",
    "Pollution control system commissioning and operating records",
    "Effluent and emission monitoring reports where required",
    "Waste storage, disposal or authorized recycler arrangements",
    "Previous CTO, compliance reports and applicable fee information for renewal"
  ],
  "steps": [
    [
      "Review the establishment approval",
      "Compare approved conditions with the installed plant, identify gaps and prepare a compliance action list."
    ],
    [
      "Establish operational readiness",
      "Collect records of installed treatment and emission controls, monitoring and waste handling."
    ],
    [
      "Submit or renew consent",
      "Prepare the correct application and supporting evidence for the competent board."
    ],
    [
      "Respond and maintain records",
      "Assist with inspection readiness, clarification responses and a calendar for consent conditions."
    ]
  ],
  "support": [
    "CTE condition review and operational gap assessment",
    "New CTO and renewal application preparation",
    "Technical records and monitoring coordination",
    "Consent-condition and renewal tracking guidance"
  ],
  "faqs": [
    [
      "What is the difference between CTE and CTO?",
      "CTE relates to establishment; CTO relates to the operation of the facility. Both may be required depending on the activity."
    ],
    [
      "Can a CTO cover additional production capacity?",
      "Only the scope permitted by the consent applies. Review whether an amendment or additional permission is needed before expansion."
    ],
    [
      "Do I need environmental testing?",
      "Monitoring and testing requirements depend on the activity and authority. Use the applicable standards and accepted laboratory arrangements."
    ],
    [
      "Can a renewal be guaranteed?",
      "No. The competent authority determines grant or renewal after assessing the application and compliance status."
    ]
  ],
  "note": "Keep a record of consent expiry, permitted products and capacities. Do not operate beyond authorized scope or assume a pending application grants permission.",
  "sources": [
    [
      "Online Consent Management & Monitoring System",
      "https://www.ocmms.nic.in/OCMMS_NEW/index.jsp"
    ],
    [
      "UPPCB consent portal",
      "https://www.upocmms.nic.in/UP/index.gsp"
    ]
  ],
  "reference": "https://eprnexuss.com/services/consent-to-operate"
};

export default function ConsentToOperate() {
  return <LicensePageLayout slug="consent-to-operate" content={content} />;
}
