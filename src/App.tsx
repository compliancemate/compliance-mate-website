import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';

import logo from './assets/Logo.png';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/Aboutus/Aboutus';
import Industries from './Pages/Industries/Industries';
import StickyContactForm from './components/stickyForm';

// ==========================================
// COMPRESSED BIOGAS BLOG IMPORTS
// ==========================================

import CBGLoanAssistance from './Pages/Blogs/Biogas/compressed-biogas-plant-bank-loan-assistance';

import CBGPlantSetup from './Pages/Blogs/Biogas/compressed-biogas-plant-machinery-setup';

import CBGProjectFeasibility from './Pages/Blogs/Biogas/compressed-biogas-project-planning-and-feasibility';

import CBGSubsidies from './Pages/Blogs/Biogas/compressed-biogas-subsidies-and-incentives';

// ==========================================
// BLOG SLUG ROUTING
// ==========================================

const cbgBlogPages: Record<string, ComponentType> = {
  'compressed-biogas-plant-bank-loan-assistance':
    CBGLoanAssistance,

  'compressed-biogas-plant-machinery-setup':
    CBGPlantSetup,

  'compressed-biogas-project-planning-and-feasibility':
    CBGProjectFeasibility,

  'compressed-biogas-subsidies-and-incentives':
    CBGSubsidies,
};

// ==========================================
// BLOG LISTING DATA
// ==========================================

const cbgBlogs = [
  {
    id: 1,
    title: 'Compressed Biogas Plant Bank Loan Assistance',
    slug: 'compressed-biogas-plant-bank-loan-assistance',
    category: 'CBG FINANCING',
    description:
      'Explore CBG bank loans, SATAT financing, lender eligibility, project documentation and financial assistance.',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Compressed Biogas Plant Machinery and Setup',
    slug: 'compressed-biogas-plant-machinery-setup',
    category: 'CBG MACHINERY',
    description:
      'Understand CBG plant machinery, anaerobic digestion, gas upgrading, compression, equipment selection and approvals.',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'Compressed Biogas Project Planning and Feasibility',
    slug: 'compressed-biogas-project-planning-and-feasibility',
    category: 'PROJECT FEASIBILITY',
    description:
      'Learn about feedstock assessments, bankable DPR preparation, technical feasibility, financial modelling and implementation.',
    readTime: '12 min read',
  },
  {
    id: 4,
    title: 'Compressed Biogas Subsidies and Incentives',
    slug: 'compressed-biogas-subsidies-and-incentives',
    category: 'GOVERNMENT INCENTIVES',
    description:
      'Explore CBG subsidy frameworks, government incentives, GOBARdhan, SATAT and project eligibility considerations.',
    readTime: '9 min read',
  },
];

// ==========================================
// CONTACT PAGE DATA
// ==========================================

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

// ==========================================
// BLOGS LISTING COMPONENT
// ==========================================

function Blogs() {
  const [search, setSearch] = useState('');

  const filteredBlogs = cbgBlogs.filter((blog) =>
    `${blog.title} ${blog.description} ${blog.category}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen bg-[#F5F9FF]">
      {/* BLOG HERO */}

      <section className="bg-gradient-to-r from-[#00265E] to-[#005BB5] px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#80C900]">
            COMPLIANCE MATE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Industry Insights & Blogs
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Explore expert insights on compressed biogas
            plant setup, machinery, bank financing,
            feasibility, compliance and government incentives.
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-[#00265E]">
              Compressed Biogas Articles
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {filteredBlogs.length} articles available
            </p>
          </div>

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search blogs..."
            aria-label="Search blog articles"
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-[#00265E] outline-none focus:border-[#005BB5] sm:max-w-sm"
          />
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#00265E] to-[#005BB5] p-6">
                <span className="text-center text-xl font-extrabold text-white">
                  CBG & BIOGAS
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-extrabold tracking-wider text-[#006400]">
                  {blog.category}
                </span>

                <h3 className="mt-4 text-xl font-extrabold leading-snug text-[#00265E]">
                  {blog.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-500">
                    {blog.readTime}
                  </span>

                  <a
                    href={`#/blogs/${blog.slug}`}
                    className="text-sm font-extrabold text-[#005BB5] hover:text-[#006400]"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p className="py-12 text-center text-slate-600">
            No matching articles found.
          </p>
        )}
      </section>
    </div>
  );
}

// ==========================================
// BLOG NOT FOUND COMPONENT
// ==========================================

function BlogNotFound() {
  return (
    <section className="min-h-[60vh] px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-dark-blue">
        Blog Not Found
      </h1>

      <p className="mt-5 text-text-color/75">
        The requested article does not exist.
      </p>

      <a
        href="#/blogs"
        className="mt-8 inline-flex rounded-lg bg-primary-green px-6 py-3 font-bold text-text-color"
      >
        View All Blogs →
      </a>
    </section>
  );
}

// ==========================================
// GET CURRENT URL HASH
// ==========================================

function getHash() {
  return window.location.hash || '#home';
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [currentHash, setCurrentHash] = useState(getHash);

  // UPDATE URL WHEN NAVIGATION CHANGES

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(getHash());
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // ========================================
  // PAGE ROUTING
  // ========================================

  const isAboutPage = currentHash === '#/about';

  const isBlogsPage = currentHash === '#/blogs';

  const isContactPage = currentHash === '#/contact';

  const isIndustriesPage =
    currentHash === '#/industries';

  const isBlogDetailsPage =
    currentHash.startsWith('#/blogs/');

  // ========================================
  // BLOG SLUG ROUTING
  // ========================================

  const blogSlug = isBlogDetailsPage
    ? currentHash.slice('#/blogs/'.length)
    : '';

  const CBGArticlePage = cbgBlogPages[blogSlug];

  // ========================================
  // HOMEPAGE IDENTIFICATION
  // ========================================

  const isHomepage =
    !isAboutPage &&
    !isBlogsPage &&
    !isContactPage &&
    !isIndustriesPage &&
    !isBlogDetailsPage;

  // ========================================
  // SCROLL MANAGEMENT
  // ========================================

  useEffect(() => {
    if (!isHomepage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

      return;
    }

    const sectionId = currentHash.startsWith('#/')
      ? 'home'
      : currentHash.slice(1) || 'home';

    const frame = requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    });

    return () => cancelAnimationFrame(frame);
  }, [currentHash, isHomepage]);

  // ========================================
  // WEBSITE RENDERING
  // ========================================

  return (
    <div className="flex min-h-screen flex-col bg-background text-text-color">
      {/* HEADER */}

      <Navbar logoSrc={logo} />

      {/* MAIN CONTENT */}

      <main className="min-w-0 flex-1">
        {isBlogDetailsPage ? (
          CBGArticlePage ? (
            <CBGArticlePage />
          ) : (
            <BlogNotFound />
          )
        ) : isBlogsPage ? (
          <Blogs />
        ) : isAboutPage ? (
          <About />
        ) : isContactPage ? (
          <ContactPage />
        ) : isIndustriesPage ? (
          <Industries />
        ) : (
          <Home />
        )}
      </main>

      {/* FOOTER */}

      <Footer logoSrc={logo} />
    </div>
  );
}
