
import { useEffect, useState } from 'react';

interface NavbarProps {
  logoSrc?: string;
}

const navigationLinks = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About Us',
    href: '#/about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Industries',
    href: '#/industries',
  },
  {
    name: 'Blogs',
    href: '#/blogs',
  },
  {
    name: 'Contact Us',
    href: '#/contact',
  },
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
    name: 'DPR & Project Feasibility',
    href: '#services',
  },
];

const blogMenu = [
  {
    title: 'All Blogs',
    href: '#/blogs',
  },
  {
    title: 'Biogas',
    children: [
      {
        title: 'CBG Bank Loan Assistance',
        href: '#/blogs/compressed-biogas-plant-bank-loan-assistance',
      },
      {
        title: 'CBG Machinery & Plant Setup',
        href: '#/blogs/compressed-biogas-plant-machinery-setup',
      },
      {
        title: 'CBG Planning & Feasibility',
        href: '#/blogs/compressed-biogas-project-planning-and-feasibility',
      },
      {
        title: 'CBG Subsidies & Incentives',
        href: '#/blogs/compressed-biogas-subsidies-and-incentives',
      },
    ],
  },
  {
    title: 'License & Certification',
    children: [],
  },
];


export default function Navbar({
  logoSrc,
}: NavbarProps) {
  const [currentHash, setCurrentHash] = useState(
    () => window.location.hash || '#home'
  );

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [blogsOpen, setBlogsOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || '#home');
      setMobileMenuOpen(false);
      setServicesOpen(false);
      setBlogsOpen(false);
      setMobileBlogsOpen(false);
    };

    window.addEventListener(
      'hashchange',
      updateHash
    );

    return () => {
      window.removeEventListener(
        'hashchange',
        updateHash
      );
    };
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setBlogsOpen(false);
    setMobileBlogsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '#services') {
      return (
        currentHash === '#services' ||
        currentHash.startsWith('#/services/')
      );
    }

    if (href === '#/blogs') {
      return (
        currentHash === '#/blogs' ||
        currentHash.startsWith('#/blogs/')
      );
    }

    return currentHash === href;
  };

  const navLinkClass = (href: string) =>
    `relative rounded-lg px-3 py-2 text-sm font-semibold
     transition-colors duration-200
     ${
       isActive(href)
         ? 'bg-primary-blue/10 text-primary-blue'
         : 'text-text-color hover:bg-primary-blue/5 hover:text-primary-blue'
     }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-blue/10 bg-background shadow-[0_4px_20px_rgba(0,38,94,0.06)]">

      {/* MAIN NAVBAR */}

      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}

        <a
          href="#home"
          onClick={closeMenus}
          className="flex min-w-0 shrink-0 items-center gap-2"
          aria-label="Compliance Mate - Home"
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Compliance Mate Logo"
              className="block h-14 w-auto max-w-[180px] object-contain sm:h-16 sm:max-w-[220px]"
              loading="eager"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue text-lg font-extrabold text-white">
              CM
            </div>
          )}

          {!logoSrc && (
            <div className="hidden sm:block">
              <strong className="block text-base font-extrabold leading-tight text-dark-blue">
                COMPLIANCE MATE
              </strong>

              <span className="block text-[9px] font-bold tracking-wider text-dark-green">
                COMPLIANCE · SUSTAINABILITY
              </span>
            </div>
          )}
        </a>

        {/* DESKTOP NAVIGATION */}

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => {
            if (link.name === 'Services') {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    setServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    setServicesOpen(false)
                  }
                >
                  <div className="flex items-center">

                    <a
                      href={link.href}
                      className={navLinkClass(link.href)}
                      onClick={closeMenus}
                    >
                      Services
                    </a>

                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={servicesOpen}
                      onClick={() =>
                        setServicesOpen(
                          (previous) => !previous
                        )
                      }
                      className="rounded-md p-1 text-dark-blue hover:bg-primary-blue/10"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                  </div>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full w-72 pt-3">

                      <div className="overflow-hidden rounded-xl border border-primary-blue/10 bg-white p-2 shadow-xl">

                        <div className="border-b border-primary-blue/10 px-3 py-3">
                          <p className="text-xs font-extrabold tracking-wider text-dark-green">
                            OUR SERVICES
                          </p>
                        </div>

                        {serviceLinks.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={closeMenus}
                            className="block rounded-lg px-3 py-3 text-sm font-semibold text-text-color transition-colors hover:bg-primary-green/15 hover:text-dark-blue"
                          >
                            {service.name}
                          </a>
                        ))}

                        <a
                          href="#services"
                          onClick={closeMenus}
                          className="mt-2 block rounded-lg bg-primary-blue px-4 py-3 text-center text-xs font-bold text-white hover:bg-dark-blue"
                        >
                          View All Services →
                        </a>

                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.name === 'Blogs') {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    setBlogsOpen(true);
                    setServicesOpen(false);
                  }}
                  onMouseLeave={() => setBlogsOpen(false)}
                >
                  <div className="flex items-center">
                    <a
                      href="#/blogs"
                      onClick={closeMenus}
                      className={navLinkClass('#/blogs')}
                      aria-current={isActive('#/blogs') ? 'page' : undefined}
                    >
                      Blogs
                    </a>
                    <button
                      type="button"
                      aria-label="Toggle blogs menu"
                      aria-expanded={blogsOpen}
                      aria-controls="cm-desktop-blogs"
                      onClick={() => {
                        setBlogsOpen((previous) => !previous);
                        setServicesOpen(false);
                      }}
                      className="rounded-md p-1 text-dark-blue hover:bg-primary-blue/10"
                    >
                      <svg
                        width="15" height="15" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform ${blogsOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  {blogsOpen && (
                    <div id="cm-desktop-blogs" className="absolute left-0 top-full z-50 w-80 pt-3">
                      <div className="max-h-[75vh] overflow-y-auto rounded-xl border border-primary-blue/10 bg-white p-2 shadow-xl">
                        <p className="border-b border-primary-blue/10 px-3 py-3 text-xs font-extrabold tracking-wider text-dark-green">
                          EXPLORE OUR BLOGS
                        </p>
                        {blogMenu.map((section) =>
                          section.href ? (
                            <a
                              key={section.title}
                              href={section.href}
                              onClick={closeMenus}
                              className="my-1 block rounded-lg bg-primary-blue/10 px-3 py-3 text-sm font-bold text-primary-blue hover:bg-primary-green/15"
                            >
                              {section.title}
                            </a>
                          ) : (
                            <details key={section.title} className="group/category border-b border-slate-100 last:border-0" open={section.title === 'Biogas'}>
                              <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-sm font-bold text-dark-blue hover:bg-primary-green/10 [&::-webkit-details-marker]:hidden">
                                {section.title}
                                <span className="text-xs text-primary-blue group-open/category:rotate-180">⌄</span>
                              </summary>
                              <div className="pb-2 pl-3">
                                {section.children?.length ? (
                                  section.children.map((article) => (
                                    <a
                                      key={article.href}
                                      href={article.href}
                                      onClick={closeMenus}
                                      className="block rounded-lg px-3 py-2.5 text-xs leading-5 text-text-color/80 hover:bg-primary-blue/5 hover:text-primary-blue"
                                    >
                                      {article.title}
                                    </a>
                                  ))
                                ) : (
                                  <p className="px-3 py-3 text-xs text-slate-500">New articles coming soon.</p>
                                )}
                              </div>
                            </details>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenus}
                className={navLinkClass(link.href)}
                aria-current={
                  isActive(link.href) ? 'page' : undefined
                }
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}

        <div className="flex shrink-0 items-center gap-2">

          <a
            href="#/contact"
            onClick={closeMenus}
            className="hidden items-center justify-center gap-2 rounded-lg bg-primary-green px-4 py-3 text-xs font-extrabold text-text-color transition-all duration-300 hover:-translate-y-0.5 hover:bg-dark-green hover:text-white hover:shadow-lg sm:inline-flex xl:px-5 xl:text-sm"
          >
            Get Consultation
            <span aria-hidden="true">↗</span>
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                (previous) => !previous
              )
            }
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="cm-mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary-blue/15 bg-white text-dark-blue transition-colors hover:bg-primary-blue/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}

      {mobileMenuOpen && (
        <nav
          id="cm-mobile-navigation"
          className="border-t border-primary-blue/10 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {navigationLinks.map((link) => (
              <div key={link.name}>

                <a
                  href={link.href}
                  onClick={closeMenus}
                  className={`block rounded-lg px-4 py-3 text-sm font-bold ${
                    isActive(link.href)
                      ? 'bg-primary-blue/10 text-primary-blue'
                      : 'text-dark-blue hover:bg-primary-green/10'
                  }`}
                >
                  {link.name}
                </a>

                {/* MOBILE BLOGS DROPDOWN */}
                {link.name === 'Blogs' && (
                  <div className="ml-4 border-l-2 border-primary-green/40 pl-3">
                    <button
                      type="button"
                      onClick={() => setMobileBlogsOpen((previous) => !previous)}
                      aria-expanded={mobileBlogsOpen}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs font-bold text-dark-blue hover:bg-primary-blue/5"
                    >
                      Browse Blog Categories
                      <span aria-hidden="true">{mobileBlogsOpen ? '▲' : '▼'}</span>
                    </button>
                    {mobileBlogsOpen && (
                      <div className="pb-2">
                        {blogMenu.map((section) =>
                          section.href ? (
                            <a
                              key={section.title}
                              href={section.href}
                              onClick={closeMenus}
                              className="block rounded-lg px-3 py-2.5 text-xs font-semibold text-primary-blue hover:bg-primary-blue/5"
                            >
                              {section.title}
                            </a>
                          ) : (
                            <details key={section.title} open={section.title === 'Biogas'}>
                              <summary className="cursor-pointer rounded-lg px-3 py-2.5 text-xs font-bold text-dark-green">
                                {section.title}
                              </summary>
                              <div className="pl-3">
                                {section.children?.length ? (
                                  section.children.map((article) => (
                                    <a
                                      key={article.href}
                                      href={article.href}
                                      onClick={closeMenus}
                                      className="block rounded-lg px-3 py-2.5 text-xs leading-5 text-text-color/80 hover:bg-primary-blue/5"
                                    >
                                      {article.title}
                                    </a>
                                  ))
                                ) : (
                                  <p className="px-3 py-2 text-xs text-slate-500">New articles coming soon.</p>
                                )}
                              </div>
                            </details>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* MOBILE SERVICE SUBLINKS */}

                {link.name === 'Services' && (
                  <div className="ml-4 border-l-2 border-primary-green/40 pl-3">

                    {serviceLinks.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        onClick={closeMenus}
                        className="block rounded-lg px-3 py-2.5 text-xs font-semibold text-text-color/75 hover:bg-primary-blue/5 hover:text-primary-blue"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#/contact"
              onClick={closeMenus}
              className="mt-3 flex items-center justify-center rounded-lg bg-primary-green px-5 py-3.5 text-sm font-extrabold text-text-color hover:bg-dark-green hover:text-white"
            >
              Book Consultation →
            </a>

          </div>
        </nav>
      )}
    </header>
  );
}
