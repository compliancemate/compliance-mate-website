import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, FileCheck, ClipboardList, Building2, ChevronDown, BookOpen, Info } from 'lucide-react';
import StickyContactForm from '../../../components/stickyForm';
import { licenseBase, licenseCategories } from '../../../data/licenseData';

const sections = [['overview','Overview'],['eligibility','Who needs it'],['documents','Documents'],['process','Process'],['support','Our support'],['faqs','FAQs']];
const heading = 'mt-2 text-2xl font-bold tracking-tight text-dark-blue sm:text-3xl';
const kicker = 'text-xs font-bold uppercase tracking-[.16em] text-emerald-700';
const paragraph = 'mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8';

export default function LicensePageLayout({ slug, content }) {
  const item = licenseCategories.find(category => category.slug === slug);
  const root = useRef(null);
  useEffect(() => {
    if (!root.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('motion-safe:animate-fade-in'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    root.current.querySelectorAll('[data-license-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);
  if (!item || !content) return null;
  const path = `${licenseBase}/${slug}`;
  const related = [...licenseCategories.filter(c => c.slug !== slug && c.group === item.group), ...licenseCategories.filter(c => c.slug !== slug && c.group !== item.group)].slice(0,3);
  return (
    <div ref={root} className="mx-auto grid w-full max-w-[1440px] min-w-0 gap-6 px-4 pb-14 pt-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,350px)] lg:grid-rows-[auto_1fr] lg:gap-x-7">
      <section className="relative isolate min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00265E] via-[#06467c] to-[#08746c] p-6 text-white sm:p-10 lg:col-start-1 lg:row-start-1">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border-[48px] border-white/5 motion-safe:animate-orbit-drift"/>
        <nav aria-label="Breadcrumb" className="relative flex flex-wrap items-center gap-2 text-xs text-blue-100"><a href="/" className="hover:text-lime-200">Home</a><span>/</span><a href={licenseBase} className="hover:text-lime-200">Licensing &amp; Certification</a><span>/</span><span aria-current="page">{item.title}</span></nav>
        <div className="relative mt-7 motion-safe:animate-hero-enter">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-lime-200"><ShieldCheck size={16}/>{item.group}</span>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">{item.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">{item.description}</p>
          <div className="mt-6 flex flex-wrap gap-3"><a href={`${path}#license-detail-consultation`} className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-bold text-dark-blue transition hover:bg-lime-200">Discuss your requirements <ArrowRight size={16}/></a><a href={`${path}#documents`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"><ClipboardList size={16}/> View checklist</a></div>
          <div className="mt-7 flex items-start gap-3 border-t border-white/15 pt-5 text-sm text-blue-100"><Building2 size={20} className="shrink-0 text-lime-300"/><span><span className="block text-[10px] font-bold uppercase tracking-wider text-lime-200">Relevant authority</span><span className="mt-1 block">{content.authority}</span></span></div>
        </div>
      </section>
      <aside className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
        <div id="license-detail-consultation" className="scroll-mt-24 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:overscroll-contain lg:rounded-2xl lg:p-1"><StickyContactForm sticky={false} title="Talk to a licensing expert" description={item.title} service={item.title}/></div>
      </aside>
      <div className="min-w-0 lg:col-start-1 lg:row-start-2">
        <nav aria-label="On this page" className="mb-7 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">{sections.map(([id,label])=><a key={id} href={`${path}#${id}`} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-dark-blue transition hover:bg-emerald-100 hover:text-emerald-800">{label}</a>)}</nav>
        <section id="overview" data-license-reveal className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"><p className={kicker}>Understand the requirement</p><h2 className={heading}>What is {item.title}?</h2><p className={paragraph}>{content.overview}</p><div className="mt-5 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-slate-700"><Info size={19} className="mt-0.5 shrink-0 text-primary-blue"/><span>{content.note}</span></div></section>
        <section id="eligibility" data-license-reveal className="scroll-mt-24 py-9"><p className={kicker}>Applicability</p><h2 className={heading}>Who should consider this service?</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{content.audience.map(text=><div key={text} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-700"/><span className="text-sm font-medium leading-6 text-slate-700">{text}</span></div>)}</div></section>
        <section id="documents" data-license-reveal className="scroll-mt-24 rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 p-6 sm:p-8"><p className={kicker}>Application readiness</p><h2 className={heading}>Documents to keep ready</h2><p className="mt-3 text-sm leading-6 text-slate-600">An indicative checklist. The final requirements depend on your application, jurisdiction and the current official procedure.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{content.documents.map(text=><li key={text} className="flex items-start gap-3 rounded-xl border border-white bg-white/90 p-4 text-sm leading-6 text-slate-700"><FileCheck size={19} className="mt-0.5 shrink-0 text-emerald-700"/>{text}</li>)}</ul></section>
        <section id="process" data-license-reveal className="scroll-mt-24 py-10"><p className={kicker}>Step by step</p><h2 className={heading}>How the application process works</h2><ol className="mt-6 grid gap-4 sm:grid-cols-2">{content.steps.map(([title,text],i)=><li key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md"><span className="grid size-10 place-items-center rounded-xl bg-dark-blue text-sm font-bold text-lime-200">0{i+1}</span><h3 className="mt-4 text-base font-bold text-dark-blue">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></li>)}</ol></section>
        <section id="support" data-license-reveal className="scroll-mt-24 rounded-3xl bg-gradient-to-br from-dark-blue to-[#075c66] p-6 text-white sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-lime-200">Your compliance partner</p><h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">How Compliance Mate can help</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{content.support.map(text=><div key={text} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-lime-300"/>{text}</div>)}</div><p className="mt-5 text-sm leading-6 text-blue-100">We assist with assessment, preparation and coordination. Grant, validity, fees and processing time remain subject to the competent authority and applicable rules.</p><a href={`${path}#license-detail-consultation`} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-bold text-dark-blue hover:bg-lime-200">Speak with our team <ArrowRight size={16}/></a></section>
        <section id="faqs" data-license-reveal className="scroll-mt-24 py-10"><p className={kicker}>Common questions</p><h2 className={heading}>Frequently asked questions</h2><div className="mt-5 space-y-3">{content.faqs.map(([q,a])=><details key={q} className="group rounded-2xl border border-slate-200 bg-white p-4 open:border-emerald-300"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold leading-6 text-dark-blue [&::-webkit-details-marker]:hidden">{q}<ChevronDown size={18} className="shrink-0 text-emerald-700 transition group-open:rotate-180"/></summary><p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">{a}</p></details>)}</div></section>
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><div className="flex items-center gap-2"><BookOpen size={20} className="text-emerald-700"/><h2 className="text-lg font-bold text-dark-blue">Official resources</h2></div><p className="mt-2 text-sm leading-6 text-slate-600">Consult the competent authority for current notifications, forms and procedures.</p><ul className="mt-3 space-y-2">{content.sources.map(([name,url])=><li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm font-semibold text-primary-blue hover:underline">{name}<ArrowUpRight size={15} className="mt-1 shrink-0"/></a></li>)}</ul></section>
        <section data-license-reveal className="py-9"><h2 className="text-2xl font-bold text-dark-blue">Explore related services</h2><div className="mt-4 grid gap-3 sm:grid-cols-3">{related.map(c=><a key={c.slug} href={`${licenseBase}/${c.slug}`} className="group flex items-start justify-between gap-2 rounded-2xl border border-slate-200 p-4 text-sm font-semibold leading-6 text-dark-blue transition hover:border-emerald-400 hover:bg-emerald-50">{c.title}<ArrowUpRight size={16} className="mt-1 shrink-0 text-emerald-700"/></a>)}</div></section>
        <a href={licenseBase} className="inline-flex items-center gap-2 text-sm font-bold text-primary-blue hover:text-emerald-700"><ArrowLeft size={17}/> All licensing categories</a>
      </div>
    </div>
  );
}
