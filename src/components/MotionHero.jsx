import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Leaf } from 'lucide-react';

const slides = [
  {
    image: '/home-carousel/cbg-plant.webp',
    alt: 'Illustrative modern compressed biogas facility with green digesters and gas processing equipment',
    label: 'Renewable energy consultancy',
    title: 'CBG & Biogas', accent: 'Plant Setup',
    description: 'End-to-end consultancy for plant planning, bankable DPRs, licensing, financing and implementation support.',
    href: '/services/biogas', button: 'Explore CBG Services',
    points: ['Feedstock assessment', 'Technology selection', 'Plant development'],
  },
  {
    image: '/home-carousel/dpr-planning.webp',
    alt: 'Illustrative gas purification machinery and industrial process equipment',
    label: 'Project planning & advisory',
    title: 'Bankable DPR &', accent: 'Feasibility Reports',
    description: 'Understand technical requirements, investment costs and financial viability before committing to your project.',
    href: '/services/dpr-feasibility', button: 'Explore DPR Services',
    points: ['Technical feasibility', 'CAPEX & OPEX', 'Financial projections'],
  },
  {
    image: '/home-carousel/licensing-inspection.webp',
    alt: 'Illustrative engineer inspecting a biogas plant',
    label: 'Environmental compliance',
    title: 'Licensing &', accent: 'Certification Support',
    description: 'Navigate CTE, CTO, EPR and other applicable approvals with structured documentation and practical guidance.',
    href: '/services/licensing-certification', button: 'Explore Licensing Services',
    points: ['Environmental approvals', 'Application assistance', 'Compliance guidance'],
  },
  {
    image: '/home-carousel/commissioning.webp',
    alt: 'Illustrative aerial view of a biogas production facility surrounded by agricultural land',
    label: 'End-to-end project consultancy',
    title: 'From Planning to', accent: 'Plant Commissioning',
    description: 'Move forward with a clear project roadmap, machinery evaluation, financing assistance and implementation coordination.',
    href: '/services/biogas', button: 'Explore Plant Development',
    points: ['Machinery selection', 'Financing support', 'Execution coordination'],
  },
];

const ROTATION_MS = 5500;
const wrap = (index) => (index + slides.length) % slides.length;
const reveal = 'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none';

export default function MotionHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    // Start the initial text entrance after the first rendered frame.
    // Content remains visible in the server-rendered version.
    const frame = requestAnimationFrame(() => setReady(true));
    return () => {
      media.removeEventListener('change', update);
      cancelAnimationFrame(frame);
    };
  }, []);

useEffect(() => {
  if (paused || focused || reduced) return;

  const timer = window.setInterval(() => {
    if (!document.hidden) {
      setActive((i) => wrap(i + 1));
    }
  }, ROTATION_MS);

  return () => window.clearInterval(timer);
}, [active, paused, focused, reduced]);
  const go = (direction) => setActive((i) => wrap(i + direction));
  const slide = slides[active];

  return (
    <section id="home" aria-label="Featured Compliance Mate services" aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-[#061e35] text-white"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <h1 className="sr-only">Compressed Biogas (CBG) Plant Setup, DPR and Environmental Licensing Consultancy in India</h1>

      {/* The image layer contains only photos. All text and controls are real HTML. */}
      {slides.map((item, index) => (
        <div key={item.image} aria-hidden={index !== active}
          className={`pointer-events-none absolute inset-0 -z-20 overflow-hidden transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${active === index ? 'opacity-100' : 'opacity-0'}`}>
          <img src={item.image} alt={item.alt} fetchPriority={index === 0 ? 'high' : 'low'}
            decoding="async" className={`h-full w-full object-cover object-[70%_center] transition-transform duration-[6500ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${active === index ? 'scale-[1.045]' : 'scale-100'}`} />
        </div>
      ))}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,25,44,.98)_0%,rgba(3,25,44,.87)_36%,rgba(3,25,44,.36)_78%,rgba(3,25,44,.23)_100%)] md:bg-[linear-gradient(90deg,rgba(3,25,44,.98)_0%,rgba(3,29,50,.94)_28%,rgba(3,29,50,.68)_49%,rgba(3,29,50,.14)_80%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#03192c]/80 to-transparent" />

      <div className="mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-end px-5 pb-5 pt-24 sm:min-h-[590px] sm:px-9 md:min-h-[540px] md:justify-center md:px-12 md:pb-24 md:pt-16 lg:min-h-[min(680px,78svh)] lg:px-16 xl:px-20">
        <div className="grid w-full max-w-[760px] items-center">
          {slides.map((item, index) => {
            const selected = index === active;
            const state = selected ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0';
            return (
              <div key={item.image} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`} aria-hidden={!selected} inert={!selected}
                className={`col-start-1 row-start-1 min-w-0 ${selected ? 'z-10' : 'pointer-events-none z-0'}`}>
                <div className={`${reveal} ${state} delay-0 ${selected && ready ? 'motion-safe:animate-hero-enter' : ''}`}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-lime-200/40 bg-[#052c42]/70 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-lime-200 sm:text-xs"><Leaf size={15} aria-hidden="true" />{item.label}</span>
                </div>
                <h2 className={`mt-5 text-[clamp(2.35rem,5.15vw,5.1rem)] font-bold leading-[1.04] tracking-[-.045em] text-white ${reveal} ${state} ${selected ? 'delay-100' : 'delay-0'}`}>
                  <span className="block">{item.title}</span>
                  <span className="mt-1 block text-lime-300">{item.accent}</span>
                </h2>
                <p className={`mt-5 max-w-[600px] text-sm leading-relaxed text-slate-100 sm:text-lg ${reveal} ${state} ${selected ? 'delay-200' : 'delay-0'}`}>{item.description}</p>
                <div className={`mt-7 flex flex-wrap gap-3 ${reveal} ${state} ${selected ? 'delay-300' : 'delay-0'}`}>
                  <a href="/contact" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-[#06223a] transition-colors hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Get Consultation <ArrowRight size={17} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1" /></a>
                  <a href={item.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/65 bg-[#082945]/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{item.button} <ArrowRight size={17} aria-hidden="true" /></a>
                </div>
                <div className={`mt-7 hidden flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-4 text-xs font-semibold text-white/90 sm:flex ${reveal} ${state} ${selected ? 'delay-[400ms]' : 'delay-0'}`}>
                  {item.points.map(point => <span key={point} className="inline-flex items-center gap-2"><span aria-hidden="true" className="size-1.5 rounded-full bg-lime-300" />{point}</span>)}
                </div>
              </div>
            );
          })}
        </div>

        {/* A single set of real, keyboard-accessible controls. */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/20 pt-4 md:absolute md:inset-x-12 md:bottom-5 md:mt-0 lg:inset-x-16 xl:inset-x-20">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="grid size-10 place-items-center rounded-full border border-white/40 bg-[#061e35]/50 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"><ChevronLeft size={22} aria-hidden="true" /></button>
            <button type="button" onClick={() => go(1)} aria-label="Next slide" className="grid size-10 place-items-center rounded-full border border-white/40 bg-[#061e35]/50 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"><ChevronRight size={22} aria-hidden="true" /></button>
            <span className="ml-1 hidden text-xs font-medium tabular-nums text-white/90 sm:inline">{String(active + 1).padStart(2, '0')} / 04</span>
          </div>
          <div className="flex items-center gap-1" aria-label="Select slide">
            {slides.map((item, index) => <button key={item.image} type="button" aria-label={`Show ${item.title} ${item.accent}`} aria-pressed={active === index} onClick={() => setActive(index)} className="grid h-10 w-6 place-items-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 sm:w-9"><span className={`block h-2 rounded-full transition-all motion-reduce:transition-none ${active === index ? 'w-5 bg-lime-300 sm:w-8' : 'w-2 bg-white/60'}`} /></button>)}
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] text-white/75 lg:block">Illustrative plant imagery</span>
            <button type="button" disabled={reduced} onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume automatic slideshow' : 'Pause automatic slideshow'} className="grid size-10 place-items-center rounded-full border border-white/40 bg-[#061e35]/50 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 disabled:opacity-50">{paused || reduced ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button>
          </div>
        </div>
        <span className="sr-only" aria-live={paused || focused ? 'polite' : 'off'}>{slide.title} {slide.accent}</span>
      </div>
    </section>
  );
}
