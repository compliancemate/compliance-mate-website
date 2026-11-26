import { useEffect,useState } from 'react';
import logo from './assets/Logo.png';
import Navbar from './components/Navbar';
import IntroLoader from './components/IntroLoader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import BlogIndex from './pages/blogs/BlogIndex';
import BiogasBlogs from './pages/blogs/biogas';
import LicensingBlogs from './pages/blogs/licensing-certification';
import Biogas from './pages/services/Biogas';
import LicensingCertification from './pages/services/LicensingCertification';
import DprFeasibility from './pages/services/DprFeasibility';
import RecyclingConsultancy from './pages/services/RecyclingConsultancy';
import BankLoanAssistance from './pages/services/BankLoanAssistance';
import {blogs} from './data/blogData';
import { licenseRoutes } from './data/licenseRoutes';

const description='Environmental licensing, EPR compliance, compressed biogas plant setup, bankable DPRs and sustainable industrial project consultancy.';
export const routes = {
 '/':{Component:Home,title:'Environmental Compliance & CBG Plant Consultancy',description},
 '/about':{Component:About,title:'About Us',description:'Learn about Compliance Mate and our approach to transparent, practical environmental and industrial project consultancy.'},
 '/industries':{Component:Industries,title:'Industries We Serve',description:'Consultancy for compressed biogas, renewable energy, industrial waste management and compliance.'},
 '/contact':{Component:Contact,title:'Contact Our Project Experts',description:'Contact Compliance Mate in Noida for project planning, licensing and environmental compliance enquiries.'},
 '/blogs':{Component:BlogIndex,title:'Industry Insights & Blogs',description:'Explore project planning, technology, funding and environmental compliance resources.'},
 '/blogs/biogas':{Component:BiogasBlogs,title:'Biogas Blogs',description:'Guides to compressed biogas plant machinery, financing, feasibility and incentives.'},
 '/blogs/licensing-certification':{Component:LicensingBlogs,title:'License & Certification Blogs',description:'Resources on environmental licensing and certification.',draft:!blogs.some(b=>b.category==='licensing-certification')},
 '/services/biogas':{Component:Biogas,title:'Compressed Biogas (CBG) Plant Setup Consultancy in India',description:'CBG plant setup consultancy, bankable DPR, machinery selection, environmental approvals, bank loans, subsidies and offtake coordination.',draft:false},
 '/services/licensing-certification':{Component:LicensingCertification,title:'Licensing & Certification Consultancy in India',description:'Explore 12 compliance services: CTE, CTO, waste authorizations, EPR, BIS CRS, ISI, FMCS, LMPC, WPC and DGFT assistance.'},
 ...licenseRoutes,
 '/services/epr-compliance':{...licenseRoutes['/services/licensing-certification/extended-producer-responsibility'],draft:true},
'/services/dpr-feasibility': {
  Component: DprFeasibility,

  title:
    'Bankable DPR & Feasibility Report Consultancy in India',

  description:
    'Detailed project reports and feasibility studies for CBG, recycling and industrial projects. Get assistance with technical assessment, CAPEX, OPEX, financial projections and project planning.',

  draft: false,
},
 '/services/recycling-consultancy':{Component:RecyclingConsultancy,title:'Recycling Plant Consultancy',draft:true},
 '/services/bank-loan-assistance':{Component:BankLoanAssistance,title:'Bank Loan Assistance',draft:true},
 ...Object.fromEntries(blogs.map(b=>[`/blogs/${b.slug}`,{Component:b.Component,title:b.title,description:b.description,article:true,category:b.category}])),
};
export function routeFor(url){return routes[url]||{Component:NotFound,title:'Page Not Found',description:'The requested page could not be found.',draft:true}}
function NotFound(){return <section className="mx-auto min-h-[55vh] max-w-3xl px-5 py-20 text-center"><h1 className="text-4xl font-extrabold text-dark-blue">Page not found</h1><p className="mt-4 text-slate-600">This address does not match an available page.</p><a href="/#home" className="mt-6 inline-flex rounded-lg bg-primary-blue px-5 py-3 font-bold text-white">Return home</a></section>}
function readLocation(){const h=window.location.hash;const path=window.location.pathname.replace(/\/$/,'')||'/';if(h.startsWith('#/'))return {path:h.slice(1).replace(/\/$/,'')||'/',anchor:''};if(path==='/'&&['#home','#services','#industries','#about','#contact','#faq','#process'].includes(h))return {path:'/',anchor:h.slice(1)};return {path,anchor:h.slice(1)}}
export default function App({initialPath}){
 const [location,setLocation]=useState(()=>initialPath?{path:initialPath,anchor:''}:readLocation());
 const {path,anchor}=location;const route=routeFor(path);const Page=route.Component;
 useEffect(()=>{const update=()=>setLocation(readLocation());window.addEventListener('hashchange',update);window.addEventListener('popstate',update);return()=>{window.removeEventListener('hashchange',update);window.removeEventListener('popstate',update)}},[]);
 useEffect(()=>{document.title=`${route.title} | Compliance Mate`;const updateMeta=(name,content)=>{let el=document.head.querySelector(`meta[name="${name}"]`);if(!el){el=document.createElement('meta');el.name=name;document.head.append(el)}el.content=content};updateMeta('description',route.description||description);updateMeta('robots',route.draft?'noindex, follow':'index, follow');for(const [property,content] of [['og:title',document.title],['og:description',route.description||description],['og:type',route.article?'article':'website']]){const el=document.head.querySelector(`meta[property="${property}"]`);if(el)el.content=content;}let canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.href=`${(import.meta.env.VITE_SITE_URL||'https://compliancemate.co.in').replace(/\/$/,'')}${path==='/'?'/':path+'/'}`;const ogUrl=document.head.querySelector('meta[property="og:url"]');if(ogUrl&&canonical)ogUrl.content=canonical.href;const frame=requestAnimationFrame(()=>{if(anchor)document.getElementById(anchor)?.scrollIntoView({block:'start',behavior:'instant'});else window.scrollTo({top:0,behavior:'instant'})});return()=>cancelAnimationFrame(frame)},[path,anchor,route.title,route.description,route.draft]);
 const navigate = e => {if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const a=e.target.closest('a[href]');if(!a||a.target||a.hasAttribute('download'))return;const href=a.getAttribute('href');if(!href.startsWith('/'))return;const url=new URL(a.href);if(url.origin!==window.location.origin)return;e.preventDefault();if(url.pathname!==window.location.pathname||url.hash!==window.location.hash)window.history.pushState(null,'',url.pathname+url.search+url.hash);setLocation(readLocation());};
 return <div onClick={navigate} className="flex min-h-screen flex-col bg-white font-sans text-text-color antialiased [&_section[id]]:scroll-mt-24"><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:p-3">Skip to content</a><IntroLoader path={path} anchor={anchor}/><Navbar logoSrc={logo} currentPath={path} currentAnchor={anchor}/><main id="main-content" className="min-w-0 flex-1" tabIndex={-1}>{route.article&&<nav aria-label="Breadcrumb" className="mx-auto flex max-w-[1440px] flex-wrap gap-2 px-5 pt-5 text-xs font-semibold text-primary-blue"><a href="/#home">Home</a> / <a href="/blogs">Blogs</a> / <a href={`/blogs/${route.category}`}>{route.category==='biogas'?'Biogas':'License & Certification'}</a></nav>}<div key={path} className="motion-safe:animate-page-enter"><Page/></div></main><Footer logoSrc={logo}/></div>
}
