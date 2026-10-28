"use server";

import {
  contactSchema,
  type ContactFormValues,
} from "@/app/lib/validation/contact";

export type ContactActionResult = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
};

type ContactActionMeta = {
  website: string;
  renderedAt: number;
};

// Minimum time (ms) a human needs to fill the form; bots that submit instantly get rejected.
const MIN_FILL_TIME_MS = 1500;

export async function submitContactForm(
  values: ContactFormValues,
  meta: ContactActionMeta
): Promise<ContactActionResult> {
  // Honeypot: real visitors never fill this hidden field.
  if (meta.website) {
    return { success: true, message: "תודה! ההודעה נשלחה בהצלחה." };
  }

  if (!meta.renderedAt || Date.now() - meta.renderedAt < MIN_FILL_TIME_MS) {
    return { success: false, message: "אירעה שגיאה, נסו שוב." };
  }

  // Server-side validation with the same schema used on the client — never trust client input alone.
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      success: false,
      message: "יש לתקן את השדות המסומנים",
      fieldErrors,
    };
  }

  // TODO: wire this up to an email provider (e.g. Resend) or storage once decided.
  console.log("New contact form submission:", parsed.data);

  return {
    success: true,
    message: "תודה! ההודעה נשלחה בהצלחה, ניצור איתך קשר בהקדם.",
  };
}
