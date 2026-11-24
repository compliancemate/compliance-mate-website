
import { useEffect } from 'react';

// ==========================================
// COMPLIANCE MATE - HOME PAGE
// ==========================================

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'EPR Compliance',
    category: 'EPR CONSULTANCY',
    description:
      'EPR registration, compliance management, annual returns and recycling certificate support.',
  },
  {
    id: '02',
    title: 'Environmental Licensing',
    category: 'REGULATORY APPROVALS',
    description:
      'Assistance with CTE, CTO, hazardous waste authorization and environmental licensing.',
  },
  {
    id: '03',
    title: 'CBG & Biogas Plant Setup',
    category: 'RENEWABLE ENERGY',
    description:
      'Consultancy for compressed biogas plants, DPR preparation, technology selection and project planning.',
  },
  {
    id: '04',
    title: 'DPR & Feasibility Reports',
    category: 'PROJECT CONSULTANCY',
    description:
      'Bankable detailed project reports, CAPEX, OPEX, feasibility studies and financial projections.',
  },
  {
    id: '05',
    title: 'Lithium-Ion Battery Recycling',
    category: 'BATTERY RECYCLING',
    description:
      'Technical and regulatory support for battery recycling, black mass recovery and plant development.',
  },
  {
    id: '06',
    title: 'E-Waste Recycling',
    category: 'E-WASTE SOLUTIONS',
    description:
      'Project planning, machinery guidance, environmental approvals and EPR registration assistance.',
  },
  {
    id: '07',
    title: 'Plastic Waste Recycling',
    category: 'PLASTIC RECYCLING',
    description:
      'Consultancy for PET, HDPE, LDPE and PP recycling projects and associated compliance.',
  },
  {
    id: '08',
    title: 'Project Financing Assistance',
    category: 'FINANCIAL CONSULTANCY',
    description:
      'Support for bank loan documentation, applicable subsidies and financing coordination.',
  },
];

const industries = [
  'Compressed Biogas & Renewable Energy',
  'Lithium-Ion Battery Recycling',
  'E-Waste Recycling',
  'Plastic Waste Recycling',
  'Used Oil Recycling',
  'Industrial Waste Management',
];

const highlights = [
  {
    title: 'Regulatory Guidance',
    description:
      'Support for understanding environmental licensing and compliance obligations.',
  },
  {
    title: 'Technical Consultancy',
    description:
      'Assistance with project feasibility, machinery planning and technology evaluation.',
  },
  {
    title: 'Project Development',
    description:
      'Structured support from initial project planning through implementation coordination.',
  },
];

export default function Home() {
  // Scroll to the requested homepage section
  // when navigating from another page.
  useEffect(() => {
    const hash = window.location.hash;

    if (
      hash === '#services' ||
      hash === '#industries' ||
      hash === '#contact' ||
      hash === '#home'
    ) {
      const sectionId = hash.slice(1);

      const frame = requestAnimationFrame(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      });

      return () => cancelAnimationFrame(frame);
    }
  }, []);

  return (
    <div className="w-full bg-background text-text-color">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section
        id="home"
        className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-white via-primary-blue/5 to-primary-green/10 px-5 py-20 md:px-10 lg:px-20 lg:py-28"
      >
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-green/15 px-4 py-2 text-xs font-extrabold tracking-wider text-dark-green">
              <span className="h-2 w-2 rounded-full bg-primary-green" />
              COMPLIANCE · CONSULTANCY · SUSTAINABILITY
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-dark-blue md:text-5xl lg:text-6xl">
              Simplifying Compliance.
              <span className="mt-3 block text-primary-blue">
                Empowering Sustainable Growth.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-text-color/75 md:text-lg">
              Your partner for environmental compliance,
              licensing, project consultancy and recycling
              plant development. We help businesses move
              forward with clarity and confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg bg-primary-green px-7 py-4 text-sm font-extrabold text-text-color transition-all duration-300 hover:-translate-y-1 hover:bg-dark-green hover:text-white"
              >
                Explore Our Services →
              </a>

              <a
                href="#/about"
                className="inline-flex items-center justify-center rounded-lg border border-primary-blue/20 bg-white px-7 py-4 text-sm font-bold text-primary-blue transition-colors hover:bg-primary-blue/5"
              >
                About Compliance Mate ↗
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-text-color/75">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-green/20 font-bold text-dark-green">
                ✓
              </span>
              Practical guidance for compliance and
              sustainable project development
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="relative mx-auto w-full max-w-lg py-6">
            <div className="absolute inset-10 rounded-full bg-primary-green/20 blur-3xl" />

            <div className="relative rounded-3xl border border-primary-blue/10 bg-white p-8 shadow-2xl md:p-10">

              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue text-lg font-extrabold text-white">
                  CM
                </div>

                <span className="rounded-full bg-primary-green/15 px-3 py-2 text-xs font-bold text-dark-green">
                  Sustainable Solutions
                </span>
              </div>

              <div className="mx-auto mt-10 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-primary-blue/15 to-primary-green/25">
                <svg
                  viewBox="0 0 100 100"
                  className="h-28 w-28 text-dark-green"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="40" />
                  <ellipse cx="50" cy="50" rx="18" ry="40" />
                  <path d="M10 50h80M19 28h62M19 72h62" />
                  <path d="M40 38c7-13 24-17 30-7-4 12-15 18-30 17" />
                </svg>
              </div>

              <h2 className="mt-8 text-center text-2xl font-extrabold text-dark-blue">
                Building a Better Tomorrow
              </h2>

              <p className="mt-4 text-center text-sm leading-7 text-text-color/70">
                Compliance, innovation and sustainability
                working together.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {[
                  'Compliance',
                  'Innovation',
                  'Growth',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary-green/15 px-3 py-2 text-xs font-semibold text-dark-green"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          SERVICES SECTION
      ===================================== */}

      <section
        id="services"
        className="scroll-mt-28 bg-background px-5 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold tracking-widest text-dark-green">
              WHAT WE DO
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue md:text-4xl">
              Complete Solutions for
              <span className="text-primary-blue">
                {' '}Business Growth
              </span>
            </h2>

            <p className="mt-5 leading-8 text-text-color/70">
              We simplify complex compliance requirements
              and support businesses throughout their
              project-development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex h-full flex-col rounded-2xl border border-primary-blue/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-green hover:shadow-xl"
              >
                <span className="text-4xl font-extrabold text-primary-green">
                  {service.id}
                </span>

                <span className="mt-5 w-fit rounded-md bg-primary-blue/10 px-3 py-2 text-[10px] font-extrabold tracking-wider text-primary-blue">
                  {service.category}
                </span>

                <h3 className="mt-6 text-xl font-extrabold leading-snug text-dark-blue">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow text-sm leading-7 text-text-color/70">
                  {service.description}
                </p>

                <div className="my-6 h-px bg-primary-blue/10" />

                <a
                  href="#/contact"
                  className="inline-flex w-fit items-center gap-2 text-sm font-extrabold text-primary-blue transition-all hover:gap-3 hover:text-dark-green"
                >
                  Know More ↗
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          INDUSTRIES SECTION
      ===================================== */}

      <section
        id="industries"
        className="scroll-mt-28 bg-primary-blue/5 px-5 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold tracking-widest text-dark-green">
              INDUSTRIES WE SERVE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue md:text-4xl">
              Supporting Recycling &
              <span className="text-primary-blue">
                {' '}Sustainability
              </span>
            </h2>

            <p className="mt-5 leading-8 text-text-color/70">
              Consultancy across renewable energy,
              recycling and industrial waste-management
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <article
                key={industry}
                className="group relative rounded-2xl border border-primary-blue/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary-green hover:shadow-lg"
              >
                <span className="text-sm font-extrabold text-primary-green">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 pr-8 text-lg font-extrabold text-dark-blue">
                  {industry}
                </h3>

                <span className="absolute right-7 top-7 text-2xl text-primary-blue transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#/industries"
              className="inline-flex rounded-lg bg-primary-blue px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-dark-blue"
            >
              Explore All Industries →
            </a>
          </div>

        </div>
      </section>

      {/* =====================================
          ABOUT US PREVIEW
      ===================================== */}

      <section
        id="about"
        className="scroll-mt-28 bg-background px-5 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-xs font-extrabold tracking-widest text-dark-green">
              ABOUT COMPLIANCE MATE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-dark-blue md:text-4xl">
              Your Compliance Challenges.
              <span className="mt-2 block text-primary-blue">
                Our Commitment.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-text-color/75">
              Compliance Mate supports businesses with
              environmental licensing, regulatory compliance,
              compressed biogas projects and sustainable
              industrial development.
            </p>

            <p className="mt-4 leading-8 text-text-color/75">
              Our goal is to simplify complex requirements
              through practical consultancy, structured
              planning and project-focused solutions.
            </p>

            <a
              href="#/about"
              className="mt-8 inline-flex rounded-lg bg-primary-green px-7 py-4 text-sm font-bold text-text-color transition-colors hover:bg-dark-green hover:text-white"
            >
              Learn More About Us →
            </a>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-primary-blue to-dark-blue p-10 text-center text-white md:p-14">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/40 text-4xl font-extrabold">
              CM
            </div>

            <h3 className="mt-8 text-2xl font-extrabold text-white">
              Compliance Meets Sustainability
            </h3>

            <p className="mt-5 leading-8 text-white/80">
              Helping businesses make informed decisions
              for a responsible and sustainable future.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {[
                'Compliance',
                'Consultancy',
                'Sustainability',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 px-3 py-2 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          WHY CHOOSE US
      ===================================== */}

      <section className="bg-primary-green/10 px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold tracking-widest text-dark-green">
              WHY COMPLIANCE MATE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue md:text-4xl">
              Your Partner for
              <span className="text-primary-blue">
                {' '}Sustainable Growth
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="rounded-2xl border border-primary-blue/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl font-extrabold text-primary-green">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-6 text-xl font-extrabold text-dark-blue">
                  {highlight.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-text-color/70">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          BLOG PREVIEW
      ===================================== */}

      <section className="bg-background px-5 py-20 text-center md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">

          <span className="text-xs font-extrabold tracking-widest text-dark-green">
            KNOWLEDGE & INSIGHTS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-dark-blue md:text-4xl">
            Explore Our Latest
            <span className="text-primary-blue">
              {' '}Industry Insights
            </span>
          </h2>

          <p className="mt-5 leading-8 text-text-color/75">
            Discover information about environmental
            compliance, recycling technologies,
            compressed biogas plants and sustainable
            industrial projects.
          </p>

          <a
            href="#/blogs"
            className="mt-8 inline-flex rounded-lg bg-primary-blue px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-dark-blue"
          >
            Explore Our Blogs →
          </a>

        </div>
      </section>

      {/* =====================================
          FINAL CONTACT CTA
      ===================================== */}

      <section
        id="contact"
        className="scroll-mt-28 bg-gradient-to-br from-primary-blue to-dark-blue px-5 py-20 text-center text-white md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-3xl">

          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold tracking-wider text-primary-green">
            LET'S WORK TOGETHER
          </span>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Have a Project in Mind?
            <span className="mt-2 block text-golden-yellow">
              Let's Make It Happen.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/80">
            Connect with Compliance Mate for environmental
            compliance, industrial licensing, CBG plant
            setup, DPR preparation and recycling project
            requirements.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-green px-7 py-4 text-sm font-extrabold text-text-color transition-colors hover:bg-dark-green hover:text-white"
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
