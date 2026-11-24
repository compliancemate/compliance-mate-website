import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import * as BlogsModule from './Pages/Blogs/Blogs';

import logo from './assets/Logo.png';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/Aboutus/Aboutus';
import Industries from './Pages/Industries/Industries';
import StickyContactForm from './components/stickyForm';
// The existing Blogs.tsx currently has no default export.
// This accepts a named Blogs/Blog/BlogPage export as well, if present.
const blogExports = BlogsModule as unknown as {
  default?: ComponentType;
  Blogs?: ComponentType;
  Blog?: ComponentType;
  BlogPage?: ComponentType;
};
const BlogsPage =
  blogExports.default ??
  blogExports.Blogs ??
  blogExports.BlogPage ??
  blogExports.Blog;

const contactBenefits = [
  'Environmental Licensing',
  'EPR Compliance',
  'CBG & Biogas Plant Setup',
  'Recycling Plant Consultancy',
  'DPR & Feasibility Reports',
  'Bank Loan Documentation',
];

function ContactPage() {
  return (
    <section className="min-h-[75vh] bg-gradient-to-br from-white via-primary-blue/5 to-primary-green/10 px-5 py-16 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-16">
        <div>
          <span className="inline-block rounded-full bg-primary-green/15 px-4 py-2 text-xs font-extrabold tracking-wider text-dark-green">
            CONTACT COMPLIANCE MATE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-dark-blue md:text-5xl">
            Let's Discuss
            <span className="block text-primary-blue">Your Next Project.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-color/75">
            Looking for assistance with environmental compliance, licensing,
            compressed biogas plant development or recycling projects?
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-text-color/75">
            Compliance Mate provides consultancy and project planning support
            to help businesses understand regulatory requirements and make
            informed project decisions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-primary-blue/10 bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-green/20 font-extrabold text-dark-green">
                  ✓
                </span>
                <span className="text-sm font-semibold text-dark-blue">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <a
            href="tel:+919773870268"
            className="mt-8 inline-flex rounded-lg bg-primary-green px-6 py-3 font-bold text-text-color transition-colors hover:bg-dark-green hover:text-white"
          >
            Call +91 9773870268
          </a>
        </div>

        <div className="min-w-0">
          <StickyContactForm sticky={false} />
        </div>
      </div>
    </section>
  );
}

function BlogFallback() {
  return (
    <section className="min-h-[65vh] bg-background px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-dark-blue">Industry Insights</h1>
      <p className="mx-auto mt-5 max-w-xl leading-8 text-text-color/75">
        Explore environmental compliance, biogas and recycling insights.
        To display articles here, export a React component named Blogs, BlogPage, or Blog
        (or as the default) from Pages/Blogs/Blogs.tsx.
      </p>
      <a
        href="#/contact"
        className="mt-8 inline-flex rounded-lg bg-primary-green px-6 py-3 font-bold text-text-color hover:bg-dark-green hover:text-white"
      >
        Contact Us →
      </a>
    </section>
  );
}

function getHash() {
  return window.location.hash || '#home';
}

export default function App() {
  const [currentHash, setCurrentHash] = useState(getHash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(getHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isAboutPage = currentHash === '#/about';
  const isBlogsPage =
    currentHash === '#/blogs' || currentHash.startsWith('#/blogs/');
  const isContactPage = currentHash === '#/contact';
  const isIndustriesPage = currentHash === '#/industries';
  const isHomepage =
    !isAboutPage && !isBlogsPage && !isContactPage && !isIndustriesPage;

  useEffect(() => {
    if (!isHomepage) {
      window.scrollTo(0, 0);
      return;
    }

    const sectionId = currentHash.startsWith('#/')
      ? 'home'
      : currentHash.slice(1) || 'home';

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [currentHash, isHomepage]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-text-color">
      <Navbar logoSrc={logo} />
      <main className="min-w-0 flex-1">
        {isAboutPage ? (
          <About />
        ) : isContactPage ? (
          <ContactPage />
        ) : isIndustriesPage ? (
          <Industries />
        ) : isBlogsPage ? (
          BlogsPage ? <BlogsPage /> : <BlogFallback />
        ) : (
          <Home />
        )}
      </main>
      <Footer logoSrc={logo} />
    </div>
  );
}
