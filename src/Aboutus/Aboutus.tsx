
import './About.css';

const expertise = [
  {
    number: '01',
    title: 'Environmental Compliance',
    description:
      'Support for statutory environmental requirements, EPR obligations, registrations and regulatory filings.',
  },
  {
    number: '02',
    title: 'Licensing & Approvals',
    description:
      'Guidance for CTE, CTO, hazardous waste authorization and other applicable permissions.',
  },
  {
    number: '03',
    title: 'Project Consultancy',
    description:
      'DPR preparation, technical feasibility, technology evaluation and financial project planning.',
  },
  {
    number: '04',
    title: 'Recycling Plant Development',
    description:
      'Consultancy for lithium-ion battery, e-waste, plastic, used oil and other waste recycling projects.',
  },
];

const values = [
  {
    icon: '◈',
    title: 'Transparency',
    description:
      'Clear communication and practical guidance throughout the consultancy process.',
  },
  {
    icon: '◎',
    title: 'Client-Focused Approach',
    description:
      'Solutions aligned with the operational needs and objectives of every project.',
  },
  {
    icon: '✦',
    title: 'Professional Excellence',
    description:
      'Structured project planning, attention to detail and a commitment to quality.',
  },
  {
    icon: '↗',
    title: 'Sustainable Growth',
    description:
      'Supporting responsible industrial development and environmentally conscious businesses.',
  },
];

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-page-hero">
        <div className="about-page-hero-inner">
          <span className="about-page-eyebrow">
            GET TO KNOW COMPLIANCE MATE
          </span>

          <h1>
            Your Partner in Compliance.
            <span> Your Path to Sustainable Growth.</span>
          </h1>

          <p>
            We help businesses navigate environmental regulations,
            plan sustainable industrial projects and move forward
            with clarity, confidence and practical guidance.
          </p>

          <div className="about-page-actions">
            <a href="#about-story" className="primary-button">
              Discover Our Approach →
            </a>

            <a href="#contact" className="about-page-outline">
              Get Consultation ↗
            </a>
          </div>
        </div>

        <div className="about-page-hero-decoration">
          <div className="about-deco-circle">
            <span>CM</span>
            <p>COMPLIANCE MATE</p>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-story-section" id="about-story">
        <div className="about-story-visual">
          <div className="about-story-symbol">CM</div>

          <h3>Compliance Meets Sustainability</h3>

          <p>
            Bridging regulatory requirements, responsible
            development and business opportunities.
          </p>

          <div className="about-story-tags">
            <span>Compliance</span>
            <span>Consultancy</span>
            <span>Sustainability</span>
          </div>
        </div>

        <div className="about-story-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            Simplifying Complexity.
            <span> Enabling Progress.</span>
          </h2>

          <p>
            Compliance Mate is an environmental compliance
            and industrial project consultancy focused on
            helping businesses understand regulatory requirements
            and develop sustainable operations.
          </p>

          <p>
            From EPR compliance and environmental licensing to
            detailed project reports and recycling plant
            development, we aim to provide practical solutions
            across different stages of a business project.
          </p>

          <p>
            Our approach combines regulatory awareness,
            structured planning and client-focused consultancy
            to support informed decisions and responsible
            business development.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-purpose-section">
        <div className="about-purpose-heading">
          <span className="section-label">OUR PURPOSE</span>

          <h2>
            Driven by Purpose.
            <span> Focused on Progress.</span>
          </h2>
        </div>

        <div className="about-purpose-grid">
          <div className="about-purpose-card">
            <span className="about-purpose-icon">01</span>
            <h3>Our Mission</h3>
            <p>
              To simplify environmental compliance and
              industrial project development through accessible,
              reliable and practical consultancy that helps
              businesses operate responsibly and efficiently.
            </p>
          </div>

          <div className="about-purpose-card">
            <span className="about-purpose-icon">02</span>
            <h3>Our Vision</h3>
            <p>
              To contribute to a future where environmental
              responsibility and industrial growth work
              together, supporting innovation, resource
              efficiency and a circular economy.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="about-expertise-section">
        <div className="section-heading">
          <span className="section-label">OUR EXPERTISE</span>

          <h2>
            Comprehensive Support for
            <span> Sustainable Businesses</span>
          </h2>

          <p>
            Our consultancy areas cover environmental
            compliance, statutory approvals and industrial
            recycling project development.
          </p>
        </div>

        <div className="about-expertise-grid">
          {expertise.map((item) => (
            <article
              className="about-expertise-card"
              key={item.number}
            >
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-values-section">
        <div className="section-heading">
          <span className="section-label">WHAT GUIDES US</span>

          <h2>
            Our Core <span>Values</span>
          </h2>

          <p>
            Principles that shape our approach to every
            client engagement.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <span className="about-value-icon">
                {value.icon}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-page-cta">
        <span className="section-label">
          LET'S WORK TOGETHER
        </span>

        <h2>
          Have a Compliance or
          <span> Recycling Project in Mind?</span>
        </h2>

        <p>
          Connect with Compliance Mate to discuss your
          compliance requirements, licensing needs or
          industrial project plans.
        </p>

        <a href="#contact" className="primary-button">
          Get Expert Consultation →
        </a>
      </section>

      {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <span className="section-label">
              ABOUT COMPLIANCE MATE
            </span>

            <h2>
              Your Compliance Challenges.
              <span> Our Commitment.</span>
            </h2>

            <p>
              At Compliance Mate, we understand that navigating
              environmental regulations and establishing recycling
              projects can be challenging.
            </p>

            <p>
              Our aim is to simplify the process through practical
              consultancy, regulatory guidance and project-focused
              solutions.
            </p>

            <a href="#contact" className="primary-button">
              Connect With Us →
            </a>
          </div>

          <div className="about-visual">
            <div className="about-symbol">CM</div>

            <h3>Compliance Meets Sustainability</h3>

            <p>
              Helping businesses make informed decisions
              for a more sustainable future.
            </p>
          </div>
        </section>


    </div>
  );
}
