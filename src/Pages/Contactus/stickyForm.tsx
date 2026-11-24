
// import { useEffect, useState } from 'react';
// import './App.css';

// import logo from './assets/Logo.png';
// import About from './Aboutus/Aboutus';
// import Blogs from './Blogs/Blogs';
// import StickyContactForm from './Contactus/stickyForm'; 

// // ================= SERVICES DATA =================

// const services = [
//   {
//     number: '01',
//     title: 'EPR Compliance',
//     description:
//       'EPR registration, compliance management, annual returns and recycling certificate support.',
//     tag: 'EPR CONSULTANCY',
//   },
//   {
//     number: '02',
//     title: 'Environmental Licensing',
//     description:
//       'Guidance for CTE, CTO, hazardous waste authorization and environmental approvals.',
//     tag: 'REGULATORY APPROVALS',
//   },
//   {
//     number: '03',
//     title: 'Lithium-Ion Battery Recycling',
//     description:
//       'Technical consultancy, machinery planning, DPR and recycling plant development.',
//     tag: 'BATTERY RECYCLING',
//   },
//   {
//     number: '04',
//     title: 'E-Waste Recycling',
//     description:
//       'End-to-end assistance with e-waste recycling plant setup, licensing and machinery.',
//     tag: 'E-WASTE SOLUTIONS',
//   },
//   {
//     number: '05',
//     title: 'Plastic Waste Recycling',
//     description:
//       'Consultancy for PET, HDPE, LDPE and PP recycling projects and regulatory compliance.',
//     tag: 'PLASTIC RECYCLING',
//   },
//   {
//     number: '06',
//     title: 'CBG & Biogas Plant Setup',
//     description:
//       'Project planning, technology selection, feasibility analysis and CBG plant development.',
//     tag: 'RENEWABLE ENERGY',
//   },
//   {
//     number: '07',
//     title: 'DPR & Feasibility Reports',
//     description:
//       'Detailed project reports, financial feasibility, CAPEX, OPEX and project assessment.',
//     tag: 'PROJECT CONSULTANCY',
//   },
//   {
//     number: '08',
//     title: 'Recycling Plant Consultancy',
//     description:
//       'Technical planning and business consultancy for sustainable waste processing projects.',
//     tag: 'INDUSTRIAL PROJECTS',
//   },
// ];

// // ================= INDUSTRIES DATA =================

// const industries: string[] = [
//   'Lithium-Ion Battery Recycling',
//   'E-Waste Recycling',
//   'Plastic Waste Management',
//   'CBG & Biogas Projects',
//   'Used Oil Recycling',
//   'Waste Processing',
// ];

// // ================= APP COMPONENT =================

// function App() {
//   const [currentHash, setCurrentHash] = useState(
//     () => window.location.hash
//   );

//   const [mobileMenuOpen, setMobileMenuOpen] =
//     useState(false);

//   // ================= HASH NAVIGATION =================

//   useEffect(() => {
//     const handleHashChange = () => {
//       setCurrentHash(window.location.hash);
//       setMobileMenuOpen(false);
//     };

//     window.addEventListener(
//       'hashchange',
//       handleHashChange
//     );

//     return () => {
//       window.removeEventListener(
//         'hashchange',
//         handleHashChange
//       );
//     };
//   }, []);

//   const isAboutPage = currentHash === '#/about';
//   const isBlogPage = currentHash === '#/blogs';
//   const isContactPage = currentHash === '#/contact';

//   const isInternalPage =
//     isAboutPage || isBlogPage || isContactPage;

//   useEffect(() => {
//     if (isInternalPage) {
//       window.scrollTo({
//         top: 0,
//         behavior: 'instant',
//       });

//       return;
//     }

//     const sectionId = currentHash.replace('#', '');

//     if (!sectionId || sectionId.includes('/')) {
//       return;
//     }

//     const frame = requestAnimationFrame(() => {
//       document
//         .getElementById(sectionId)
//         ?.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//     });

//     return () => cancelAnimationFrame(frame);
//   }, [currentHash, isInternalPage]);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   // ================= RENDER =================

//   return (
//     <div className="website">

//       {/* ADDITIONAL STYLES */}
//       <style>{`
//         .cm-mobile-menu-button {
//           display: none;
//           background: transparent;
//           border: 1px solid #dce9df;
//           color: #153849;
//           border-radius: 8px;
//           padding: 9px 12px;
//           font-size: 22px;
//           cursor: pointer;
//         }

//         .cm-contact-page {
//           min-height: 80vh;
//           padding: 90px 7%;
//           background: linear-gradient(
//             135deg,
//             #f5fbf7 0%,
//             #e8f6ed 100%
//           );
//         }

//         .cm-contact-page-container {
//           max-width: 1250px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: minmax(0, 1fr) 370px;
//           align-items: start;
//           gap: 65px;
//         }

//         .cm-contact-page-info {
//           padding-top: 25px;
//         }

//         .cm-contact-page-info h1 {
//           color: #153849;
//           font-size: clamp(36px, 4.5vw, 60px);
//           line-height: 1.15;
//           margin: 10px 0 25px;
//           font-weight: 800;
//         }

//         .cm-contact-page-info h1 span {
//           display: block;
//           color: #209d60;
//         }

//         .cm-contact-page-info p {
//           color: #61796e;
//           line-height: 1.9;
//           font-size: 16px;
//           margin-bottom: 18px;
//           max-width: 650px;
//         }

//         .cm-contact-benefits {
//           display: grid;
//           grid-template-columns: repeat(
//             2,
//             minmax(0, 1fr)
//           );
//           gap: 14px;
//           margin-top: 35px;
//         }

//         .cm-contact-benefit {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 17px;
//           background: #fff;
//           border: 1px solid #dcece1;
//           border-radius: 12px;
//           color: #235546;
//           font-size: 13px;
//           font-weight: 700;
//         }

//         .cm-contact-benefit-check {
//           display: grid;
//           place-items: center;
//           width: 27px;
//           height: 27px;
//           flex-shrink: 0;
//           background: #e0f5e8;
//           border-radius: 50%;
//           color: #16824d;
//           font-weight: 800;
//         }

//         .cm-contact-page-form {
//           width: 100%;
//           min-width: 0;
//         }

//         .cm-contact-page-form .cm-sticky-contact {
//           max-width: 100%;
//         }

//         .cm-home-blog-preview {
//           padding: 90px 7%;
//           background: #f0f9f3;
//           text-align: center;
//         }

//         .cm-home-blog-preview .primary-button {
//           margin-top: 25px;
//         }

//         @media (max-width: 1100px) {
//           .cm-contact-page-container {
//             gap: 35px;
//           }

//           .cm-contact-benefits {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 900px) {
//           .cm-contact-page-container {
//             grid-template-columns: 1fr;
//           }

//           .cm-contact-page-info {
//             padding-top: 0;
//           }

//           .cm-contact-page-form {
//             max-width: 650px;
//           }
//         }

//         @media (max-width: 700px) {
//           .cm-mobile-menu-button {
//             display: inline-flex;
//             align-items: center;
//             justify-content: center;
//             margin-left: auto;
//           }

//           .navbar .nav-links {
//             display: none;
//             order: 3;
//             width: 100%;
//             flex-direction: column;
//             gap: 0;
//             padding: 10px 0;
//             background: white;
//             border-top: 1px solid #edf1ee;
//           }

//           .navbar .nav-links.cm-nav-open {
//             display: flex;
//           }

//           .navbar .nav-links a {
//             display: block;
//             width: 100%;
//             padding: 12px;
//             text-align: center;
//           }

//           .navbar .nav-cta {
//             order: 2;
//           }

//           .cm-contact-page {
//             padding: 65px 6%;
//           }

//           .cm-contact-benefits {
//             grid-template-columns: 1fr;
//           }

//           .cm-contact-page-info h1 {
//             font-size: 37px;
//           }

//           .cm-home-blog-preview {
//             padding: 65px 6%;
//           }
//         }
//       `}</style>

//       {/* ================= HEADER ================= */}

//       <header className="navbar">

//         <a
//           href="#home"
//           className="brand"
//           onClick={closeMobileMenu}
//         >
//           <img
//             src={logo}
//             alt="Compliance Mate Logo"
//             className="brand-logo-image"
//           />
//         </a>

//         <button
//           type="button"
//           className="cm-mobile-menu-button"
//           aria-label="Toggle navigation"
//           aria-expanded={mobileMenuOpen}
//           aria-controls="cm-main-navigation"
//           onClick={() =>
//             setMobileMenuOpen((previous) => !previous)
//           }
//         >
//           {mobileMenuOpen ? '✕' : '☰'}
//         </button>

//         <nav
//           id="cm-main-navigation"
//           className={`nav-links ${
//             mobileMenuOpen ? 'cm-nav-open' : ''
//           }`}
//           aria-label="Main navigation"
//         >
//           <a
//             href="#home"
//             onClick={closeMobileMenu}
//           >
//             Home
//           </a>

//           <a
//             href="#/about"
//             onClick={closeMobileMenu}
//           >
//             About Us
//           </a>

//           <a
//             href="#services"
//             onClick={closeMobileMenu}
//           >
//             Services
//           </a>

//           <a
//             href="#industries"
//             onClick={closeMobileMenu}
//           >
//             Industries
//           </a>

//           <a
//             href="#/blogs"
//             onClick={closeMobileMenu}
//           >
//             Blogs
//           </a>

//           <a
//             href="#/contact"
//             onClick={closeMobileMenu}
//           >
//             Contact Us
//           </a>
//         </nav>

//         <a
//           href="#/contact"
//           className="nav-cta"
//           onClick={closeMobileMenu}
//         >
//           Get Consultation <span>↗</span>
//         </a>
//       </header>

//       {/* ================= MAIN CONTENT ================= */}

//       <main>

//         {isAboutPage ? (

//           // ================= ABOUT US PAGE =================

//           <About />

//         ) : isContactPage ? (

//           // ================= CONTACT US PAGE =================

//           <section className="cm-contact-page">

//             <div className="cm-contact-page-container">

//               <div className="cm-contact-page-info">

//                 <span className="section-label">
//                   CONTACT COMPLIANCE MATE
//                 </span>

//                 <h1>
//                   Let's Discuss
//                   <span> Your Next Project.</span>
//                 </h1>

//                 <p>
//                   Looking for professional assistance
//                   with environmental compliance,
//                   licensing, compressed biogas plant
//                   development or recycling projects?
//                 </p>

//                 <p>
//                   Compliance Mate provides consultancy
//                   and project planning support to help
//                   businesses navigate regulatory
//                   requirements and make informed
//                   project decisions.
//                 </p>

//                 <p>
//                   Share your requirements using our
//                   consultation form, or contact our
//                   team directly by phone.
//                 </p>

//                 <div className="cm-contact-benefits">

//                   <div className="cm-contact-benefit">
//                     <span className="cm-contact-benefit-check">
//                       ✓
//                     </span>
//                     Environmental Licensing
//                   </div>

//                   <div className="cm-contact-benefit">
//                     <span className="cm-contact-benefit-check">
//                       ✓
//                     </span>
//                     EPR Compliance
//                   </div>

//                   <div className="cm-contact-benefit">
//                     <span className="cm-contact-benefit-check">
//                       ✓
//                     </span>
//                     CBG & Biogas Plant Setup
//                   </div>

//                   <div className="cm-contact-benefit">
//                     <span className="cm-contact-benefit-check">
//                       ✓
//                     </span>
//                     Recycling Plant Consultancy
//                   </div>

//                   <div className="cm-contact-benefit">
//                     <span className="cm-contact-benefit-check">
//                       ✓
//                     </span>
//                     DPR & Feasibility Reports
//                   </div>

//                   <div className="cm-contact-benefit">
//                     <span className="cm-contact-benefit-check">
//                       ✓
//                     </span>
//                     Bank Loan Documentation
//                   </div>

//                 </div>

//               </div>

//               {/* CONTACT FORM */}

//               <div className="cm-contact-page-form">
//                 <StickyContactForm sticky={false} />
//               </div>

//             </div>

//           </section>

//         ) : isBlogPage ? (

//           // ================= BLOG PAGE =================

//           <Blogs />

//         ) : (

//           // ================= HOMEPAGE =================

//           <>

//             {/* HERO SECTION */}

//             <section className="hero" id="home">

//               <div className="hero-content">

//                 <span className="eyebrow">
//                   <span className="green-dot"></span>
//                   COMPLIANCE · CONSULTANCY · SUSTAINABILITY
//                 </span>

//                 <h1>
//                   Simplifying Compliance.
//                   <span>
//                     {' '}Empowering Sustainable Growth.
//                   </span>
//                 </h1>

//                 <p className="hero-description">
//                   Your trusted partner for environmental
//                   compliance, licensing, project consultancy
//                   and recycling plant development. We help
//                   businesses move forward with clarity
//                   and confidence.
//                 </p>

//                 <div className="hero-actions">

//                   <a
//                     href="#services"
//                     className="primary-button"
//                   >
//                     Explore Our Services <span>→</span>
//                   </a>

//                   <a
//                     href="#/about"
//                     className="text-button"
//                   >
//                     Discover Compliance Mate ↗
//                   </a>

//                 </div>

//                 <div className="hero-trust">
//                   <span className="trust-check">✓</span>
//                   Practical guidance for compliance
//                   and project development
//                 </div>

//               </div>

//               {/* HERO VISUAL */}

//               <div className="hero-visual">

//                 <div className="visual-circle circle-one"></div>
//                 <div className="visual-circle circle-two"></div>

//                 <div className="main-visual-card">

//                   <div className="visual-card-header">
//                     <span className="visual-icon">
//                       CM
//                     </span>

//                     <span className="visual-status">
//                       Sustainable Solutions
//                     </span>
//                   </div>

//                   <div className="visual-globe">
//                     <span>🌍</span>
//                   </div>

//                   <h2>
//                     Building a Better Tomorrow
//                   </h2>

//                   <p>
//                     Compliance, innovation and sustainability
//                     working together.
//                   </p>

//                   <div className="visual-tags">
//                     <span>Compliance</span>
//                     <span>Innovation</span>
//                     <span>Growth</span>
//                   </div>

//                 </div>

//                 <div className="floating-label">

//                   <span className="floating-check">
//                     ✓
//                   </span>

//                   <div>
//                     <strong>
//                       One Trusted Partner
//                     </strong>

//                     <p>
//                       From planning to compliance
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </section>

//             {/* ================= SERVICES ================= */}

//             <section
//               className="services-section"
//               id="services"
//             >

//               <div className="section-heading">

//                 <span className="section-label">
//                   WHAT WE DO
//                 </span>

//                 <h2>
//                   Complete Solutions for
//                   <span> Business Growth</span>
//                 </h2>

//                 <p>
//                   We simplify complex compliance
//                   requirements and support businesses
//                   throughout their project journey.
//                 </p>

//               </div>

//               <div className="services-grid">

//                 {services.map((service) => (

//                   <article
//                     className="service-card"
//                     key={service.number}
//                   >

//                     <span className="service-number">
//                       {service.number}
//                     </span>

//                     <span className="service-tag">
//                       {service.tag}
//                     </span>

//                     <h3>
//                       {service.title}
//                     </h3>

//                     <p>
//                       {service.description}
//                     </p>

//                     <a
//                       href="#/contact"
//                       className="service-link"
//                     >
//                       Know More <span>↗</span>
//                     </a>

//                   </article>

//                 ))}

//               </div>

//             </section>

//             {/* ================= INDUSTRIES ================= */}

//             <section
//               className="industries-section"
//               id="industries"
//             >

//               <div className="section-heading">

//                 <span className="section-label">
//                   INDUSTRIES WE SERVE
//                 </span>

//                 <h2>
//                   Supporting the Future of
//                   <span>
//                     {' '}Recycling & Sustainability
//                   </span>
//                 </h2>

//                 <p>
//                   Specialized consultancy across
//                   recycling and waste-management
//                   industries.
//                 </p>

//               </div>

//               <div className="industry-grid">

//                 {industries.map((industry, index) => (

//                   <div
//                     className="industry-card"
//                     key={industry}
//                   >

//                     <span className="industry-number">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>

//                     <h3>{industry}</h3>

//                     <span className="industry-arrow">
//                       ↗
//                     </span>

//                   </div>

//                 ))}

//               </div>

//             </section>

//             {/* ================= ABOUT PREVIEW ================= */}

//             <section
//               className="about-section"
//               id="about"
//             >

//               <div className="about-content">

//                 <span className="section-label">
//                   ABOUT COMPLIANCE MATE
//                 </span>

//                 <h2>
//                   Your Compliance Challenges.
//                   <span> Our Commitment.</span>
//                 </h2>

//                 <p>
//                   Compliance Mate supports businesses
//                   with environmental licensing,
//                   regulatory compliance and sustainable
//                   industrial project development.
//                 </p>

//                 <p>
//                   Our goal is to simplify complex
//                   requirements through practical
//                   consultancy and project-focused
//                   solutions.
//                 </p>

//                 <a
//                   href="#/about"
//                   className="primary-button"
//                 >
//                   Learn More About Us →
//                 </a>

//               </div>

//               <div className="about-visual">

//                 <div className="about-symbol">
//                   CM
//                 </div>

//                 <h3>
//                   Compliance Meets Sustainability
//                 </h3>

//                 <p>
//                   Helping businesses make informed
//                   decisions for a more sustainable
//                   future.
//                 </p>

//               </div>

//             </section>

//             {/* ================= BLOG PREVIEW ================= */}

//             <section className="cm-home-blog-preview">

//               <div className="section-heading">

//                 <span className="section-label">
//                   KNOWLEDGE & INSIGHTS
//                 </span>

//                 <h2>
//                   Explore Our Latest
//                   <span> Industry Insights</span>
//                 </h2>

//                 <p>
//                   Discover information about
//                   environmental compliance,
//                   recycling technologies and
//                   sustainable industrial projects.
//                 </p>

//                 <a
//                   href="#/blogs"
//                   className="primary-button"
//                 >
//                   Explore Our Blogs →
//                 </a>

//               </div>

//             </section>

//             {/* ================= CONTACT PREVIEW ================= */}

//             <section
//               className="contact-section"
//               id="contact"
//             >

//               <span className="section-label">
//                 LET&apos;S WORK TOGETHER
//               </span>

//               <h2>
//                 Have a Project in Mind?
//                 <span>
//                   {' '}Let&apos;s Make It Happen.
//                 </span>
//               </h2>

//               <p>
//                 Connect with Compliance Mate
//                 for environmental compliance,
//                 licensing and recycling project
//                 requirements.
//               </p>

//               <a
//                 href="#/contact"
//                 className="primary-button"
//               >
//                 Book a Consultation →
//               </a>

//             </section>

//           </>
//         )}

//       </main>

//       {/* ================= FOOTER ================= */}

//       <footer className="footer">

//         <a href="#home" className="brand">
//           <img
//             src={logo}
//             alt="Compliance Mate Logo"
//             className="brand-logo-image"
//           />
//         </a>

//         <p>
//           Compliance. Sustainability. Growth.
//         </p>

//         <span>
//           © 2026 Compliance Mate.
//           All rights reserved.
//         </span>

//       </footer>

//     </div>
//   );
// }

// export default App;

export { default } from '../../components/stickyForm';
