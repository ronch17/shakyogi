import { z } from "zod";

const PHONE_PATTERN = /^0\d{1,2}-?\d{7}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "נא להזין שם מלא")
    .max(100, "השם ארוך מדי"),
  email: z
    .string()
    .trim()
    .min(1, "נא להזין כתובת אימייל")
    .email("כתובת אימייל לא תקינה"),
  phone: z
    .string()
    .trim()
    .regex(PHONE_PATTERN, "נא להזין מספר טלפון תקין"),
  message: z
    .string()
    .trim()
    .min(5, "נא להזין הודעה")
    .max(2000, "ההודעה ארוכה מדי"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
