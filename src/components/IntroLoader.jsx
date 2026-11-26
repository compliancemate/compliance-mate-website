import { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';

// A short brand introduction, not a fake network-loading indicator.
// Only shown once per tab session, on a normal home entry.
export default function IntroLoader({ path, anchor }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (path !== '/' || (anchor && anchor !== 'home')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try { if (sessionStorage.getItem('cm-intro-v2')) return; } catch { /* private browsing */ }
    setVisible(true);
    const finish = () => {
      try { sessionStorage.setItem('cm-intro-v2','1'); } catch { /* private browsing */ }
      setVisible(false);
    };
    const timer = window.setTimeout(finish, 1050);
    const onKey = e => { if (e.key === 'Escape' || e.key === 'Tab') finish(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', finish);
    return () => {window.clearTimeout(timer);window.removeEventListener('keydown',onKey);window.removeEventListener('pointerdown',finish);setVisible(false);};
  }, [path,anchor]);
  if (!visible) return null;
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-[#f9fbf7] motion-safe:animate-intro-exit">
    <div className="flex w-[min(82vw,320px)] flex-col items-center gap-5 motion-safe:animate-hero-enter">
      <img src={logo} alt="" className="h-[88px] w-auto max-w-full object-contain mix-blend-multiply"/>
      <div className="h-[3px] w-32 overflow-hidden rounded-full bg-slate-200"><div className="h-full origin-left rounded-full bg-gradient-to-r from-primary-blue to-primary-green motion-safe:animate-intro-bar"/></div>
      <span className="text-[10px] font-semibold uppercase tracking-[.25em] text-emerald-800">Clarity. Compliance. Growth.</span>
    </div>
  </div>;
}
