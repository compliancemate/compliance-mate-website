
import { useState } from 'react';
import type { ReactNode } from 'react';

type BlogCategory = 'Biogas' | 'License & Certification';

interface Blog {
  id: number;
  title: string;
  slug: string;
  category: BlogCategory;
  description: string;
  readTime: string;
}

// ==========================================
// ADD ALL FUTURE BLOGS HERE
// ==========================================

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Compressed Biogas Plant Bank Loan Assistance',
    slug: 'compressed-biogas-plant-bank-loan-assistance',
    category: 'Biogas',
    description:
      'Explore CBG plant financing, bank loans, eligibility, documentation and project finance assistance.',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Compressed Biogas Plant Machinery and Setup',
    slug: 'compressed-biogas-plant-machinery-setup',
    category: 'Biogas',
    description:
      'Explore CBG machinery, plant design, digestion, gas upgrading, compression and equipment selection.',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'Compressed Biogas Project Planning and Feasibility',
    slug: 'compressed-biogas-project-planning-and-feasibility',
    category: 'Biogas',
    description:
      'Understand feedstock assessment, technical feasibility, bankable DPR preparation and project planning.',
    readTime: '12 min read',
  },
  {
    id: 4,
    title: 'Compressed Biogas Subsidies and Incentives',
    slug: 'compressed-biogas-subsidies-and-incentives',
    category: 'Biogas',
    description:
      'Explore CBG subsidies, government incentives, eligibility and available support frameworks.',
    readTime: '9 min read',
  },

  // ADD LICENSE & CERTIFICATION BLOGS HERE
  //
  // Example:
  // {
  //   id: 5,
  //   title: 'How to Apply for Consent to Establish',
  //   slug: 'how-to-apply-for-consent-to-establish',
  //   category: 'License & Certification',
  //   description: 'A guide to the CTE application process.',
  //   readTime: '7 min read',
  // },
];

// ==========================================
// CATEGORY DROPDOWN
// ==========================================

interface CategoryDropdownProps {
  label: BlogCategory;
  count: number;
  selected: boolean;
  articles: Blog[];
  onSelect: (category: BlogCategory) => void;
}

function CategoryDropdown({
  label,
  count,
  selected,
  articles,
  onSelect,
}: CategoryDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-3.5 text-sm font-bold transition-colors sm:w-auto ${
          selected
            ? 'border-[#005BB5] bg-[#005BB5] text-white'
            : 'border-slate-200 bg-white text-[#00265E] hover:border-[#80C900]'
        }`}
      >
        <span>{label} ({count})</span>
        <span aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:absolute sm:left-0 sm:top-full sm:z-30 sm:mt-2 sm:w-80">
          <button
            type="button"
            onClick={() => {
              onSelect(label);
              setOpen(false);
            }}
            className="w-full rounded-lg bg-[#F0F7FF] px-4 py-3 text-left text-sm font-bold text-[#005BB5] hover:bg-[#E2F0FF]"
          >
            View All {label} Articles
          </button>

          <div className="mt-2 space-y-1">
            {articles.length > 0 ? (
              articles.map((article) => (
                <a
                  key={article.id}
                  href={`#/blogs/${article.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm leading-6 text-[#00265E] hover:bg-slate-100"
                >
                  {article.title}
                </a>
              ))
            ) : (
              <p className="px-4 py-4 text-sm text-slate-500">
                Articles will be published here soon.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// BLOG CARD
// ==========================================

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#00265E] via-[#005BB5] to-[#006400] px-6 text-center">
        <div>
          <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold tracking-wider text-white">
            COMPLIANCE MATE
          </span>
          <h3 className="mt-5 text-xl font-extrabold text-white">
            {blog.category === 'Biogas'
              ? 'CBG & BIOGAS'
              : 'LICENSE & CERTIFICATION'}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-[#80C900]/15 px-3 py-1.5 text-xs font-extrabold text-[#006400]">
          {blog.category}
        </span>

        <h2 className="mt-5 text-xl font-extrabold leading-snug text-[#00265E]">
          {blog.title}
        </h2>

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
  );
}

// ==========================================
// MAIN BLOGS PAGE
// ==========================================

export default function Blogs(): ReactNode {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<
    'All Blogs' | BlogCategory
  >('All Blogs');

  const biogasBlogs = blogs.filter(
    (blog) => blog.category === 'Biogas'
  );

  const licenseBlogs = blogs.filter(
    (blog) => blog.category === 'License & Certification'
  );

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      category === 'All Blogs' || blog.category === category;

    const matchesSearch =
      `${blog.title} ${blog.description} ${blog.category}`
        .toLowerCase()
        .includes(search.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F9FF]">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-[#00265E] to-[#005BB5] px-5 py-20 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-widest text-[#80C900]">
          COMPLIANCE MATE KNOWLEDGE CENTER
        </p>

        <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
          Industry Insights & Blogs
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
          Expert knowledge on biogas plant setup,
          environmental licensing, government approvals,
          regulatory compliance and industrial projects.
        </p>
      </section>

      {/* CATEGORIES & SEARCH */}

      <section className="mx-auto max-w-7xl px-5 py-14">

        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-[#00265E]">
            Explore Blog Categories
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Browse all articles or select a category.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <button
              type="button"
              onClick={() => setCategory('All Blogs')}
              className={`rounded-xl border px-6 py-3.5 text-sm font-bold transition-colors ${
                category === 'All Blogs'
                  ? 'border-[#005BB5] bg-[#005BB5] text-white'
                  : 'border-slate-200 bg-white text-[#00265E] hover:border-[#80C900]'
              }`}
            >
              All Blogs ({blogs.length})
            </button>

            <CategoryDropdown
              label="Biogas"
              count={biogasBlogs.length}
              selected={category === 'Biogas'}
              articles={biogasBlogs}
              onSelect={setCategory}
            />

            <CategoryDropdown
              label="License & Certification"
              count={licenseBlogs.length}
              selected={category === 'License & Certification'}
              articles={licenseBlogs}
              onSelect={setCategory}
            />

          </div>
        </div>

        {/* ARTICLES HEADING */}

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-[#00265E]">
              {category === 'All Blogs'
                ? 'Latest Articles'
                : `${category} Articles`}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {filteredBlogs.length} articles available
            </p>
          </div>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search articles..."
            aria-label="Search blog articles"
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-[#00265E] outline-none focus:border-[#005BB5] sm:max-w-sm"
          />
        </div>

        {/* BLOG CARDS */}

        {filteredBlogs.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center">
            <h3 className="text-xl font-extrabold text-[#00265E]">
              No Articles Found
            </h3>

            <p className="mt-3 text-slate-600">
              {category === 'License & Certification' &&
              licenseBlogs.length === 0
                ? 'License & Certification articles will appear here when published.'
                : 'Try adjusting the search or category filter.'}
            </p>

            <button
              type="button"
              onClick={() => {
                setCategory('All Blogs');
                setSearch('');
              }}
              className="mt-6 rounded-xl bg-[#80C900] px-6 py-3 font-bold text-[#00265E]"
            >
              View All Blogs
            </button>
          </div>
        )}

      </section>

      {/* CONSULTATION CTA */}

      <section className="bg-[#00265E] px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-extrabold">
          Need Assistance With Your Project?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/80">
          Get professional guidance on biogas plant
          development, licensing and certification,
          DPR preparation and regulatory approvals.
        </p>

        <a
          href="#/contact"
          className="mt-8 inline-flex rounded-xl bg-[#80C900] px-8 py-4 font-extrabold text-[#00265E] hover:bg-white"
        >
          Get Expert Consultation →
        </a>
      </section>

    </div>
  );
}
