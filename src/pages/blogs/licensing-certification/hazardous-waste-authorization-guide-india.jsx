import LicensingArticleLayout from './LicensingArticleLayout';

export const article = {
  "slug": "hazardous-waste-authorization-guide-india",
  "title": "Hazardous Waste Authorization in India: A Practical Guide for Industries",
  "description": "Learn how to identify hazardous waste, prepare authorization documents, manage waste responsibly and avoid common compliance gaps.",
  "service": "Hazardous Waste Authorization",
  "serviceSlug": "hazardous-waste-authorization",
  "icon": "factory",
  "readTime": "5 min read",
  "takeaways": [
    "Classify waste by process, composition and applicable schedules.",
    "Check whether authorization is required for your actual activities.",
    "Maintain traceable handling, storage and transfer records."
  ],
  "sections": [
    {
      "title": "What is hazardous waste authorization?",
      "paragraphs": [
        "Hazardous and other waste management in India is regulated through the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, as amended. For activities subject to authorization, the relevant SPCB or PCC evaluates how the waste is generated, handled and managed.",
        "Authorization requirements are activity-specific. Some occupiers may qualify for exceptions under the amended rules, but that does not eliminate their obligations to manage waste through appropriate channels."
      ]
    },
    {
      "title": "Identify the waste before applying",
      "paragraphs": [
        "Begin with a process-wise waste inventory. Different production activities may generate different waste streams, including spent solvents, used oil, treatment residues or contaminated materials. Classification must follow the relevant schedules and characteristics rather than a general description such as industrial scrap."
      ],
      "items": [
        "Record the source, estimated quantity and physical condition of each stream.",
        "Check applicable waste categories and characterization requirements.",
        "Identify suitable authorized receivers for recovery, treatment or disposal.",
        "Assess whether additional sector-specific waste rules or import permissions apply."
      ]
    },
    {
      "title": "Prepare the application documents",
      "paragraphs": [
        "Requirements depend on the activity and board. For a new or expanded facility, coordinate waste authorization planning with environmental consent and engineering design."
      ],
      "items": [
        "Company and facility particulars, process description and layout.",
        "Applicable environmental consent documents.",
        "Waste categories, quantities and proposed storage arrangements.",
        "Waste recovery, treatment or disposal arrangements and receiver records.",
        "Safety procedures, relevant equipment details and previous compliance records for renewal."
      ]
    },
    {
      "title": "What happens during the application?",
      "paragraphs": [
        "Use the current application channel of the competent board, submit the required information and respond to technical queries. The authority may assess facilities and arrangements for safe handling. If authorization is granted, review the approved activities, quantities and conditions carefully.",
        "A recycler, waste generator and transporter may have different responsibilities. Do not assume authorization for one activity covers every other activity or waste stream."
      ]
    },
    {
      "title": "Build a practical waste management system",
      "paragraphs": [
        "Keep compatible waste streams segregated in appropriate containers and designated storage areas. Use suitable labels and maintain an inventory. Arrange movement through applicable authorized channels and use the prescribed transport or manifest documentation where required.",
        "Train relevant employees, maintain safety measures and review the actual waste quantities against authorization conditions. Retain records and submit required returns on time."
      ]
    },
    {
      "title": "Hazardous waste authorization vs import permission",
      "paragraphs": [
        "Domestic waste authorization does not automatically permit import of hazardous or other wastes. Import eligibility depends on the waste classification, applicable schedules and separate regulatory requirements. Seek a consignment-specific review before entering a purchase or shipping commitment. Compliance Mate can help you identify the relevant documentation and approval pathway."
      ]
    }
  ],
  "faqs": [
    [
      "Is hazardous waste authorization the same as CTO?",
      "No. Environmental consent and waste authorization address different obligations. Check which apply to your operation."
    ],
    [
      "Can I send waste to any scrap dealer?",
      "Use receivers and transfer arrangements permitted for the specific waste under the applicable rules. Verify their authorization and scope."
    ],
    [
      "Do all waste generators need authorization?",
      "Not necessarily. Applicability and exceptions depend on the amended rules and activities. Responsible waste management remains essential."
    ],
    [
      "Does authorization cover importing waste?",
      "Not by itself. Import permissions and restrictions must be evaluated separately."
    ]
  ],
  "sources": [
    [
      "MoEFCC: hazardous substances management",
      "https://moef.gov.in/hazardous-substances-management-hsm"
    ],
    [
      "MoEFCC: waste rules and regulations",
      "https://moef.gov.in/rules-regulations-3"
    ],
    [
      "MoEFCC: hazardous and other waste import/export",
      "https://moef.gov.in/importexport-of-hazardous-other-waste"
    ]
  ],
  "related": [
    [
      "Consent to Establish (CTE) guide",
      "consent-to-establish-cte-guide-india"
    ],
    [
      "Consent to Operate (CTO) guide",
      "consent-to-operate-cto-guide-india"
    ],
    [
      "Extended Producer Responsibility (EPR) guide",
      "epr-registration-india-guide"
    ]
  ]
};

export default function LicensingBlog() {
  return <LicensingArticleLayout article={article} />;
}
