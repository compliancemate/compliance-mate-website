
import { useState } from 'react';

interface FooterProps {
  logoSrc?: string;
}

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#/about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Blogs', href: '#/blogs' },
  { name: 'Contact Us', href: '#/contact' },
];

const serviceLinks = [
  {
    name: 'CBG & Biogas Plant Setup',
    href: '#/services/biogas',
  },
  {
    name: 'Licensing & Certification',
    href: '#/services/licensing-certification',
  },
  {
    name: 'EPR Compliance',
    href: '#services',
  },
  {
    name: 'DPR & Feasibility Reports',
    href: '#services',
  },
  {
    name: 'Recycling Plant Consultancy',
    href: '#services',
  },
];

const PHONE_NUMBER = '9773870268';

export default function Footer({
  logoSrc,
}: FooterProps) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Newsletter integration is not configured.
    // Redirect to the Contact Us page instead.
    window.location.hash = '#/contact';
  };

  return (
    <footer className="relative overflow-hidden bg-dark-blue text-white">

      {/* TOP GRADIENT BORDER */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-blue via-primary-green to-accent-orange" />

      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* COMPANY INFORMATION */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Compliance Mate Homepage"
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="Compliance Mate Logo"
                  className="h-16 w-auto max-w-48 rounded-md bg-white p-1.5 object-contain"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-blue text-xl font-extrabold text-white ring-1 ring-white/20">
                  CM
                </div>
              )}

              {!logoSrc && (
                <div>
                  <strong className="block text-lg font-extrabold leading-tight text-white">
                    COMPLIANCE MATE
                  </strong>

                  <span className="block text-[10px] font-semibold tracking-wider text-primary-green">
                    COMPLIANCE · SUSTAINABILITY
                  </span>
                </div>
              )}
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
              Compliance Mate provides consultancy for
              environmental compliance, regulatory licensing,
              compressed biogas projects, recycling plant
              development and sustainable industrial growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Compliance',
                'Consultancy',
                'Sustainability',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold text-white/85"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base font-extrabold text-primary-green">
              Quick Links
            </h3>

            <div className="mt-4 h-0.5 w-12 bg-accent-orange" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-golden-yellow"
                  >
                    <span className="text-primary-green transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-base font-extrabold text-primary-green">
              Our Services
            </h3>

            <div className="mt-4 h-0.5 w-12 bg-accent-orange" />

            <ul className="mt-6 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group inline-flex items-start gap-2 text-sm leading-6 text-white/75 transition-colors hover:text-golden-yellow"
                  >
                    <span className="text-primary-green transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div>
            <h3 className="text-base font-extrabold text-primary-green">
              Contact Us
            </h3>

            <div className="mt-4 h-0.5 w-12 bg-accent-orange" />

            <p className="mt-6 text-sm leading-7 text-white/75">
              Need help with environmental licensing,
              EPR registration, biogas plant setup or
              recycling project consultancy?
            </p>

            <a
              href={`tel:+91${PHONE_NUMBER}`}
              className="mt-5 flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-golden-yellow"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.8a2 2 0 0 1-.45 2.11L9.09 10.9a16 16 0 0 0 4 4l1.27-1.22a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.68A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>

              +91 {PHONE_NUMBER}
            </a>

            <a
              href="#/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-green px-5 py-3 text-sm font-extrabold text-text-color transition-all hover:-translate-y-0.5 hover:bg-dark-green hover:text-white"
            >
              Get Consultation ↗
            </a>
          </div>
        </div>

        {/* CONTACT / UPDATES STRIP */}
        <div className="mt-14 grid grid-cols-1 items-center gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Have a Project in Mind?
            </h3>

            <p className="mt-2 text-sm leading-7 text-white/70">
              Discuss your compliance, licensing or
              sustainable industrial project with our team.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white px-4 py-3 text-sm text-text-color outline-none transition-all placeholder:text-text-color/45 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            />

            <button
              type="submit"
              className="shrink-0 rounded-lg bg-primary-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-green hover:text-text-color"
            >
              Contact Us →
            </button>
          </form>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/15 pt-7 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Compliance Mate.
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs font-medium text-white/65">
            <a
              href="#/about"
              className="transition-colors hover:text-golden-yellow"
            >
              About Us
            </a>

            <a
              href="#/contact"
              className="transition-colors hover:text-golden-yellow"
            >
              Contact Us
            </a>

            <a
              href="#/blogs"
              className="transition-colors hover:text-golden-yellow"
            >
              Blogs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
