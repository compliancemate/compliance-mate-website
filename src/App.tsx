
import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/Logo.png';
import Blogs from './blogs';
import About from './Aboutus/Aboutus';

const services = [
  {
    number: '01',
    title: 'EPR Compliance',
    description:
      'EPR registration, compliance management, annual returns and recycling certificate support.',
    tag: 'EPR CONSULTANCY',
  },
  {
    number: '02',
    title: 'Environmental Licensing',
    description:
      'Guidance for CTE, CTO, hazardous waste authorization and environmental approvals.',
    tag: 'REGULATORY APPROVALS',
  },
  {
    number: '03',
    title: 'Lithium-Ion Battery Recycling',
    description:
      'Technical consultancy, machinery planning, DPR and recycling plant development.',
    tag: 'BATTERY RECYCLING',
  },
  {
    number: '04',
    title: 'E-Waste Recycling',
    description:
      'End-to-end assistance with e-waste recycling plant setup, licensing and machinery.',
    tag: 'E-WASTE SOLUTIONS',
  },
  {
    number: '05',
    title: 'Plastic Waste Recycling',
    description:
      'Consultancy for PET, HDPE, LDPE and PP recycling projects and regulatory compliance.',
    tag: 'PLASTIC RECYCLING',
  },
  {
    number: '06',
    title: 'CBG & Biogas Plant Setup',
    description:
      'Project planning, technology selection, feasibility analysis and CBG plant development.',
    tag: 'RENEWABLE ENERGY',
  },
  {
    number: '07',
    title: 'DPR & Feasibility Reports',
    description:
      'Detailed project reports, financial feasibility, CAPEX, OPEX and project assessment.',
    tag: 'PROJECT CONSULTANCY',
  },
  {
    number: '08',
    title: 'Recycling Plant Consultancy',
    description:
      'Technical planning and business consultancy for sustainable waste processing projects.',
    tag: 'INDUSTRIAL PROJECTS',
  },
];

const industries: string[] = [
  'Lithium-Ion Battery Recycling',
  'E-Waste Recycling',
  'Plastic Waste Management',
  'CBG & Biogas Projects',
  'Used Oil Recycling',
  'Waste Processing',
];

function App() {
  const [currentHash, setCurrentHash] = useState(
    () => window.location.hash
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      );
    };
  }, []);

  const isAboutPage = currentHash === '#/about';
  const isBlogPage = currentHash === '#/blogs';

  useEffect(() => {
    if (isAboutPage || isBlogPage) {
      window.scrollTo(0, 0);
      return;
    }

    const sectionId = currentHash.replace('#', '');

    if (!sectionId || sectionId.includes('/')) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }, [currentHash, isAboutPage, isBlogPage]);

  return (
    <div className="website">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <img
            src={logo}
            alt="Compliance Mate Logo"
            className="brand-logo-image"
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#/about">About Us</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#/blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Get Consultation <span>↗</span>
        </a>
      </header>

      <main>
        {isAboutPage ? (
          /* DEDICATED ABOUT US PAGE */
          <About />
        ) : isBlogPage ? (
          /* BLOGS PAGE */
          <Blogs />
        ) : (
          <>
            {/* HERO SECTION */}
            <section className="hero" id="home">
              <div className="hero-content">
                <span className="eyebrow">
                  <span className="green-dot"></span>
                  COMPLIANCE · CONSULTANCY · SUSTAINABILITY
                </span>

                <h1>
                  Simplifying Compliance.
                  <span>
                    {' '}Empowering Sustainable Growth.
                  </span>
                </h1>

                <p className="hero-description">
                  Your trusted partner for environmental
                  compliance, licensing, project consultancy
                  and recycling plant development. We help
                  businesses move forward with clarity
                  and confidence.
                </p>

                <div className="hero-actions">
                  <a
                    href="#services"
                    className="primary-button"
                  >
                    Explore Our Services <span>→</span>
                  </a>

                  <a
                    href="#/about"
                    className="text-button"
                  >
                    Discover Compliance Mate ↗
                  </a>
                </div>

                <div className="hero-trust">
                  <span className="trust-check">✓</span>
                  Practical guidance for compliance
                  and project development
                </div>
              </div>

              {/* HERO VISUAL */}
              <div className="hero-visual">
                <div className="visual-circle circle-one"></div>
                <div className="visual-circle circle-two"></div>

                <div className="main-visual-card">
                  <div className="visual-card-header">
                    <span className="visual-icon">CM</span>

                    <span className="visual-status">
                      Sustainable Solutions
                    </span>
                  </div>

                  <div className="visual-globe">
                    <span>🌍</span>
                  </div>

                  <h2>Building a Better Tomorrow</h2>

                  <p>
                    Compliance, innovation and sustainability
                    working together.
                  </p>

                  <div className="visual-tags">
                    <span>Compliance</span>
                    <span>Innovation</span>
                    <span>Growth</span>
                  </div>
                </div>

                <div className="floating-label">
                  <span className="floating-check">✓</span>

                  <div>
                    <strong>One Trusted Partner</strong>
                    <p>From planning to compliance</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section
              className="services-section"
              id="services"
            >
              <div className="section-heading">
                <span className="section-label">
                  WHAT WE DO
                </span>

                <h2>
                  Complete Solutions for
                  <span> Business Growth</span>
                </h2>

                <p>
                  We simplify complex compliance
                  requirements and support businesses
                  throughout their project journey.
                </p>
              </div>

              <div className="services-grid">
                {services.map((service) => (
                  <article
                    className="service-card"
                    key={service.number}
                  >
                    <span className="service-number">
                      {service.number}
                    </span>

                    <span className="service-tag">
                      {service.tag}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <a
                      href="#contact"
                      className="service-link"
                    >
                      Know More <span>↗</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section
              className="industries-section"
              id="industries"
            >
              <div className="section-heading">
                <span className="section-label">
                  INDUSTRIES WE SERVE
                </span>

                <h2>
                  Supporting the Future of
                  <span>
                    {' '}Recycling & Sustainability
                  </span>
                </h2>

                <p>
                  Specialized consultancy across emerging
                  recycling and waste-management industries.
                </p>
              </div>

              <div className="industry-grid">
                {industries.map((industry, index) => (
                  <div
                    className="industry-card"
                    key={industry}
                  >
                    <span className="industry-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3>{industry}</h3>

                    <span className="industry-arrow">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section
              className="about-section"
              id="about"
            >
              <div className="about-content">
                <span className="section-label">
                  ABOUT COMPLIANCE MATE
                </span>

                <h2>
                  Your Compliance Challenges.
                  <span> Our Commitment.</span>
                </h2>

                <p>
                  At Compliance Mate, we understand that
                  navigating environmental regulations
                  and establishing recycling projects
                  can be challenging.
                </p>

                <p>
                  Our aim is to simplify the process
                  through practical consultancy,
                  regulatory guidance and project-focused
                  solutions.
                </p>

                <a
                  href="#/about"
                  className="primary-button"
                >
                  Learn More About Us →
                </a>
              </div>

              <div className="about-visual">
                <div className="about-symbol">CM</div>

                <h3>
                  Compliance Meets Sustainability
                </h3>

                <p>
                  Helping businesses make informed
                  decisions for a more sustainable future.
                </p>
              </div>
            </section>

            {/* BLOGS PREVIEW */}
            <section className="home-blog-preview">
              <div className="section-heading">
                <span className="section-label">
                  KNOWLEDGE & INSIGHTS
                </span>

                <h2>
                  Explore Our Latest
                  <span> Industry Insights</span>
                </h2>

                <p>
                  Discover practical information about
                  environmental compliance, recycling
                  technologies and sustainable businesses.
                </p>

                <a
                  href="#/blogs"
                  className="primary-button"
                >
                  Explore All Blogs →
                </a>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section
              className="contact-section"
              id="contact"
            >
              <span className="section-label">
                LET&apos;S WORK TOGETHER
              </span>

              <h2>
                Have a Project in Mind?
                <span> Let&apos;s Make It Happen.</span>
              </h2>

              <p>
                Connect with Compliance Mate for
                environmental compliance, licensing
                and recycling project requirements.
              </p>

              <a
                href="mailto:info@compliancemate.com"
                className="primary-button"
              >
                Send an Enquiry →
              </a>
            </section>
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <img
            src={logo}
            alt="Compliance Mate Logo"
            className="brand-logo-image"
          />
        </a>

        <p>
          Compliance. Sustainability. Growth.
        </p>

        <span>
          © 2026 Compliance Mate.
          All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
