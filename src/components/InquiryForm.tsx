"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { copy } from "@/content/en";

type InquiryFormProps = {
  id?: string;
  compact?: boolean;
  embedded?: boolean;
};

export function InquiryForm({
  id = "inquiry-form",
  compact = false,
  embedded = false,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { form } = copy.contact;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: wire to CRM, email service, or Squarespace form endpoint
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  }

  const padding = compact ? "p-5 sm:p-6" : "p-6 sm:p-8";
  const shellClasses = embedded
    ? padding
    : `${id === "contact-inquiry" ? "scroll-mt-24 " : ""}rounded-2xl border border-mps-blue/10 bg-white shadow-xl shadow-mps-blue/5 ${padding}`;

  if (submitted) {
    return (
      <div
        className={
          embedded
            ? `${padding} text-center`
            : "rounded-2xl border border-mps-cyan/40 bg-mps-blue-light p-6 text-center sm:p-8"
        }
        role="status"
      >
        <p className="font-heading text-mps-h4 text-mps-navy">{form.success}</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={shellClasses}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-first`} className="text-small mb-1.5 block text-mps-navy">
            {form.firstName} <span className="text-mps-orange">*</span>
          </label>
          <input
            id={`${id}-first`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full rounded-xl border border-mps-blue/20 px-4 py-3 text-mps-navy transition focus:border-mps-blue focus:ring-2 focus:ring-mps-blue/20"
          />
        </div>
        <div>
          <label htmlFor={`${id}-last`} className="text-small mb-1.5 block text-mps-navy">
            {form.lastName} <span className="text-mps-orange">*</span>
          </label>
          <input
            id={`${id}-last`}
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full rounded-xl border border-mps-blue/20 px-4 py-3 text-mps-navy transition focus:border-mps-blue focus:ring-2 focus:ring-mps-blue/20"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="text-small mb-1.5 block text-mps-navy">
            {form.phone} <span className="text-mps-orange">*</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-mps-blue/20 px-4 py-3 text-mps-navy transition focus:border-mps-blue focus:ring-2 focus:ring-mps-blue/20"
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="text-small mb-1.5 block text-mps-navy">
            {form.email} <span className="text-mps-orange">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-mps-blue/20 px-4 py-3 text-mps-navy transition focus:border-mps-blue focus:ring-2 focus:ring-mps-blue/20"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-interest`} className="text-small mb-1.5 block text-mps-navy">
            {form.interest} <span className="text-mps-orange">*</span>
          </label>
          <select
            id={`${id}-interest`}
            name="interest"
            required
            className="w-full rounded-xl border border-mps-blue/20 bg-white px-4 py-3 text-mps-navy transition focus:border-mps-blue focus:ring-2 focus:ring-mps-blue/20"
            defaultValue=""
          >
            <option value="" disabled>
              —
            </option>
            {form.interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="text-small mb-1.5 block text-mps-navy">
            {form.message}
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={compact ? 3 : 4}
            placeholder={form.messagePlaceholder}
            className="w-full resize-y rounded-xl border border-mps-blue/20 px-4 py-3 text-mps-navy transition focus:border-mps-blue focus:ring-2 focus:ring-mps-blue/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-5 flex w-full items-center justify-center gap-2 disabled:opacity-70"
      >
        <Send className="h-4 w-4" aria-hidden />
        {submitting ? form.submitting : form.submit}
      </button>

      <p className="text-small mt-3 text-center text-mps-navy/60">{form.privacy}</p>
    </form>
  );
}
