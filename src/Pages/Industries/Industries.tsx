
import { useState } from 'react';

// ==========================================
// COMPLIANCE MATE - INDUSTRIES PAGE
// ==========================================

interface Industry {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string;
  services: string[];
  icon: string;
}

const industries: Industry[] = [
  {
    id: '01',
    title: 'Compressed Biogas & Renewable Energy',
    category: 'RENEWABLE ENERGY',
    description:
      'Professional project consultancy for compressed biogas plants and sustainable bioenergy infrastructure.',
    details:
      'We assist businesses with CBG plant planning, feedstock evaluation, technology selection, project feasibility, bankable DPR preparation, environmental licensing and project financing documentation.',
    services: [
      'CBG Plant Setup Consultancy',
      'Bankable Detailed Project Reports',
      'Feedstock & Technology Assessment',
      'Environmental Licensing',
      'Bank Loan & Subsidy Documentation',
      'Offtake Agreement Coordination',
    ],
    icon: '♻',
  },
  {
    id: '02',
    title: 'Lithium-Ion Battery Recycling',
    category: 'BATTERY RECYCLING',
    description:
      'Technical and regulatory consultancy for lithium-ion battery recycling and material recovery projects.',
    details:
      'Our consultancy services support project planning for battery dismantling, shredding, black mass recovery and applicable recycling technologies, along with environmental approvals and feasibility assessment.',
    services: [
      'Battery Recycling Plant Setup',
      'Machinery & Technology Selection',
      'Black Mass Processing Consultancy',
      'Environmental Approvals',
      'Project Feasibility & DPR',
      'Regulatory Compliance Guidance',
    ],
    icon: '▣',
  },
  {
    id: '03',
    title: 'E-Waste Recycling',
    category: 'ELECTRONIC WASTE',
    description:
      'Consultancy for establishing and operating compliant electronic waste recycling and processing facilities.',
    details:
      'We provide guidance on e-waste recycling project planning, machinery requirements, environmental approvals, EPR obligations and documentation for applicable waste management operations.',
    services: [
      'E-Waste Recycling Plant Setup',
      'Recycling Machinery Planning',
      'Environmental Licensing',
      'EPR Compliance Assistance',
      'DPR & Project Feasibility',
      'Operational Compliance Guidance',
    ],
    icon: '▤',
  },
  {
    id: '04',
    title: 'Plastic Waste Recycling',
    category: 'PLASTIC RECYCLING',
    description:
      'Project consultancy for plastic recycling facilities and sustainable plastic waste management.',
    details:
      'We assist promoters with PET, HDPE, LDPE and PP recycling project planning, machinery selection, licensing requirements, plastic waste processing and EPR-related obligations.',
    services: [
      'Plastic Recycling Plant Consultancy',
      'PET, HDPE, LDPE & PP Processing',
      'Machinery Selection Guidance',
      'CTE & CTO Assistance',
      'Plastic EPR Registration',
      'Project Reports & Feasibility',
    ],
    icon: '♻',
  },
  {
    id: '05',
    title: 'Used Oil Recycling',
    category: 'OIL & INDUSTRIAL WASTE',
    description:
      'Regulatory and technical support for used oil recycling and industrial resource recovery projects.',
    details:
      'Our consultancy covers feasibility assessment, technology and machinery planning, applicable hazardous waste approvals and environmental compliance for used oil recycling projects.',
    services: [
      'Used Oil Recycling Consultancy',
      'Technology Assessment',
      'Hazardous Waste Authorization',
      'Environmental Approvals',
      'DPR & Feasibility Reports',
      'Regulatory Documentation',
    ],
    icon: '◉',
  },
  {
    id: '06',
    title: 'Industrial Waste Management',
    category: 'WASTE MANAGEMENT',
    description:
      'Environmental compliance and consultancy support for industrial waste processing and management operations.',
    details:
      'We help businesses understand applicable waste management regulations, identify licensing requirements and plan responsible industrial waste handling, processing and recycling projects.',
    services: [
      'Environmental Compliance',
      'Hazardous Waste Authorization',
      'Waste Processing Consultancy',
      'Consent to Establish & Operate',
      'Waste Management Planning',
      'Regulatory Documentation',
    ],
    icon: '▥',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Industry-Focused Guidance',
    description:
      'Consultancy tailored to the regulatory, technical and commercial requirements of different industries.',
  },
  {
    number: '02',
    title: 'Regulatory Support',
    description:
      'Assistance with identifying applicable environmental approvals, registration requirements and compliance obligations.',
  },
  {
    number: '03',
    title: 'Project Planning',
    description:
      'Support for DPR preparation, technical feasibility, machinery selection and implementation planning.',
  },
  {
    number: '04',
    title: 'Coordinated Solutions',
    description:
      'Bringing together project planning, environmental compliance and documentation requirements.',
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] =
    useState<string | null>(null);

  const selectedIndustry = industries.find(
    (industry) => industry.id === activeIndustry
  );

  const handleExplore = (id: string) => {
    setActiveIndustry((previous) =>
      previous === id ? null : id
    );

    window.setTimeout(() => {
      document
        .getElementById('industry-details')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }, 50);
  };

  return (
    <div className="w-full bg-background text-text-color">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-blue/5 to-primary-green/10 px-5 py-20 md:px-10 lg:px-20 lg:py-28">

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-green/15 px-4 py-2 text-xs font-extrabold tracking-widest text-dark-green">
              <span className="h-2 w-2 rounded-full bg-primary-green" />
              INDUSTRIES WE SERVE
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-dark-blue md:text-5xl lg:text-6xl">
              Supporting Industries.
              <span className="mt-2 block text-primary-blue">
                Enabling Sustainable Growth.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-text-color/75 md:text-lg">
              Compliance Mate provides environmental
              compliance, licensing and industrial project
              consultancy across renewable energy,
              recycling and waste-management sectors.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-green px-7 py-4 text-sm font-bold text-text-color transition-all hover:-translate-y-1 hover:bg-dark-green hover:text-white"
              >
                Discuss Your Project →
              </a>

              <a
                href="#/industries"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById('industry-categories')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    });
                }}
                className="inline-flex items-center rounded-lg border border-primary-blue/20 bg-white px-7 py-4 text-sm font-bold text-primary-blue transition-all hover:border-primary-blue hover:bg-primary-blue/5"
              >
                Explore Industries ↓
              </a>

            </div>

          </div>

          {/* DECORATIVE ELEMENTS */}

          <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-primary-green/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 right-48 h-64 w-64 rounded-full bg-primary-blue/10 blur-3xl" />

        </div>
      </section>

      {/* =====================================
          INDUSTRY CATEGORIES
      ===================================== */}

      <section
        id="industry-categories"
        className="scroll-mt-28 bg-white px-5 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="text-xs font-extrabold tracking-widest text-dark-green">
              OUR INDUSTRY EXPERTISE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue md:text-4xl">
              Industries We
              <span className="text-primary-blue">
                {' '}Support
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-text-color/70">
              Explore our consultancy areas across
              environmental compliance, recycling,
              renewable energy and industrial
              resource management.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (

              <article
                key={industry.id}
                className={`group flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  activeIndustry === industry.id
                    ? 'border-primary-green shadow-lg'
                    : 'border-primary-blue/10 hover:border-primary-green'
                }`}
              >

                <div className="flex items-start justify-between gap-4">

                  <span className="text-4xl font-extrabold text-primary-green">
                    {industry.id}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-2xl font-bold text-primary-blue transition-all group-hover:bg-primary-blue group-hover:text-white">
                    {industry.icon}
                  </div>

                </div>

                <span className="mt-6 w-fit rounded-md bg-primary-blue/10 px-3 py-2 text-[10px] font-extrabold tracking-wider text-primary-blue">
                  {industry.category}
                </span>

                <h3 className="mt-6 text-xl font-extrabold leading-snug text-dark-blue">
                  {industry.title}
                </h3>

                <p className="mt-4 flex-grow text-sm leading-7 text-text-color/70">
                  {industry.description}
                </p>

                <div className="my-6 h-px bg-primary-blue/10" />

                <button
                  type="button"
                  onClick={() => handleExplore(industry.id)}
                  aria-expanded={activeIndustry === industry.id}
                  className="inline-flex w-fit items-center gap-2 text-sm font-extrabold text-primary-blue transition-all hover:gap-3 hover:text-dark-green"
                >
                  {activeIndustry === industry.id
                    ? 'Hide Details'
                    : 'Explore Industry'}
                  <span aria-hidden="true">↗</span>
                </button>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================
          INDUSTRY DETAILS
      ===================================== */}

      {selectedIndustry && (
        <section
          id="industry-details"
          className="scroll-mt-28 bg-primary-blue/5 px-5 py-20 md:px-10 lg:px-20"
        >
          <div className="mx-auto max-w-7xl">

            <div className="rounded-3xl border border-primary-blue/10 bg-white p-7 shadow-lg md:p-12">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div>
                  <span className="text-xs font-extrabold tracking-widest text-dark-green">
                    INDUSTRY CONSULTANCY
                  </span>

                  <h2 className="mt-4 text-3xl font-extrabold text-dark-blue md:text-4xl">
                    {selectedIndustry.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIndustry(null)}
                  className="rounded-lg border border-primary-blue/15 px-4 py-2 text-sm font-semibold text-dark-blue hover:bg-primary-blue/5"
                >
                  Close ✕
                </button>
              </div>

              <p className="mt-6 max-w-4xl text-base leading-8 text-text-color/75">
                {selectedIndustry.details}
              </p>

              <h3 className="mt-10 text-xl font-extrabold text-dark-blue">
                How Compliance Mate Can Help
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {selectedIndustry.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-xl border border-primary-blue/10 bg-background p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-green/20 text-sm font-bold text-dark-green">
                      ✓
                    </span>

                    <span className="text-sm font-semibold leading-6 text-text-color">
                      {service}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href="#/contact"
                className="mt-10 inline-flex rounded-lg bg-primary-green px-7 py-4 text-sm font-extrabold text-text-color transition-colors hover:bg-dark-green hover:text-white"
              >
                Get Consultation for This Industry →
              </a>

            </div>

          </div>
        </section>
      )}

      {/* =====================================
          OUR APPROACH
      ===================================== */}

      <section className="bg-background px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="text-xs font-extrabold tracking-widest text-dark-green">
              WHY COMPLIANCE MATE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue md:text-4xl">
              Our Approach to
              <span className="text-primary-blue">
                {' '}Industry Consultancy
              </span>
            </h2>

            <p className="mt-5 leading-8 text-text-color/70">
              We focus on practical consultancy,
              structured project planning and
              regulatory guidance aligned with
              business requirements.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-primary-blue/10 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl font-extrabold text-primary-green">
                  {benefit.number}
                </span>

                <h3 className="mt-6 text-lg font-extrabold text-dark-blue">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-text-color/70">
                  {benefit.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="bg-gradient-to-br from-primary-blue to-dark-blue px-5 py-20 text-center text-white md:px-10 lg:px-20">

        <div className="mx-auto max-w-3xl">

          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold tracking-wider text-primary-green">
            START YOUR PROJECT WITH COMPLIANCE MATE
          </span>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Planning an Industrial
            <span className="block text-golden-yellow">
              or Recycling Project?
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/80">
            Whether you need environmental approvals,
            regulatory compliance, project feasibility
            or recycling plant consultancy, our team
            is ready to discuss your requirements.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="#/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-green px-7 py-4 text-sm font-extrabold text-text-color transition-all hover:-translate-y-1 hover:bg-dark-green hover:text-white"
            >
              Book a Consultation →
            </a>

            <a
              href="tel:+919773870268"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Call +91 9773870268
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}
