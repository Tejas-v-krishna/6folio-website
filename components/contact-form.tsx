"use client";

import { useState } from "react";
import { contactEndpoint, postForm } from "@/lib/forms";

type FormErrors = {
  name?: string;
  email?: string;
  project?: string;
};

const needs = [
  "Brand direction",
  "Content and copy",
  "Photography",
  "Film and motion",
  "Marketing and growth",
  "Website and digital experience",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "invalid" | "submitting" | "success" | "error" | "unconfigured"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm(form: HTMLFormElement): FormErrors {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Please add your name.";
    if (!email) {
      nextErrors.email = "Please add your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please check the email address.";
    }
    if (!project) {
      nextErrors.project = "Please tell us a little about the project.";
    }

    return nextErrors;
  }

  function clearError(field: keyof FormErrors) {
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      const firstField = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    if (!contactEndpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");

    try {
      await postForm(contactEndpoint, form);
      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="form-field"
            onChange={() => clearError("name")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-[0.75rem] leading-5 text-[#b42318]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="form-label" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="form-field"
            onChange={() => clearError("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-[0.75rem] leading-5 text-[#b42318]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label className="form-label" htmlFor="company">
            Company or brand
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="form-field"
          />
        </div>
      </div>

      <fieldset className="mt-9 border-t border-rule pt-6">
        <legend className="form-label">What do you need help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {needs.map((need) => (
            <label key={need} className="service-check">
              <input type="checkbox" name="needs" value={need} />
              <span>{need}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-9">
        <label className="form-label" htmlFor="project">
          Tell us a little about the project
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={5}
          aria-invalid={errors.project ? true : undefined}
          aria-describedby={errors.project ? "project-error" : undefined}
          className="form-field min-h-[9rem] resize-y"
          onChange={() => clearError("project")}
        />
        {errors.project ? (
          <p id="project-error" className="mt-2 text-[0.75rem] leading-5 text-[#b42318]">
            {errors.project}
          </p>
        ) : null}
      </div>

      <div className="mt-9">
        <label className="form-label" htmlFor="start">
          Desired start date (optional)
        </label>
        <input id="start" name="start" type="text" className="form-field" />
      </div>

      <div className="mt-10 flex flex-col gap-5 border-t border-rule pt-6 sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-md text-[0.72rem] leading-5 text-muted">
          {contactEndpoint
            ? "This form sends your details to the studio's form provider. Do not include confidential information."
            : "This form is not connected to an enquiry inbox yet, so submissions are not delivered. Do not include confidential information. A direct contact channel will be published once it is confirmed."}
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-pill shrink-0 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send project enquiry"}
          <span className="btn-dot" aria-hidden="true" />
        </button>
      </div>

      <div
        role="status"
        aria-live="polite"
        className="mt-5 min-h-[1.5rem] text-sm leading-6 text-ink"
      >
        {status === "invalid" ? (
          <p>Please check the highlighted fields and try again.</p>
        ) : null}
        {status === "unconfigured" ? (
          <p>
            This form is not connected yet. Nothing has been sent. The studio
            will need to connect a form endpoint before enquiries can be
            received here.
          </p>
        ) : null}
        {status === "success" ? <p>Thank you. Your enquiry has been sent.</p> : null}
        {status === "error" ? (
          <p>
            Something went wrong, so your enquiry was not sent. Please try
            again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
