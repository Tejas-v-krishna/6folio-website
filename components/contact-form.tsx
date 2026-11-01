"use client";

import { useState } from "react";

const needsOptions = [
  "Brand direction",
  "Content and copy",
  "Photography",
  "Film and motion",
  "Marketing and growth",
  "Website and digital experience",
  "Not sure yet",
];

const budgetOptions = [
  "Not sure yet",
  "Under 5,000",
  "5,000 to 15,000",
  "15,000 to 40,000",
  "40,000 and above",
];

const timelineOptions = [
  "Not sure yet",
  "Within 2 weeks",
  "1 to 3 months",
  "3 to 6 months",
  "Flexible",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [needs, setNeeds] = useState<string[]>([]);

  function toggleNeed(value: string) {
    setNeeds((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const timeline = String(formData.get("timeline") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please provide your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please provide a valid work email.";
    }
    if (!company) nextErrors.company = "Please provide your company or brand.";
    if (needs.length === 0) nextErrors.needs = "Please select at least one area you need help with.";
    if (description.length < 10) {
      nextErrors.description = "Please tell us a little about the project.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          needs,
          description,
          budget,
          timeline,
          website,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        configured?: boolean;
      };

      if (response.ok && result.ok) {
        setStatus("success");
        setMessage("Thanks. Your message is on its way.");
        form.reset();
        setNeeds([]);
        return;
      }

      setStatus("error");
      setMessage(
        result.message ??
          "Something did not go through. Please try again, or contact us directly using the details below."
      );
    } catch {
      setStatus("error");
      setMessage("Something did not go through. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`field ${errors.name ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`field ${errors.email ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="company">
          Company or brand
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={`field ${errors.company ? "field-error" : ""}`}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-2 text-sm text-error">
            {errors.company}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="field-label mb-3">What do you need help with?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {needsOptions.map((option) => (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
                needs.includes(option)
                  ? "border-accent bg-accent-soft"
                  : "border-rule hover:border-ink"
              }`}
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[var(--color-accent)]"
                checked={needs.includes(option)}
                onChange={() => toggleNeed(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {errors.needs && <p className="mt-2 text-sm text-error">{errors.needs}</p>}
      </fieldset>

      <div>
        <label className="field-label" htmlFor="description">
          Tell us a little about the project
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={`field resize-y ${errors.description ? "field-error" : ""}`}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description && (
          <p id="description-error" className="mt-2 text-sm text-error">
            {errors.description}
          </p>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="budget">
            Approximate budget (optional)
          </label>
          <select id="budget" name="budget" className="field" defaultValue="">
            <option value="">Prefer not to say</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="timeline">
            Desired start date (optional)
          </label>
          <select id="timeline" name="timeline" className="field" defaultValue="">
            <option value="">Not sure yet</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending your enquiry..." : "Send project enquiry"}
        </button>
        <div aria-live="polite">
          {status === "success" && (
            <p className="text-sm text-success" role="status">
              {message}
            </p>
          )}
          {status === "error" && (
            <p className="max-w-md text-sm text-error" role="alert">
              {message}
            </p>
          )}
        </div>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        We will use these details to respond to your enquiry. Add a full privacy policy
        and data-handling explanation before collecting live submissions.
      </p>
    </form>
  );
}
