"use client";

import { useState } from "react";
import { contactEndpoint, postForm } from "@/lib/forms";

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
    "idle" | "submitting" | "success" | "error" | "unconfigured"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
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
            className="form-field"
          />
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
            className="form-field"
          />
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
          className="form-field min-h-[9rem] resize-y"
        />
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
