import StickyContactForm from '../components/stickyForm';
const contactBenefits = [
    'Environmental Licensing',
    'EPR Compliance',
    'CBG & Biogas Plant Setup',
    'Recycling Plant Consultancy',
    'DPR & Feasibility Reports',
    'Bank Loan Documentation',
];
// ==========================================
// CONTACT PAGE COMPONENT
// ==========================================
export default function ContactPage() {
    return (<section className="min-h-[75vh] bg-gradient-to-br from-white via-primary-blue/5 to-primary-green/10 px-5 py-16 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-16">
        <div>
          <span className="inline-block rounded-full bg-primary-green/15 px-4 py-2 text-xs font-extrabold tracking-wider text-dark-green">
            CONTACT COMPLIANCE MATE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-dark-blue md:text-5xl">
            Let's Discuss
            <span className="block text-primary-blue">
              Your Next Project.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-color/75">
            Looking for assistance with environmental compliance,
            licensing, compressed biogas plant development or
            recycling projects?
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-text-color/75">
            Compliance Mate provides consultancy and project
            planning support to help businesses understand
            regulatory requirements and make informed project
            decisions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactBenefits.map((benefit) => (<div key={benefit} className="flex items-center gap-3 rounded-xl border border-primary-blue/10 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-green/20 font-extrabold text-dark-green">
                  ✓
                </span>

                <span className="text-sm font-semibold text-dark-blue">
                  {benefit}
                </span>
              </div>))}
          </div>

          <a href="tel:+919773870268" className="mt-8 inline-flex rounded-lg bg-primary-green px-6 py-3 font-bold text-text-color transition-colors hover:bg-dark-green hover:text-white">
            Call +91 9773870268
          </a>
        </div>

        <div className="min-w-0">
          <StickyContactForm sticky={false}/>
        </div>
      </div>
    </section>);
}
