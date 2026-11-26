import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Search, ShieldCheck, ClipboardList, Phone, FileCheck, Factory, Recycle, HeartPulse, Truck, Package, Monitor, BatteryCharging, Circle, Droplet, Car, Layers } from 'lucide-react';
import { licenseBase, licenseCategories } from '../../data/licenseData';
import StickyContactForm from '../../components/stickyForm';

const icons = { Factory, ShieldCheck, Recycle, HeartPulse, Truck, Package, Monitor, BatteryCharging, Circle, Droplet, Car, Layers };
const groups = ['All categories', 'Industrial approvals', 'Waste authorizations', 'EPR compliance', 'Product certification', 'Trade & product compliance'];
const steps = [
  ['Understand your business', 'Review the activity, location, project stage and existing permissions.'],
  ['Identify applicable approvals', 'Build a clear list of relevant requirements and supporting documents.'],
  ['Prepare and coordinate', 'Organise application information and support submission and clarifications.'],
  ['Maintain compliance', 'Plan renewal dates, records and ongoing reporting where applicable.'],
];
const faq = [
  ['How do I know which license I need?', 'Share your location, business activity, proposed capacity and current project stage. We can help assess the applicable requirements.'],
  ['Can you help with new applications and renewals?', 'We can discuss documentation, application preparation and renewal requirements for the relevant service.'],
  ['Is approval guaranteed?', 'No. The competent authority decides applications based on eligibility, documentation, inspections and applicable requirements.'],
];
export default function LicensingCertification() {
  const [group, setGroup] = useState(groups[0]);
  const [query, setQuery] = useState('');
  const root = useRef(null);
  useEffect(() => {
    if (!root.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('motion-safe:animate-fade-in'); observer.unobserve(entry.target); } }), {threshold: .12});
    root.current.querySelectorAll('[data-license-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [group, query]);
  const visible = licenseCategories.filter(item => (group === groups[0] || item.group === group) && `${item.title} ${item.description} ${item.group} ${item.keywords}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <div ref={root} className="mx-auto grid w-full max-w-[1440px] min-w-0 gap-y-6 px-4 pb-14 pt-6 text-text-color sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,350px)] lg:grid-rows-[auto_1fr] lg:gap-x-7">
      <section className="relative isolate min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00265E] via-[#084674] to-[#08746c] p-6 text-white sm:p-10 lg:col-start-1 lg:row-start-1">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border-[56px] border-white/5 motion-safe:animate-orbit-drift"/>
        <nav aria-label="Breadcrumb" className="relative flex flex-wrap gap-2 text-xs text-blue-100"><a href="/" className="hover:text-lime-200">Home</a><span>/</span><a href="/#services" className="hover:text-lime-200">Services</a><span>/</span><span aria-current="page">Licensing &amp; Certification</span></nav>
        <div className="relative mt-8 motion-safe:animate-hero-enter">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-lime-200"><ShieldCheck size={16}/> Licensing & product compliance consultancy</span>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-white">Clarity in compliance.<span className="mt-2 block text-lime-300 motion-safe:animate-word-reveal">Confidence in business.</span></h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">Explore environmental licensing, EPR, BIS certification, legal metrology, wireless equipment and foreign trade compliance. Find the right service for your business and discuss your requirements with our team.</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href={`${licenseBase}#license-categories`} className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-dark-blue transition hover:bg-lime-200">Explore 12 categories <ArrowRight size={17}/></a><a href={`${licenseBase}#license-consultation`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><Phone size={16}/> Talk to an expert</a></div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4 text-xs font-medium text-blue-100">{['Project-specific guidance','Transparent documentation','Renewal support'].map(text=><span key={text} className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-lime-300"/>{text}</span>)}</div>
        </div>
      </section>
      <aside className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
        <div id="license-consultation" className="scroll-mt-24 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:overscroll-contain lg:rounded-2xl lg:p-1"><StickyContactForm sticky={false} title="Discuss your licensing needs" description="Tell us about your business and requirements." service="Licensing & Certification"/></div>
      </aside>
      <div className="min-w-0 lg:col-start-1 lg:row-start-2">
        <section id="license-categories" className="scroll-mt-24 py-7 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Find your service</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">Licensing &amp; certification categories</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Select a category to explore its dedicated page. Not sure where to start? Our consultation team can help.</p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4"><label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 focus-within:border-primary-blue"><Search size={19} className="shrink-0 text-emerald-700"/><span className="sr-only">Search licensing categories</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search CTE, BIS, WPC, IEC..." className="w-full min-w-0 bg-transparent text-sm text-dark-blue outline-none placeholder:text-slate-500"/></label><div className="mt-3 flex flex-wrap gap-2" aria-label="Filter licensing categories">{groups.map(g=><button type="button" key={g} aria-pressed={group===g} onClick={()=>setGroup(g)} className={`rounded-lg px-3 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-primary-blue ${group===g?'bg-dark-blue text-white':'border border-slate-200 bg-white text-slate-700 hover:bg-emerald-50'}`}>{g}</button>)}</div></div>
          <p aria-live="polite" className="my-4 text-xs font-medium text-slate-500">{visible.length} of {licenseCategories.length} services</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{visible.map((item)=>{const Icon=icons[item.icon];return <a data-license-reveal key={item.slug} href={`${licenseBase}/${item.slug}`} className="group relative flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-primary-blue"><div className="flex items-center justify-between gap-3"><span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-emerald-100 text-emerald-800"><Icon size={24} strokeWidth={1.7}/></span><ArrowUpRight size={19} className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700"/></div><span className="mt-4 text-[10px] font-bold uppercase tracking-wide text-emerald-700">{item.group}</span><h3 className="mt-2 text-lg font-bold leading-snug text-dark-blue">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.description}</p><span className="mt-4 inline-flex items-center gap-2 border-t border-slate-100 pt-3 text-xs font-bold text-primary-blue">Explore service <ArrowRight size={14}/></span></a>})}</div>
          {!visible.length&&<div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center"><p className="font-semibold text-dark-blue">No matching categories</p><button type="button" onClick={()=>{setGroup(groups[0]);setQuery('')}} className="mt-3 text-sm font-bold text-primary-blue underline">Reset filters</button></div>}
        </section>
        <section data-license-reveal className="rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-emerald-700">A practical roadmap</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-dark-blue">From requirement to readiness.</h2><ol className="mt-6 grid gap-4 sm:grid-cols-2">{steps.map(([title,text],i)=><li key={title} className="rounded-xl border border-white bg-white/90 p-5"><span className="grid size-8 place-items-center rounded-lg bg-dark-blue text-xs font-bold text-white">0{i+1}</span><h3 className="mt-3 font-bold text-dark-blue">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></li>)}</ol></section>
        <section data-license-reveal className="py-12"><h2 className="text-3xl font-semibold tracking-tight text-dark-blue">What to keep ready</h2><p className="mt-3 text-sm leading-7 text-slate-600">The actual checklist depends on the application. These details help us understand your requirements before we begin.</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{['Business name and registration details','Site or manufacturing premises details','Nature of activity, products and capacity','Process description or product specifications','Existing consents or registrations','Relevant waste, testing or import information'].map(t=><div key={t} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700"><FileCheck size={18} className="shrink-0 text-emerald-700"/>{t}</div>)}</div></section>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"><ClipboardList size={30} className="text-emerald-700"/><h2 className="mt-4 text-2xl font-semibold text-dark-blue">Frequently asked questions</h2><div className="mt-5 space-y-3">{faq.map(([q,a])=><details key={q} className="group rounded-xl border border-slate-200 bg-white p-4"><summary className="cursor-pointer font-semibold text-dark-blue">{q}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{a}</p></details>)}</div><p className="mt-5 text-xs leading-6 text-slate-500">Requirements vary by activity, jurisdiction and applicable regulations. Final decisions rest with the relevant authorities.</p></section>
        <section className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-dark-blue p-6 text-white"><div><h2 className="text-xl font-semibold text-white">Not sure which approval applies?</h2><p className="mt-1 text-sm text-blue-100">Share your requirements with our team.</p></div><a href={`${licenseBase}#license-consultation`} className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-bold text-dark-blue hover:bg-lime-200">Get guidance <ArrowRight size={16}/></a></section>
      </div>
    </div>
  );
}
