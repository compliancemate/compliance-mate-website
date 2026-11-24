
import type { ReactNode } from 'react';

// =====================================
// COMPLIANCE MATE - SERVICE CARD
// =====================================

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tag?: string;
  href?: string;
  icon?: ReactNode;
  buttonText?: string;
  featured?: boolean;
  className?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  tag = 'OUR SERVICES',
  href = '#/contact',
  icon,
  buttonText = 'Know More',
  featured = false,
  className = '',
}: ServiceCardProps) {
  return (
    <article
      className={`
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-2xl border bg-white
        p-6 shadow-sm transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        md:p-7
        ${
          featured
            ? 'border-primary-green shadow-lg'
            : 'border-primary-blue/10 hover:border-primary-green'
        }
        ${className}
      `}
    >
      {/* Top decorative border */}

      <div
        className="
          absolute inset-x-0 top-0 h-1
          bg-gradient-to-r
          from-primary-blue
          via-primary-green
          to-accent-orange
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Featured indicator */}

      {featured && (
        <span
          className="
            absolute right-5 top-5 rounded-full
            bg-golden-yellow px-3 py-1
            text-[10px] font-extrabold
            tracking-wide text-text-color
          "
        >
          FEATURED
        </span>
      )}

      {/* Service number and optional icon */}

      <div className="flex items-start justify-between gap-4">
        <span
          className="
            text-4xl font-extrabold
            tracking-tight text-primary-green
          "
        >
          {number}
        </span>

        {icon && (
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-xl bg-primary-blue/10
              text-primary-blue
              transition-colors duration-300
              group-hover:bg-primary-blue
              group-hover:text-white
            "
          >
            {icon}
          </div>
        )}
      </div>

      {/* Category tag */}

      <span
        className="
          mt-5 w-fit max-w-full rounded-md
          bg-primary-blue/10 px-3 py-2
          text-[10px] font-bold
          tracking-wider text-primary-blue
        "
      >
        {tag}
      </span>

      {/* Service title */}

      <h3
        className="
          mt-6 text-xl font-extrabold
          leading-snug text-dark-blue
          transition-colors duration-300
          group-hover:text-primary-blue
        "
      >
        {title}
      </h3>

      {/* Service description */}

      <p
        className="
          mt-4 flex-grow text-sm
          leading-7 text-text-color/75
        "
      >
        {description}
      </p>

      {/* Bottom divider */}

      <div
        className="
          my-6 h-px w-full
          bg-primary-blue/10
        "
      />

      {/* CTA */}

      <a
        href={href}
        aria-label={`${buttonText} about ${title}`}
        className="
          inline-flex w-fit items-center gap-2
          text-sm font-extrabold
          text-primary-blue
          transition-all duration-300
          hover:gap-3 hover:text-dark-green
          focus-visible:rounded
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-primary-blue
        "
      >
        {buttonText}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </article>
  );
}
