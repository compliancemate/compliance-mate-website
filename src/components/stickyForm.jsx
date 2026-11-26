import { useId, useState } from "react";
import { ArrowUpRight, Mail, MessageCircleMore, MessageSquareText, Phone, ShieldCheck, UserRound, } from "lucide-react";
// Add your deployed Google Apps Script Web App URL ending in /exec here.
// A normal Google Sheets sharing URL will NOT receive submissions.
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";
const CONTACT_PHONE = "8796711794";
const EMPTY_VALUES = {
    name: "",
    phone: "",
    email: "",
    message: "",
};
// Styling is supplied entirely by Tailwind utilities.
export default function StickyContactForm({ sticky = true, title = "Talk to a Project Expert", description = "Expert guidance for your next project.", service = "Technical Consultation", }) {
    const id = useId();
    const [values, setValues] = useState(EMPTY_VALUES);
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const handleChange = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        setFeedback(null);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sending)
            return;
        if (!GOOGLE_SCRIPT_URL.trim()) {
            setFeedback({
                error: true,
                message: "Online enquiries aren't connected yet. Please call our team for assistance.",
            });
            return;
        }
        setSending(true);
        setFeedback(null);
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
               body: JSON.stringify({
    ...values,
    service,
    source: "Compliance Mate Website",
    pageUrl:
      window.location.origin +
      window.location.pathname +
      window.location.hash,
    submittedAt: new Date().toISOString(),
}),
            });
            // no-cors cannot confirm whether the Google Apps Script saved the row.
            setFeedback({
                error: false,
                message: "Your enquiry was sent, but receipt couldn't be verified. Call us if you need confirmation.",
            });
        }
        catch (error) {
            console.error("Consultation form submission failed:", error);
            setFeedback({ error: true, message: "Couldn't send your enquiry. Please call us or try again." });
        }
        finally {
            setSending(false);
        }
    };
    return (<aside className={`w-full min-w-0 ${sticky ? "lg:sticky lg:top-24" : ""}`} aria-label="Consultation enquiry form">
      
      <section className="mx-auto w-full max-w-[390px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg before:block before:h-1 before:bg-gradient-to-r before:from-primary-blue before:via-teal-500 before:to-primary-green before:content-['']">
        <header className="border-b border-slate-100 bg-gradient-to-br from-white to-emerald-50 p-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-[10px] font-extrabold tracking-wider text-emerald-800">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-green-100 text-emerald-700" aria-hidden="true">
                <MessageCircleMore size={16} strokeWidth={2.2}/>
              </span>
              Free consultation
            </p>
            <a className="flex shrink-0 items-center gap-1 rounded-full bg-blue-50 px-2.5 py-2 text-[11px] font-bold text-primary-blue hover:bg-blue-100" href={`tel:+91${CONTACT_PHONE}`} aria-label={`Call expert at +91 ${CONTACT_PHONE}`}>
              <Phone size={12} strokeWidth={2.2} aria-hidden="true"/> Call expert
            </a>
          </div>
          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-dark-blue">{title}<span className="text-emerald-600">.</span></h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">{description}</p>
        </header>

        <div className="p-4">
          <form className="grid gap-2.5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 max-[340px]:grid-cols-1">
              <div className="relative min-w-0 [&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-3 [&>svg]:text-emerald-700">
                <label className="sr-only" htmlFor={`${id}-name`}>Your name</label>
                <UserRound size={16} strokeWidth={1.9} aria-hidden="true"/>
                <input id={`${id}-name`} className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-3 pl-9 text-sm text-dark-blue outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={100} required value={values.name} onChange={handleChange}/>
              </div>
              <div className="relative min-w-0 [&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-3 [&>svg]:text-emerald-700">
                <label className="sr-only" htmlFor={`${id}-phone`}>Phone number</label>
                <Phone size={16} strokeWidth={1.9} aria-hidden="true"/>
                <input id={`${id}-phone`} className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-3 pl-9 text-sm text-dark-blue outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" name="phone" type="tel" autoComplete="tel" pattern="[+0-9\s\-]{7,20}" inputMode="tel" placeholder="Phone" maxLength={20} required value={values.phone} onChange={handleChange}/>
              </div>
            </div>
            <div className="relative min-w-0 [&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-3 [&>svg]:text-emerald-700">
              <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
              <Mail size={16} strokeWidth={1.9} aria-hidden="true"/>
              <input id={`${id}-email`} className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-3 pl-9 text-sm text-dark-blue outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" name="email" type="email" autoComplete="email" placeholder="Email address" maxLength={254} required value={values.email} onChange={handleChange}/>
            </div>
            <div className="relative min-w-0 [&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-3 [&>svg]:text-emerald-700">
              <label className="sr-only" htmlFor={`${id}-message`}>Your project requirements</label>
              <MessageSquareText size={16} strokeWidth={1.9} aria-hidden="true"/>
              <textarea id={`${id}-message`} className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-3 pl-9 text-sm text-dark-blue outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" name="message" rows={2} placeholder="Tell us about your project..." maxLength={3000} required value={values.message} onChange={handleChange}/>
            </div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-800 to-emerald-600 px-3 py-3 text-sm font-bold text-white shadow-sm transition hover:shadow-md disabled:opacity-60" disabled={sending}>
              {sending ? "Sending enquiry..." : "Get a Free Consultation"}
              {!sending && <ArrowUpRight className="shrink-0" size={17} strokeWidth={2.2} aria-hidden="true"/>}
            </button>
          </form>
          {feedback && <p className={`mt-3 rounded-lg p-3 text-xs ${feedback.error ? "bg-red-50 text-red-700" : "bg-blue-50 text-dark-blue"}`} role="status" aria-live="polite">{feedback.message}</p>}
          <p className="mt-3 flex items-center justify-center gap-1 text-[11px] text-slate-500 [&_svg]:text-emerald-700"><ShieldCheck size={14} strokeWidth={1.9} aria-hidden="true"/> Only used to respond to your enquiry.</p>
        </div>
      </section>
    </aside>);
}
