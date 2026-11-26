import LicensePageLayout from './LicensePageLayout';

// Edit this page's content below. The shared layout handles styling and the sticky form.
const content = {
  "authority": "Department of Consumer Affairs / Director or State Controller of Legal Metrology",
  "overview": "The Legal Metrology Act, 2009 and Legal Metrology (Packaged Commodities) Rules, 2011, as amended, regulate specified pre-packaged commodities. The framework addresses registration of applicable manufacturers, packers or importers and the information displayed on covered packages. Mandatory declarations depend on the commodity, packaging type and sale channel. Label review should take place before printing bulk packaging or releasing goods for sale.",
  "audience": [
    "Manufacturers of pre-packaged commodities",
    "Packers and contract packaging businesses",
    "Importers of packaged goods",
    "Brands selling covered goods through retail or e-commerce channels"
  ],
  "documents": [
    "Business details and applicable registration records",
    "Manufacturing, packing or importing premises details",
    "Commodity and SKU list, pack sizes and intended sales channel",
    "Artwork or labels showing proposed declarations",
    "Import and manufacturer details where applicable",
    "Existing registration and proposed changes where relevant"
  ],
  "steps": [
    [
      "Assess applicability",
      "Determine the business role, commodity, packaging and any applicable exemptions."
    ],
    [
      "Review declarations",
      "Check proposed names, addresses, quantity, retail price and consumer information against applicable rules."
    ],
    [
      "Prepare registration",
      "Compile business and premises documents for the prescribed registration route."
    ],
    [
      "Support ongoing changes",
      "Review changes in commodity, packaging, address or e-commerce declarations as required."
    ]
  ],
  "support": [
    "LMPC applicability and registration guidance",
    "Packaging artwork and declaration review",
    "Importer and packer documentation support",
    "Amendment and ongoing label compliance guidance"
  ],
  "faqs": [
    [
      "Is LMPC registration the same as BIS certification?",
      "No. LMPC addresses legal metrology and packaged commodity obligations; BIS addresses applicable product conformity."
    ],
    [
      "What declarations are normally reviewed?",
      "Depending on the package, manufacturer or importer details, product identity, net quantity, retail price and consumer contact information may apply."
    ],
    [
      "Do industrial packs follow identical retail rules?",
      "No. Exemptions and different requirements may apply to qualifying industrial, institutional or wholesale packages."
    ],
    [
      "Does online sale remove label requirements?",
      "No. Applicable e-commerce display and physical package obligations need to be assessed separately."
    ]
  ],
  "note": "Do not print a final label using a generic checklist alone. Check current amendments and commodity-specific rules, including other applicable sector requirements.",
  "sources": [
    [
      "Department of Consumer Affairs legal metrology rules",
      "https://consumeraffairs.gov.in/pages/legal-metrology-act/"
    ]
  ],
  "reference": "https://eprnexuss.com/services/legal-metrology-packaged-commudities"
};

export default function LegalMetrologyPackagedCommodities() {
  return <LicensePageLayout slug="legal-metrology-packaged-commodities" content={content} />;
}
