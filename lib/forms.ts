export const contactEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ?? "";

export const newsletterEndpoint =
  process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT?.trim() ?? "";

export async function postForm(endpoint: string, form: HTMLFormElement) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
