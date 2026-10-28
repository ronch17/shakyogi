"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import {
  contactSchema,
  type ContactFormValues,
} from "@/app/lib/validation/contact";
import { submitContactForm } from "@/app/lib/actions/contact";

const inputClasses =
  "w-full rounded-lg border border-border bg-section-1 px-4 py-2.5 text-right transition-colors placeholder:text-text-subtle focus:outline-none focus:border-primary-light focus:bg-white focus:ring-2 focus:ring-primary-light/40";

const labelClasses = "text-sm font-semibold text-primary";
const fieldErrorClasses = "text-sm text-primary-dark";

export default function ContactForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = (
    values: ContactFormValues,
    event?: React.BaseSyntheticEvent
  ) => {
    setResult(null);
    const form = event?.target as HTMLFormElement;
    const website =
      (form?.elements.namedItem("website") as HTMLInputElement | null)
        ?.value ?? "";
    const renderedAt = Number(
      (form?.elements.namedItem("renderedAt") as HTMLInputElement | null)
        ?.value ?? 0
    );

    startTransition(async () => {
      const response = await submitContactForm(values, {
        website,
        renderedAt,
      });

      if (response.success) {
        reset();
      } else if (response.fieldErrors) {
        for (const [field, message] of Object.entries(response.fieldErrors)) {
          setError(field as keyof ContactFormValues, { message });
        }
      }

      setResult({ success: response.success, message: response.message });
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={clsx(
        "flex flex-col gap-5 w-full max-w-lg bg-white/60 border border-border rounded-tl-[40px] rounded-br-[40px] p-8 sm:p-10 shadow-sm",
        className
      )}
    >
      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">אתר</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Records mount time so the server can reject submissions that arrive too fast to be human */}
      <input
        type="hidden"
        name="renderedAt"
        ref={(el) => {
          if (el && !el.value) el.value = String(Date.now());
        }}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClasses}>
          שם מלא
        </label>
        <input
          id="name"
          type="text"
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p className={fieldErrorClasses}>{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={labelClasses}>
          אימייל
        </label>
        <input
          id="email"
          type="email"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className={fieldErrorClasses}>{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className={labelClasses}>
          טלפון
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="050-1234567"
          className={inputClasses}
          {...register("phone")}
        />
        {errors.phone && (
          <p className={fieldErrorClasses}>{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClasses}>
          הודעה
        </label>
        <textarea
          id="message"
          rows={5}
          className={clsx(inputClasses, "resize-none")}
          {...register("message")}
        />
        {errors.message && (
          <p className={fieldErrorClasses}>{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary text-white py-3 px-8 rounded-tl-2xl rounded-br-2xl hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "שולח..." : "שליחה"}
      </button>

      {result && (
        <p
          role="status"
          aria-live="polite"
          className={clsx(
            "flex items-center justify-center gap-2 text-sm text-center rounded-lg border py-2.5 px-4",
            result.success
              ? "bg-primary/10 border-primary/30 text-primary-dark"
              : "bg-section-4 border-primary-dark/30 text-primary-dark font-medium"
          )}
        >
          <span aria-hidden="true">{result.success ? "✓" : "!"}</span>
          {result.message}
        </p>
      )}
    </form>
  );
}
