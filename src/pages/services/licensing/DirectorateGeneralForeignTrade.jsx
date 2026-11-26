import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Directorate General of Foreign Trade (DGFT)",
  "overview": "DGFT administers India's Foreign Trade Policy and related trade authorizations. The Importer Exporter Code (IEC) is a PAN-linked identifier generally required for covered import and export activities, subject to applicable exceptions. An IEC does not itself authorize restricted goods or replace customs, product safety, environmental or other permissions. Business-specific trade requirements depend on the item classification, transaction and applicable policy.",
  "audience": [
    "Businesses planning their first commercial import or export",
    "Existing IEC holders needing profile updates",
    "Industrial buyers importing machinery or raw materials",
    "Exporters assessing applicable trade authorizations or schemes"
  ],
  "documents": [
    "PAN-linked business and legal entity details",
    "Business premises and authorized signatory information",
    "Bank account details and supporting documents",
    "Existing IEC and profile information for changes",
    "Product description, ITC(HS) classification and intended transaction",
    "Additional scheme or restricted-item documents where applicable"
  ],
  "steps": [
    [
      "Review trade activity",
      "Identify the applicant, intended goods, relevant classification and applicable trade restrictions."
    ],
    [
      "Prepare IEC information",
      "Organize the entity, banking and address details for the online application or update."
    ],
    [
      "Coordinate filing",
      "Assist with application readiness, authentication and portal clarification as applicable."
    ],
    [
      "Maintain the trade profile",
      "Plan periodic IEC confirmation and review other permissions before individual transactions."
    ]
  ],
  "support": [
    "New IEC and profile update support",
    "Trade documentation readiness review",
    "Product classification and policy applicability coordination",
    "Guidance on related authorizations and ongoing profile obligations"
  ],
  "faqs": [
    [
      "Does an IEC expire every year?",
      "IEC holders generally need to confirm or update details annually during April to June under the Foreign Trade Policy, subject to current directions."
    ],
    [
      "Can an IEC be used for any item?",
      "No. Product-specific restrictions, licences and other regulatory conditions still apply."
    ],
    [
      "Is GST registration the same as IEC?",
      "No. GST and IEC serve separate purposes, though business details should be consistent."
    ],
    [
      "Can you guarantee clearance of imported goods?",
      "No. Customs and other competent authorities decide clearance based on the shipment and applicable requirements."
    ]
  ],
  "note": "Verify current DGFT policy, ITC(HS) classification and customs or sector-specific restrictions before entering a trade transaction.",
  "sources": [
    [
      "DGFT official portal",
      "https://www.dgft.gov.in/"
    ],
    [
      "DGFT Foreign Trade Policy 2023 chapter 2",
      "https://content.dgft.gov.in/Website/dgftprod/4f665d2f-20cc-4887-ae6a-5ec912bc0d44/FTP2023_Chapter02.pdf"
    ]
  ],
  "reference": "https://eprnexuss.com/services/directorate-general-of-foreign-trade"
};

export default function DirectorateGeneralForeignTrade() {
  return <LicensePageLayout slug="directorate-general-of-foreign-trade" content={content} />;
}
