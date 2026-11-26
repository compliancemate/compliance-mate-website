import logo from '../assets/Logo.png';
// Compliance Mate — About Us page
// React + TypeScript + Tailwind CSS v4
// Uses theme colors defined in src/index.css.
const expertise = [
    {
        number: '01',
        title: 'Environmental Compliance',
        description: 'Complete assistance with EPR compliance, environmental regulations, statutory registrations, annual returns and regulatory filings.',
    },
    {
        number: '02',
        title: 'Licensing & Certification',
        description: 'Guidance for Consent to Establish, Consent to Operate, Hazardous Waste Authorization and other applicable environmental approvals.',
    },
    {
        number: '03',
        title: 'CBG & Biogas Plant Consultancy',
        description: 'Assistance with biogas plant planning, bankable DPR preparation, technology selection, financing documentation and project development.',
    },
    {
        number: '04',
        title: 'Recycling Plant Development',
        description: 'Technical and regulatory consultancy for lithium-ion battery, e-waste, plastic and other waste recycling projects.',
    },
    {
        number: '05',
        title: 'DPR & Project Feasibility',
        description: 'Detailed project reports, technical feasibility assessments, CAPEX, OPEX and financial projections.',
    },
    {
        number: '06',
        title: 'Project Financing Assistance',
        description: 'Support for bank loan documentation, applicable subsidy opportunities and project financing coordination.',
    },
];
const values = [
    {
        icon: '◈',
        title: 'Transparency',
        description: 'Clear communication, ethical practices and practical guidance throughout the consultancy process.',
    },
    {
        icon: '◎',
        title: 'Client-Focused Approach',
        description: 'Understanding business requirements and providing solutions aligned with project objectives.',
    },
    {
        icon: '✦',
        title: 'Professional Excellence',
        description: 'Structured planning, technical understanding and attention to detail in every assignment.',
    },
    {
        icon: '↗',
        title: 'Sustainable Growth',
        description: 'Supporting responsible industrial development and environmentally conscious businesses.',
    },
];
const workingProcess = [
    {
        number: '01',
        title: 'Understand Your Requirements',
        description: 'We understand your business objectives, project requirements and regulatory obligations.',
    },
    {
        number: '02',
        title: 'Evaluate & Plan',
        description: 'We assess technical feasibility, licensing requirements, documentation and project planning.',
    },
    {
        number: '03',
        title: 'Develop a Roadmap',
        description: 'We prepare a structured plan covering approvals, project development and implementation requirements.',
    },
    {
        number: '04',
        title: 'Support Project Execution',
        description: 'We provide consultancy and coordination support throughout the agreed stages of your project.',
    },
];
export default function About() {
    const scrollToStory = () => {
        document.getElementById('about-story')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (<div className="w-full overflow-hidden bg-background text-text-color">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-primary-blue/5 to-primary-green/15 px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <span className="text-xs font-extrabold tracking-[0.18em] text-dark-green">
              GET TO KNOW COMPLIANCE MATE
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-dark-blue sm:text-5xl xl:text-6xl">
              Your Partner in Compliance.
              <span className="mt-2 block text-primary-blue">
                Your Path to Sustainable Growth.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-text-color/75 sm:text-lg">
              Compliance Mate provides environmental compliance, industrial licensing and sustainable project consultancy services to help businesses navigate complex regulatory requirements and develop responsible industrial operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={scrollToStory} className="rounded-lg bg-primary-green px-6 py-4 text-sm font-bold text-text-color transition hover:-translate-y-0.5 hover:bg-dark-green hover:text-white">
                Discover Our Approach →
              </button>
              <a href="/contact" className="rounded-lg border border-primary-blue px-6 py-4 text-sm font-bold text-primary-blue transition hover:bg-primary-blue hover:text-white">
                Get Consultation ↗
              </a>
            </div>
          </div>
          <div className="hidden justify-center lg:flex" aria-hidden="true">
            <div className="flex aspect-square w-full max-w-72 flex-col items-center justify-center rounded-full border-[12px] border-white/60 bg-gradient-to-br from-primary-blue to-dark-blue text-white shadow-2xl">
              <span className="flex w-[76%] items-center rounded-2xl bg-white p-3 shadow-lg"><img src={logo} alt="" className="w-full object-contain"/></span>
              <span className="mt-4 text-xs font-bold tracking-[0.2em]">COMPLIANCE MATE</span>
              <span className="mt-4 h-2 w-20 rounded-full bg-primary-green"/>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about-story" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-primary-blue to-dark-blue px-7 py-12 text-center text-white shadow-lg sm:min-h-96">
            <span className="flex h-20 w-40 items-center rounded-xl bg-white p-3"><img src={logo} alt="Compliance Mate" className="w-full object-contain"/></span>
            <h2 className="mt-7 text-2xl font-bold text-white">Compliance Meets Sustainability</h2>
            <p className="mt-4 max-w-sm leading-8 text-white/80">
              Bridging environmental responsibility, regulatory compliance and sustainable industrial development.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {['Compliance', 'Consultancy', 'Sustainability'].map((tag) => (<span key={tag} className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">{tag}</span>))}
            </div>
          </div>
          <div>
            <span className="text-xs font-extrabold tracking-[0.18em] text-dark-green">WHO WE ARE</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-dark-blue sm:text-4xl">
              Simplifying Complexity. <span className="text-primary-blue">Enabling Progress.</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-8 text-text-color/75 sm:text-base">
              <p>Compliance Mate is an environmental compliance and industrial project consultancy dedicated to assisting businesses with regulatory approvals, environmental licensing and sustainable infrastructure development.</p>
              <p>We understand that establishing a recycling facility, compressed biogas plant or other industrial project involves several technical, financial and statutory requirements.</p>
              <p>Our objective is to simplify these complex processes by providing structured guidance, practical consultancy and coordinated project-development support.</p>
              <p>From the initial feasibility assessment and Detailed Project Report to environmental licensing and project planning, Compliance Mate aims to help businesses make informed decisions at every stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-primary-blue/5 px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold tracking-[0.18em] text-dark-green">OUR PURPOSE</span>
            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue sm:text-4xl">
              Driven by Purpose. <span className="text-primary-blue">Focused on Progress.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-primary-blue/10 bg-white p-8 shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-green/20 font-extrabold text-dark-green">01</span>
              <h3 className="mt-6 text-2xl font-bold text-dark-blue">Our Mission</h3>
              <p className="mt-4 text-sm leading-8 text-text-color/75 sm:text-base">Our mission is to simplify environmental compliance and industrial project development by providing accessible, practical and reliable consultancy services.</p>
              <p className="mt-4 text-sm leading-8 text-text-color/75 sm:text-base">We strive to help businesses understand their regulatory responsibilities, plan sustainable operations and pursue industrial opportunities with confidence.</p>
            </article>
            <article className="rounded-2xl border border-primary-blue/10 bg-white p-8 shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-green/20 font-extrabold text-dark-green">02</span>
              <h3 className="mt-6 text-2xl font-bold text-dark-blue">Our Vision</h3>
              <p className="mt-4 text-sm leading-8 text-text-color/75 sm:text-base">Our vision is to contribute to a future where environmental responsibility and industrial development work together.</p>
              <p className="mt-4 text-sm leading-8 text-text-color/75 sm:text-base">We aspire to support sustainable industries, renewable energy projects and circular economy initiatives through professional consultancy and responsible business practices.</p>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold tracking-[0.18em] text-dark-green">OUR EXPERTISE</span>
            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue sm:text-4xl">
              Comprehensive Support for <span className="text-primary-blue">Sustainable Businesses</span>
            </h2>
            <p className="mt-5 leading-8 text-text-color/70">From environmental regulatory approvals to industrial project planning, we provide consultancy across multiple sectors.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (<article key={item.number} className="rounded-2xl border border-primary-blue/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-green hover:shadow-lg">
                <span className="text-3xl font-extrabold text-primary-green">{item.number}</span>
                <h3 className="mt-6 text-xl font-bold text-dark-blue">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-color/75">{item.description}</p>
              </article>))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-primary-green/10 px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold tracking-[0.18em] text-dark-green">WHY CHOOSE COMPLIANCE MATE</span>
            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue sm:text-4xl">Our Core <span className="text-primary-blue">Values</span></h2>
            <p className="mt-5 leading-8 text-text-color/70">Our professional approach is guided by transparency, client-focused solutions, responsible development and long-term business relationships.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (<article key={value.title} className="rounded-2xl border border-primary-blue/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-green/20 text-2xl font-bold text-dark-green" aria-hidden="true">{value.icon}</span>
                <h3 className="mt-6 text-lg font-bold text-dark-blue">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-color/75">{value.description}</p>
              </article>))}
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold tracking-[0.18em] text-dark-green">OUR WORKING PROCESS</span>
            <h2 className="mt-4 text-3xl font-extrabold text-dark-blue sm:text-4xl">A Structured Approach to <span className="text-primary-blue">Every Project</span></h2>
            <p className="mt-5 leading-8 text-text-color/70">We follow a project-focused consultancy process designed to simplify requirements and provide clarity throughout each stage.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workingProcess.map((step) => (<article key={step.number} className="relative rounded-2xl border border-primary-blue/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-green hover:shadow-lg">
                <span className="text-3xl font-extrabold text-primary-green">{step.number}</span>
                <h3 className="mt-6 text-lg font-bold text-dark-blue">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-color/75">{step.description}</p>
              </article>))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-primary-blue to-dark-blue px-5 py-20 text-center text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-extrabold tracking-[0.18em] text-primary-green">LET'S WORK TOGETHER</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Have a Compliance or <span className="text-golden-yellow">Recycling Project in Mind?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">Whether you are planning a CBG plant, recycling facility or seeking environmental licenses and regulatory approvals, Compliance Mate is ready to discuss your project requirements.</p>
          <a href="/contact" className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-green px-7 py-4 text-sm font-bold text-text-color transition hover:-translate-y-0.5 hover:bg-dark-green hover:text-white">
            Get Expert Consultation →
          </a>
        </div>
      </section>
    </div>);
}
