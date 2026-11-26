
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';

import type { IconType } from 'react-icons';

interface FooterProps {
  logoSrc?: string;
}

// ========================================
// COMPANY CONTACT DETAILS
// ========================================

const PHONE = '8796711794';
const EMAIL = 'info@compliancemate.co.in';

const ADDRESS =
  'H 161, Office, BSI Business Park, 09, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201301';

const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(ADDRESS);

const WHATSAPP_URL =
  `https://wa.me/91${PHONE}?text=` +
  encodeURIComponent(
    'Hello Compliance Mate, I would like to enquire about your services.'
  );

// ========================================
// SOCIAL MEDIA LINKS
// Add your actual company profile URLs.
// ========================================

const SOCIAL_URLS = {
  instagram: '',
  youtube: '',
  facebook: '',
  linkedin: '',
  twitter: '',
};

// ========================================
// FOOTER NAVIGATION LINKS
// ========================================

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#/about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#/industries' },
  { name: 'Blogs', href: '#/blogs' },
  { name: 'Contact Us', href: '#/contact' },
];

const serviceLinks = [
  { name: 'CBG & Biogas Plant Setup', href: '#services' },
  { name: 'Licensing & Certification', href: '#services' },
  { name: 'EPR Compliance', href: '#services' },
  { name: 'DPR & Feasibility Reports', href: '#services' },
  { name: 'Recycling Plant Consultancy', href: '#services' },
  { name: 'Bank Loan Assistance', href: '#services' },
];

// ========================================
// SOCIAL ICON CONFIGURATION
// ========================================

type SocialLink = {
  name: string;
  icon: IconType;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: SOCIAL_URLS.instagram,
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: SOCIAL_URLS.youtube,
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: SOCIAL_URLS.facebook,
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: SOCIAL_URLS.linkedin,
  },
  {
    name: 'Twitter / X',
    icon: FaTwitter,
    url: SOCIAL_URLS.twitter,
  },
  {
    name: 'Google Maps',
    icon: FaGoogle,
    url: MAP_URL,
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: WHATSAPP_URL,
  },
];

// ========================================
// FOOTER COMPONENT
// ========================================

export default function Footer({ logoSrc }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#00265E] text-white">

      {/* TOP ACCENT BORDER */}

      <div className="h-1 w-full bg-gradient-to-r from-[#005BB5] via-[#80C900] to-[#FF9800]" />

      {/* MAIN FOOTER */}

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ==================================
              COLUMN 1 - COMPANY INFORMATION
          ================================== */}

          <div>
            <a
              href="#home"
              aria-label="Compliance Mate Home"
              className="inline-flex items-center"
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="Compliance Mate Logo"
                  className="h-auto max-h-24 w-auto max-w-52 rounded-xl bg-white p-3 object-contain"
                />
              ) : (
                <span className="text-2xl font-extrabold text-[#80C900]">
                  Compliance Mate
                </span>
              )}
            </a>

            <p className="mt-6 text-sm leading-8 text-white/75">
              Compliance Mate provides professional consultancy
              for environmental compliance, licensing,
              compressed biogas plant setup, recycling
              projects, bankable DPR preparation and
              sustainable industrial development.
            </p>

            {/* SOCIAL MEDIA ICONS */}

            <h3 className="mt-7 text-sm font-extrabold uppercase tracking-wider text-[#80C900]">
              Connect With Us
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                if (!social.url) {
                  return (
                    <span
                      key={social.name}
                      title={`${social.name} profile link not configured`}
                      aria-label={`${social.name} link coming soon`}
                      className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/35"
                    >
                      <Icon size={18} />
                    </span>
                  );
                }

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#80C900] hover:bg-[#80C900] hover:text-[#00265E]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ==================================
              COLUMN 2 - QUICK LINKS
          ================================== */}

          <div>
            <h3 className="text-xl font-extrabold text-[#80C900]">
              Quick Links
            </h3>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#FF9800]" />

            <ul className="mt-8 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#80C900]"
                  >
                    <FaArrowRight
                      size={10}
                      className="text-[#80C900] transition-transform group-hover:translate-x-1"
                    />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================
              COLUMN 3 - OUR SERVICES
          ================================== */}

          <div>
            <h3 className="text-xl font-extrabold text-[#80C900]">
              Our Services
            </h3>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#FF9800]" />

            <ul className="mt-8 space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group inline-flex items-start gap-3 text-sm leading-6 text-white/75 transition-colors hover:text-[#80C900]"
                  >
                    <FaArrowRight
                      size={10}
                      className="mt-1.5 shrink-0 text-[#80C900] transition-transform group-hover:translate-x-1"
                    />

                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================
              COLUMN 4 - CONTACT DETAILS
          ================================== */}

          <div>
            <h3 className="text-xl font-extrabold text-[#80C900]">
              Contact Us
            </h3>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#FF9800]" />

            <p className="mt-8 text-sm leading-7 text-white/75">
              Need help with environmental licensing,
              CBG projects or recycling consultancy?
              Get in touch with Compliance Mate.
            </p>

            {/* PHONE NUMBER */}

            <a
              href={`tel:+91${PHONE}`}
              className="mt-6 flex items-center gap-4 text-sm font-semibold text-white transition-colors hover:text-[#80C900]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#80C900]">
                <FaPhoneAlt size={18} />
              </span>

              <span>+91 {PHONE}</span>
            </a>

            {/* EMAIL ADDRESS */}

            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 flex items-start gap-4 text-sm text-white/85 transition-colors hover:text-[#80C900]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#80C900]">
                <FaEnvelope size={18} />
              </span>

              <span className="min-w-0 break-all pt-3">
                {EMAIL}
              </span>
            </a>

            {/* OFFICE ADDRESS */}

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-start gap-4 text-sm leading-7 text-white/85 transition-colors hover:text-[#80C900]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#80C900]">
                <FaMapMarkerAlt size={19} />
              </span>

              <span className="min-w-0 flex-1">
                {ADDRESS}

                <span className="mt-2 block text-xs font-bold text-[#80C900]">
                  View on Google Maps →
                </span>
              </span>
            </a>

            {/* WHATSAPP CTA */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#80C900] px-6 py-3.5 text-sm font-extrabold text-[#00265E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
            >
              <FaWhatsapp size={21} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* ==================================
            FOOTER BOTTOM SECTION
        ================================== */}

        <div className="mt-14 border-t border-white/15 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

            <p className="text-xs leading-6 text-white/65">
              © {currentYear} Compliance Mate.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/65">
              <a
                href="#/contact"
                className="transition-colors hover:text-[#80C900]"
              >
                Contact Us
              </a>

              <a
                href="#/about"
                className="transition-colors hover:text-[#80C900]"
              >
                About Us
              </a>

              <a
                href="#/blogs"
                className="transition-colors hover:text-[#80C900]"
              >
                Our Blogs
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
