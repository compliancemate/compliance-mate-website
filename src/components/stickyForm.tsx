import { useId, useState } from "react";


import type {
  ChangeEvent,
  FormEvent,
} from "react";

// ======================================
// COMPLIANCE MATE - CONTACT CONFIGURATION
// ======================================

const CONTACT_PHONE = "8796711794";

// Add your verified Compliance Mate email.
const CONTACT_EMAIL = "info@compliance.co.in";
 
// Add your new Google Apps Script Web App URL
// after configuring your Compliance Mate lead sheet.
const GOOGLE_SCRIPT_URL = "";

// ======================================
// TYPES
// ======================================

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface StickyContactFormProps {
  sticky?: boolean;
  title?: string;
  description?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

// ======================================
// SERVICE OPTIONS
// ======================================

const serviceOptions = [
  "CBG & Biogas Plant Setup",
  "Environmental Licensing",
  "EPR Compliance",
  "Recycling Plant Consultancy",
  "DPR & Feasibility Reports",
  "Bank Loan Assistance",
  "Other Services",
];

// ======================================
// CONTACT FORM COMPONENT
// ======================================

export default function StickyContactForm({
  sticky = true,
  title = "Book a Technical Consultation",
  description = "Connect with Compliance Mate for environmental compliance, licensing, CBG plant setup and recycling project consultancy.",
}: StickyContactFormProps) {
  const formId = useId();

  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "unverified"
  >("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  // ======================================
  // HANDLE INPUT CHANGES
  // ======================================

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("idle");
    setStatusMessage("");
  };

  // ======================================
  // EMAIL FALLBACK
  // ======================================

  const sendEmailFallback = () => {
    if (!CONTACT_EMAIL) {
      setStatus("error");

      setStatusMessage(
        "Online enquiries are not configured yet. Please contact our team using the phone number above."
      );

      return;
    }

    const subject =
      "Compliance Mate - New Consultation Enquiry";

    const body = [
      "New Consultation Enquiry",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      "",
      "Project Requirements:",
      formData.message,
    ].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setStatus("unverified");
    setStatusMessage(
      "Your email application has been opened. Please send the email to complete your enquiry."
    );
  };

  // ======================================
  // FORM SUBMISSION
  // ======================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus("idle");
    setStatusMessage("");

    if (!GOOGLE_SCRIPT_URL) {
      sendEmailFallback();
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          subject:
            "compliance-mate-consultation",
          source:
            "Compliance Mate Website",
          submittedAt:
            new Date().toISOString(),
        }),
      });

      // An opaque no-cors response cannot confirm
      // whether the endpoint saved the enquiry.
      setStatus("unverified");

      setStatusMessage(
        "Your request was sent, but receipt could not be verified. Please call us if you need confirmation."
      );

    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setStatus("error");

      setStatusMessage(
        "Unable to submit your enquiry. Please try again or call our team."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ======================================
  // JSX
  // ======================================

  return (
    <aside
      className={`w-full min-w-0 ${
        sticky
          ? "lg:sticky lg:top-28"
          : "relative"
      }`}
      aria-label="Compliance Mate consultation form"
    >
      <div className="w-full overflow-hidden rounded-2xl border border-primary-blue/15 bg-background shadow-[0_12px_45px_rgba(0,38,94,0.12)]">

        {/* HEADER */}

        <div className="bg-gradient-to-r from-primary-blue to-dark-blue px-6 py-6 text-white">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">

            <span className="h-2 w-2 rounded-full bg-primary-green" />

            COMPLIANCE MATE
          </span>

          <h3 className="mt-4 text-xl font-extrabold leading-snug text-white md:text-2xl">
            {title}
          </h3>

          <p className="mt-3 text-xs leading-6 text-white/85">
            {description}
          </p>

        </div>

        {/* FORM CONTENT */}

        <div className="bg-background p-5 sm:p-6">

          {/* PHONE BUTTON */}

          <a
            href={`tel:+91${CONTACT_PHONE}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-green px-4 py-3 text-sm font-extrabold text-text-color transition-all duration-200 hover:-translate-y-0.5 hover:bg-dark-green hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.8a2 2 0 0 1-.45 2.11L9.09 10.9a16 16 0 0 0 4 4l1.27-1.22a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.68A2 2 0 0 1 22 16.92Z" />
            </svg>

            Call +91 {CONTACT_PHONE}
          </a>

          {/* DIVIDER */}

          <div className="my-5 flex items-center gap-3">

            <div className="h-px flex-1 bg-primary-blue/15" />

            <span className="text-[10px] font-bold tracking-wider text-text-color/50">
              OR SEND AN ENQUIRY
            </span>

            <div className="h-px flex-1 bg-primary-blue/15" />

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            {/* NAME */}

            <div className="flex flex-col gap-1.5">

              <label
                htmlFor={`${formId}-name`}
                className="text-xs font-bold text-dark-blue"
              >
                Full Name
                <span className="ml-1 text-accent-orange">
                  *
                </span>
              </label>

              <input
                id={`${formId}-name`}
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                className="w-full rounded-lg border border-primary-blue/15 bg-white px-3.5 py-3 text-sm text-text-color outline-none transition-all placeholder:text-text-color/40 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
              />

            </div>

            {/* EMAIL */}

            <div className="flex flex-col gap-1.5">

              <label
                htmlFor={`${formId}-email`}
                className="text-xs font-bold text-dark-blue"
              >
                Email Address
                <span className="ml-1 text-accent-orange">
                  *
                </span>
              </label>

              <input
                id={`${formId}-email`}
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-primary-blue/15 bg-white px-3.5 py-3 text-sm text-text-color outline-none transition-all placeholder:text-text-color/40 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
              />

            </div>

            {/* PHONE */}

            <div className="flex flex-col gap-1.5">

              <label
                htmlFor={`${formId}-phone`}
                className="text-xs font-bold text-dark-blue"
              >
                Phone Number
                <span className="ml-1 text-accent-orange">
                  *
                </span>
              </label>

              <input
                id={`${formId}-phone`}
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9+()\\s-]{7,20}"
                title="Enter a valid phone number"
                required
                className="w-full rounded-lg border border-primary-blue/15 bg-white px-3.5 py-3 text-sm text-text-color outline-none transition-all placeholder:text-text-color/40 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
              />

            </div>

            {/* SERVICE SELECT */}

            <div className="flex flex-col gap-1.5">

              <label
                htmlFor={`${formId}-service`}
                className="text-xs font-bold text-dark-blue"
              >
                Service Required
              </label>

              <select
                id={`${formId}-service`}
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-primary-blue/15 bg-white px-3.5 py-3 text-sm text-text-color outline-none transition-all focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
              >
                <option value="">
                  Select a service
                </option>

                {serviceOptions.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}
              </select>

            </div>

            {/* MESSAGE */}

            <div className="flex flex-col gap-1.5">

              <label
                htmlFor={`${formId}-message`}
                className="text-xs font-bold text-dark-blue"
              >
                Project Requirements
                <span className="ml-1 text-accent-orange">
                  *
                </span>
              </label>

              <textarea
                id={`${formId}-message`}
                name="message"
                rows={3}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                maxLength={3000}
                required
                className="w-full resize-y rounded-lg border border-primary-blue/15 bg-white px-3.5 py-3 text-sm text-text-color outline-none transition-all placeholder:text-text-color/40 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
              />

            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary-blue px-5 py-3.5 text-sm font-extrabold text-white transition-all duration-300 hover:enabled:-translate-y-0.5 hover:enabled:bg-dark-blue hover:enabled:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Submitting Request..."
                : "Book Consultation →"}
            </button>

          </form>

          {/* SUBMISSION STATUS */}

          {statusMessage && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-4 rounded-lg border px-4 py-3 text-xs leading-6 ${
                status === "error"
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-primary-blue/15 bg-primary-blue/5 text-dark-blue"
              }`}
            >
              {statusMessage}
            </div>
          )}

          {/* PRIVACY TEXT */}

          <p className="mt-5 text-center text-[11px] leading-5 text-text-color/55">
            Your information will only be used
            to respond to your consultation enquiry.
          </p>

        </div>
      </div>
    </aside>
  );
}
