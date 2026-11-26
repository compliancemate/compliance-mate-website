
import { useEffect, useRef } from 'react';

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Leaf,
  ListChecks,
  MapPin,
  ShieldCheck,
  Target,
  Wallet,
  Factory,
  Recycle,
  Landmark,
  Layers,
} from 'lucide-react';

import StickyContactForm from '../../components/stickyForm';

// ==========================================
// PAGE CONFIGURATION
// ==========================================

const PATH = '/services/dpr-feasibility';
const SERVICE = 'DPR & Feasibility Reports';

const sections = [
  ['overview', 'Overview'],
  ['deliverables', 'Report contents'],
  ['industries', 'Industries'],
  ['process', 'Our process'],
  ['checklist', 'What we need'],
  ['faqs', 'FAQs'],
];

// ==========================================
// DPR DELIVERABLES
// ==========================================

const deliverables = [
  {
    icon: Target,
    title: 'Project & Market Feasibility',
    text: 'Understand the demand for your product, target customers, competition, site suitability and the commercial case for your investment.',
  },
  {
    icon: Factory,
    title: 'Technical Feasibility',
    text: 'Evaluate plant capacity, process technology, machinery, raw material availability, utilities, manpower and preliminary layout requirements.',
  },
  {
    icon: Calculator,
    title: 'CAPEX & OPEX Assessment',
    text: 'Estimate investment in land, civil works, machinery and utilities, alongside recurring costs such as feedstock, power, labour and maintenance.',
  },
  {
    icon: BarChart3,
    title: 'Financial Projections',
    text: 'Model expected sales, profit and loss, cash flows, working capital, break-even, payback and debt service coverage, with clearly stated assumptions.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory & Environmental Planning',
    text: 'Identify applicable approvals, pollution-control infrastructure, waste handling and key compliance milestones for the proposed project.',
  },
  {
    icon: Landmark,
    title: 'Bankable DPR Documentation',
    text: 'Organise technical and financial findings into a structured report to support lender appraisal, investor discussions and project implementation.',
  },
];

// ==========================================
// INDUSTRIES
// ==========================================

const industries = [
  {
    icon: Leaf,
    title: 'CBG & Biogas',
    text: 'Feedstock assessment, gas yield, digestion technology, offtake and digestate management.',
    href: '/services/biogas',
  },
  {
    icon: Recycle,
    title: 'Recycling & Waste Processing',
    text: 'Input quality, recovery yields, equipment, waste streams and finished-product markets.',
    href: '/industries',
  },
  {
    icon: Building2,
    title: 'Industrial Projects',
    text: 'Capacity planning, site evaluation, infrastructure requirements and environmental compliance.',
    href: '/industries',
  },
];

// ==========================================
// WORKING PROCESS
// ==========================================

const steps = [
  [
    'Understand Your Project',
    'Discuss the proposed product, capacity, location, budget and business objectives.',
  ],
  [
    'Gather & Evaluate Data',
    'Review feedstock, equipment quotations, site information, market inputs and regulatory requirements.',
  ],
  [
    'Build the Project Model',
    'Develop technical assumptions, investment estimates, operating costs, revenue scenarios and financing projections.',
  ],
  [
    'Review & Refine',
    'Discuss the findings, test sensitive assumptions and address information gaps with you.',
  ],
  [
    'Deliver Your DPR',
    'Share the agreed report and financial analysis, with next-step guidance for project or lender discussions.',
  ],
];

// ==========================================
// DOCUMENT CHECKLIST
// ==========================================

const checklist = [
  'Project location and land availability',
  'Proposed industry, product and daily capacity',
  'Promoter or company background',
  'Raw material sources and indicative rates',
  'Machinery quotations, if available',
  'Estimated investment and financing preference',
  'Expected buyers and selling prices, if known',
  'Existing approvals or site documents, if available',
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS
// ==========================================

const faqs = [
  [
    'What is a Detailed Project Report (DPR)?',
    'A DPR is a structured technical and financial document describing a proposed project, its implementation requirements, estimated costs, expected performance and key risks. It supports investment planning and discussions with lenders or investors.',
  ],
  [
    'What is the difference between a DPR and a feasibility study?',
    'A feasibility study asks whether the project is worth pursuing. A DPR provides a more detailed plan for implementing and financing it. A preliminary feasibility assessment can help refine the project before the full DPR is prepared.',
  ],
  [
    'Can I get a DPR before purchasing land or machinery?',
    'Yes. A preliminary report can work with indicative site and equipment assumptions. The report should be updated once actual land details, quotations and operating conditions are confirmed.',
  ],
  [
    'Can a DPR help me obtain a bank loan?',
    'A lender-ready DPR can help a bank assess technical viability, cash flows and repayment capacity. Loan sanction is independently decided by the lender based on its policies, documentation, security and borrower profile.',
  ],
  [
    'Do you include financial projections and profitability analysis?',
    'Yes, as agreed in the scope. These can include CAPEX, OPEX, revenue, working capital, cash flows, break-even, payback, DSCR and sensitivity analysis. Projections are estimates, not guaranteed returns.',
  ],
  [
    'Can you assess different plant capacities or technologies?',
    'Yes. We can compare relevant capacity or technology scenarios within the agreed scope to understand differences in investment, operating cost, output and implementation risks.',
  ],
  [
    'How much does a DPR cost and how long does it take?',
    'The fee and timeline depend on the sector, project size, complexity, scope and availability of reliable information. Contact our team for a tailored proposal after an initial discussion.',
  ],
  [
    'Can you help after the DPR is completed?',
    'Depending on your requirements and agreed engagement, Compliance Mate can also assist with licensing, machinery evaluation, financing documentation and project-development coordination.',
  ],
];

// ==========================================
// REUSABLE TAILWIND CLASSES
// ==========================================

const h2 =
  'mt-2 text-2xl font-bold tracking-tight text-dark-blue sm:text-3xl';

const kicker =
  'text-xs font-bold uppercase tracking-[.16em] text-emerald-700';

const prose =
  'mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8';

const card =
  'rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md motion-safe:hover:-translate-y-1';

// ==========================================
// REUSABLE SECTION HEADING
// ==========================================

function SectionTitle({ eyebrow, title, children }) {
  return (
    <>
      <p className={kicker}>{eyebrow}</p>

      <h2 className={h2}>{title}</h2>

      {children && (
        <p className={prose}>{children}</p>
      )}
    </>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function DprFeasibility() {
  const root = useRef(null);

  // Scroll reveal animations

  useEffect(() => {
    if (
      !root.current ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'motion-safe:animate-fade-in'
            );

            observer.unobserve(entry.target);
          }
        }),
      {
        threshold: 0.08,
      }
    );

    root.current
      .querySelectorAll('[data-dpr-reveal]')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={root}
      className="mx-auto grid w-full max-w-[1440px] min-w-0 gap-6 px-4 pb-14 pt-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,350px)] lg:grid-rows-[auto_1fr] lg:gap-x-7"
    >

      {/* ==================================
          HERO SECTION
      ================================== */}

      <section className="relative isolate min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00265E] via-[#06467c] to-[#08746c] p-6 text-white sm:p-10 lg:col-start-1 lg:row-start-1">

        {/* Decorative background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 size-96 rounded-full border-[55px] border-white/5 motion-safe:animate-orbit-drift"
        />

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="relative flex flex-wrap items-center gap-2 text-xs text-blue-100"
        >
          <a
            href="/"
            className="hover:text-lime-200"
          >
            Home
          </a>

          <span>/</span>

          <a
            href="/#services"
            className="hover:text-lime-200"
          >
            Services
          </a>

          <span>/</span>

          <span aria-current="page">
            DPR &amp; Feasibility
          </span>
        </nav>

        <div className="relative mt-8 motion-safe:animate-hero-enter">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-lime-200">
            <FileText size={15} />
            PROJECT PLANNING &amp; ADVISORY
          </span>

          <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white">
            Bankable DPR &amp;
            <br />

            <span className="text-lime-300">
              Feasibility Reports.
            </span>
          </h1>

          <h2 className="mt-5 text-lg font-semibold text-white sm:text-xl">
            Plan with clarity. Invest with confidence.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Turn your industrial or renewable energy
            project idea into a practical investment plan.
            Compliance Mate helps you understand technical
            requirements, project costs, expected financial
            performance and the steps towards implementation.
          </p>

          {/* Hero buttons */}

          <div className="mt-7 flex flex-wrap gap-3">

            <a
              href={`${PATH}#dpr-consultation`}
              className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-dark-blue transition hover:bg-lime-200"
            >
              Discuss Your Project

              <ArrowRight size={17} />
            </a>

            <a
              href={`${PATH}#deliverables`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore Report Contents

              <ArrowUpRight size={17} />
            </a>

          </div>

          {/* Hero highlights */}

          <div className="mt-8 grid grid-cols-1 gap-2 border-t border-white/15 pt-5 min-[430px]:grid-cols-3">

            {[
              [ClipboardCheck, 'Technical Clarity'],
              [Wallet, 'Financial Planning'],
              [Layers, 'Implementation Roadmap'],
            ].map(([Icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs font-semibold text-blue-100"
              >
                <Icon
                  size={18}
                  className="shrink-0 text-lime-300"
                />

                {label}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ==================================
          STICKY CONSULTATION FORM
      ================================== */}

      <aside
        aria-label="Project consultation"
        className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2"
      >

        <div
          id="dpr-consultation"
          className="scroll-mt-24 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:overscroll-contain lg:rounded-2xl lg:p-1"
        >

          <StickyContactForm
            sticky={false}
            title="Talk to a DPR Expert"
            description="Share your project idea, capacity and location."
            service={SERVICE}
          />

        </div>

      </aside>

      {/* ==================================
          MAIN PAGE CONTENT
      ================================== */}

      <div className="min-w-0 lg:col-start-1 lg:row-start-2">

        {/* PAGE NAVIGATION */}

        <nav
          aria-label="On this page"
          className="mb-7 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3"
        >

          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`${PATH}#${id}`}
              className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-dark-blue transition hover:bg-emerald-100 hover:text-emerald-800"
            >
              {label}
            </a>
          ))}

        </nav>

        {/* ==================================
            DPR OVERVIEW
        ================================== */}

        <section
          id="overview"
          data-dpr-reveal
          className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
        >

          <SectionTitle
            eyebrow="Start with the right foundation"
            title="What is a DPR and why does it matter?"
          >
            A Detailed Project Report (DPR) brings together
            the technical, commercial and financial aspects
            of a proposed business into one structured
            document. It helps entrepreneurs understand
            how a project may operate, what it could cost
            and what risks must be addressed before investing.
          </SectionTitle>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-5">

              <Target
                size={25}
                className="text-primary-blue"
              />

              <h3 className="mt-3 font-bold text-dark-blue">
                Feasibility Study
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Is the idea commercially and technically
                practical? Identify constraints, compare
                options and decide whether to proceed.
              </p>

            </div>

            <div className="rounded-2xl bg-emerald-50 p-5">

              <FileText
                size={25}
                className="text-emerald-700"
              />

              <h3 className="mt-3 font-bold text-dark-blue">
                Detailed Project Report
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                How will the project be developed and
                financed? Document the proposed setup,
                costs, operating model and projections.
              </p>

            </div>

          </div>

        </section>

        {/* ==================================
            DPR REPORT CONTENTS
        ================================== */}

        <section
          id="deliverables"
          data-dpr-reveal
          className="scroll-mt-24 py-10"
        >

          <SectionTitle
            eyebrow="What you receive"
            title="A complete view of your proposed project"
          >
            Our reports are structured around the decisions
            that matter to project owners, investors and
            lenders. The exact deliverables are agreed
            for each engagement.
          </SectionTitle>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {deliverables.map(
              ({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className={card}
                >

                  <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">

                    <Icon size={23} />

                  </span>

                  <h3 className="mt-4 text-base font-bold text-dark-blue">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>

                </article>
              )
            )}

          </div>

        </section>

        {/* ==================================
            FINANCIAL ANALYSIS
        ================================== */}

        <section
          data-dpr-reveal
          className="rounded-3xl bg-gradient-to-br from-dark-blue to-[#075c66] p-6 text-white sm:p-8"
        >

          <p className="text-xs font-bold uppercase tracking-widest text-lime-200">
            Financial Decision-Making
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Know the numbers before you commit.
          </h2>

          <p className="mt-4 text-sm leading-7 text-blue-100">
            A useful financial model shows more than
            expected profits. It also helps identify
            how changes in raw material rates, selling
            prices, production efficiency and loan
            terms could affect the project.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {[
              ['CAPEX', 'Initial project investment'],
              ['OPEX', 'Recurring operating expenditure'],
              ['DSCR', 'Ability to service project debt'],
              [
                'Payback & Break-even',
                'Time and sales needed to recover costs',
              ],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 bg-white/10 p-4"
              >

                <div className="font-bold text-lime-300">
                  {label}
                </div>

                <p className="mt-1 text-xs leading-6 text-white">
                  {text}
                </p>

              </div>
            ))}

          </div>

          <p className="mt-5 text-xs leading-6 text-blue-100">
            Financial projections depend on verified
            inputs and agreed assumptions; they do not
            guarantee returns, funding or project viability.
          </p>

        </section>

        {/* ==================================
            INDUSTRIES WE SERVE
        ================================== */}

        <section
          id="industries"
          data-dpr-reveal
          className="scroll-mt-24 py-10"
        >

          <SectionTitle
            eyebrow="Sector-focused expertise"
            title="Projects we can help you plan"
          >
            From renewable energy to industrial resource
            recovery, our approach is tailored to your
            project's operating realities.
          </SectionTitle>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {industries.map(
              ({ icon: Icon, title, text, href }) => (
                <article
                  key={title}
                  className={card}
                >

                  <Icon
                    size={27}
                    className="text-emerald-700"
                  />

                  <h3 className="mt-4 font-bold text-dark-blue">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>

                  <a
                    href={href}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary-blue hover:text-emerald-700"
                  >
                    Explore Sector

                    <ArrowUpRight size={15} />
                  </a>

                </article>
              )
            )}

          </div>

        </section>

        {/* ==================================
            OUR WORKING PROCESS
        ================================== */}

        <section
          id="process"
          data-dpr-reveal
          className="scroll-mt-24 rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 p-6 sm:p-8"
        >

          <SectionTitle
            eyebrow="Our working process"
            title="From your idea to a structured report"
          />

          <ol className="mt-6 space-y-3">

            {steps.map(([title, text], i) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white bg-white/90 p-4 sm:p-5"
              >

                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-dark-blue text-sm font-bold text-lime-200">
                  0{i + 1}
                </span>

                <div>

                  <h3 className="font-bold text-dark-blue">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>

                </div>

              </li>
            ))}

          </ol>

        </section>

        {/* ==================================
            DOCUMENT CHECKLIST
        ================================== */}

        <section
          id="checklist"
          data-dpr-reveal
          className="scroll-mt-24 py-10"
        >

          <SectionTitle
            eyebrow="Before we get started"
            title="What information should you keep ready?"
          >
            You do not need to have everything finalised.
            Share what is available and we can identify
            the gaps during your initial consultation.
          </SectionTitle>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">

            {checklist.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"
              >

                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-700"
                />

                {text}

              </li>
            ))}

          </ul>

        </section>

        {/* ==================================
            RELATED SERVICES
        ================================== */}

        <section
          data-dpr-reveal
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
        >

          <SectionTitle
            eyebrow="Beyond the report"
            title="Practical support for the next stage"
          >
            A DPR is a foundation, not the final step.
            If you need further assistance, we can
            discuss a separate engagement covering
            the following services.
          </SectionTitle>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {[
              [
                ShieldCheck,
                'Licensing & Certification',
                '/services/licensing-certification',
              ],
              [
                Landmark,
                'Bank Loan Assistance Guide',
                '/blogs/compressed-biogas-plant-bank-loan-assistance',
              ],
              [
                Leaf,
                'CBG Plant Setup',
                '/services/biogas',
              ],
              [
                MapPin,
                'Project Consultation',
                '/contact',
              ],
            ].map(([Icon, title, href]) => (
              <a
                key={title}
                href={href}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-dark-blue transition hover:border-emerald-300 hover:bg-emerald-50"
              >

                <Icon
                  size={20}
                  className="shrink-0 text-emerald-700"
                />

                <span className="flex-1">
                  {title}
                </span>

                <ArrowUpRight
                  size={16}
                  className="shrink-0"
                />

              </a>
            ))}

          </div>

        </section>

        {/* ==================================
            FAQ SECTION
        ================================== */}

        <section
          id="faqs"
          data-dpr-reveal
          className="scroll-mt-24 py-10"
        >

          <SectionTitle
            eyebrow="Frequently asked questions"
            title="Answers before you get started"
          />

          <div className="mt-5 space-y-3">

            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-4 open:border-emerald-300"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold leading-6 text-dark-blue [&::-webkit-details-marker]:hidden">

                  {question}

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-emerald-700 transition group-open:rotate-180"
                  />

                </summary>

                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>

              </details>
            ))}

          </div>

        </section>

        {/* ==================================
            FINAL CALL TO ACTION
        ================================== */}

        <section
          data-dpr-reveal
          className="rounded-3xl bg-gradient-to-br from-dark-blue to-[#075c66] p-6 text-white sm:p-8"
        >

          <ListChecks
            size={30}
            className="text-lime-300"
          />

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Your project starts with a conversation.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
            Tell us about your proposed project. We will
            discuss the scope of the feasibility study
            or DPR and help you understand what information
            is needed to move forward.
          </p>

          <a
            href={`${PATH}#dpr-consultation`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-dark-blue transition hover:bg-lime-200"
          >
            Request a Consultation

            <ArrowRight size={17} />

          </a>

        </section>

      </div>

    </div>
  );
}
