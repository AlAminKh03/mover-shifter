"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { SITE } from "@/config/site";
import type { Locale } from "@/i18n.config";
import { quoteServiceGroups } from "@/config/quote-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

/**
 * Display-only Arabic labels for the fixed English option/group values in
 * quote-services.ts. The value actually submitted (and read by the business
 * over email) stays the English string — only what's shown to an Arabic
 * visitor changes.
 */
const groupLabelsAR: Record<string, string> = {
  "Wall cabinets & joinery": "خزائن الحائط والنجارة",
  "Curtains, sofas & finishes": "الستائر والأرائك والتشطيبات",
  "Moving & extras": "النقل والخدمات الإضافية",
  Other: "أخرى",
};

const optionLabelsAR: Record<string, string> = {
  "Wall cabinets": "خزائن الحائط",
  "Kitchen cabinets": "خزائن المطبخ",
  "Built-in wardrobe": "دولاب مدمج",
  "TV unit or media wall": "وحدة تلفزيون أو جدار وسائط",
  "Storage / shelving joinery": "تخزين / رفوف نجارة",
  "Rework or re-door existing cabinets": "إعادة عمل أو تغيير أبواب الخزائن الحالية",
  "Curtains or blinds": "ستائر أو مظلات",
  "Custom sofa or majlis": "أريكة أو مجلس مخصص",
  Reupholstery: "إعادة تنجيد",
  "SPC or wood flooring": "أرضيات SPC أو خشبية",
  "Furniture moving / shifting": "نقل / ترحيل الأثاث",
  "Packing & transport": "التغليف والنقل",
  "Handyman & small repairs": "أعمال صيانة وإصلاحات صغيرة",
  "Not sure yet": "لست متأكدًا بعد",
};

function buildFormSchema(isAr: boolean) {
  return z.object({
    name: z.string().min(2, isAr ? "أخبرنا باسمك" : "Tell us your name"),
    phone: z.string().min(8, isAr ? "رقم الهاتف من فضلك" : "Phone number please"),
    email: z.string().email(isAr ? "بريد إلكتروني صالح من فضلك" : "Valid email please"),
    location: z.string().min(2, isAr ? "أين تقع المهمة؟" : "Where is the job?"),
    services: z.array(z.string()).min(1, isAr ? "اختر خدمة واحدة على الأقل" : "Pick at least one service"),
    notes: z.string().optional(),
  });
}

type FormValues = z.infer<ReturnType<typeof buildFormSchema>>;

export default function QuotePage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSchema = buildFormSchema(isAr);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      services: [],
      notes: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      const html = `
        <h2>New quote request</h2>
        <table style="width:100%;border-collapse:collapse;font-family:system-ui;font-size:14px;">
          <tr><td style="padding:10px;border:1px solid #dee2e6;width:140px;"><strong>Name</strong></td><td style="padding:10px;border:1px solid #dee2e6;">${data.name}</td></tr>
          <tr><td style="padding:10px;border:1px solid #dee2e6;"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #dee2e6;">${data.phone}</td></tr>
          <tr><td style="padding:10px;border:1px solid #dee2e6;"><strong>Email</strong></td><td style="padding:10px;border:1px solid #dee2e6;">${data.email}</td></tr>
          <tr><td style="padding:10px;border:1px solid #dee2e6;"><strong>Location</strong></td><td style="padding:10px;border:1px solid #dee2e6;">${data.location}</td></tr>
          <tr><td style="padding:10px;border:1px solid #dee2e6;"><strong>Services</strong></td><td style="padding:10px;border:1px solid #dee2e6;">${data.services.join(", ")}</td></tr>
          <tr><td style="padding:10px;border:1px solid #dee2e6;"><strong>Notes</strong></td><td style="padding:10px;border:1px solid #dee2e6;">${data.notes || "—"}</td></tr>
        </table>`;

      Object.entries({
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: data.location,
        services: data.services.join(", "),
        notes: data.notes ?? "",
      }).forEach(([k, v]) => formData.append(k, v));
      formData.append("_subject", `Quote request: ${data.name}`);
      formData.append("_template", "box");
      formData.append("_captcha", "false");
      formData.append("_html", html);

      const response = await fetch(
        `https://formsubmit.co/ajax/${SITE.email}`,
        { method: "POST", body: formData },
      );
      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: isAr ? "تم الإرسال — سنعود إليك خلال 48 ساعة." : "Sent — we'll come back within 48 hours.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: isAr ? "تعذر الإرسال" : "Could not send",
        description: isAr ? "حاول مرة أخرى، أو تواصل معنا عبر واتساب." : "Try again, or reach us on WhatsApp.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="bg-muted/40 min-h-screen">
      <section className="mx-auto w-full max-w-md px-4 pt-12 pb-12 sm:max-w-lg sm:pt-16 sm:pb-16">
        {/* Header */}
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            {isAr ? "اطلب عرض سعر" : "Ask for a quote"}
          </p>
          <h1 className="font-display mt-2 text-xl font-extrabold leading-[1.2] tracking-tight text-secondary sm:text-2xl">
            {isAr ? "بعض التفاصيل. عرض سعر خلال 48 ساعة." : "A few details. Quote in 48h."}
          </h1>
        </div>

        {/* Form card with primary accent stripe */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
        >
          {/* Top accent stripe */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

          <div className="space-y-4 p-5 sm:p-6">
            <Row>
              <Field label={isAr ? "الاسم" : "Name"} required error={form.formState.errors.name?.message}>
                <Input
                  {...form.register("name")}
                  autoComplete="name"
                  placeholder={isAr ? "خالد" : "Khalid"}
                  className="h-11 rounded-lg border-border bg-background focus-visible:ring-primary"
                />
              </Field>
              <Field label={isAr ? "الهاتف" : "Phone"} required error={form.formState.errors.phone?.message}>
                <Input
                  type="tel"
                  {...form.register("phone")}
                  autoComplete="tel"
                  placeholder="+974 …"
                  className="h-11 rounded-lg border-border bg-background focus-visible:ring-primary"
                />
              </Field>
            </Row>

            <Field label={isAr ? "البريد الإلكتروني" : "Email"} required error={form.formState.errors.email?.message}>
              <Input
                type="email"
                {...form.register("email")}
                autoComplete="email"
                placeholder="you@example.com"
                className="h-11 rounded-lg border-border bg-background focus-visible:ring-primary"
              />
            </Field>

            <Field label={isAr ? "الموقع" : "Location"} required error={form.formState.errors.location?.message}>
              <Input
                {...form.register("location")}
                placeholder={isAr ? "مثال: شقة في لوسيل — مطبخ ودولابان" : "e.g. Lusail apartment — kitchen + 2 wardrobes"}
                className="h-11 rounded-lg border-border bg-background focus-visible:ring-primary"
              />
            </Field>

            <div>
              <p className="text-sm font-semibold text-secondary">
                {isAr ? "الخدمات" : "Services"} <span className="text-primary">*</span>
              </p>
              <Controller
                control={form.control}
                name="services"
                render={({ field }) => (
                  <div className="mt-2.5 space-y-3">
                    {quoteServiceGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {isAr ? groupLabelsAR[group.label] ?? group.label : group.label}
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {group.options.map((option) => {
                            const checked = field.value.includes(option);
                            return (
                              <button
                                type="button"
                                key={option}
                                onClick={() =>
                                  field.onChange(
                                    checked
                                      ? field.value.filter((v) => v !== option)
                                      : [...field.value, option],
                                  )
                                }
                                className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-all sm:text-[13px] ${
                                  checked
                                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                    : "border-border bg-background text-foreground/85 hover:border-primary/40 hover:bg-primary/5"
                                }`}
                              >
                                {checked && (
                                  <Check
                                    className="h-3 w-3"
                                    strokeWidth={3}
                                  />
                                )}
                                {isAr ? optionLabelsAR[option] ?? option : option}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    {form.formState.errors.services && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.services.message as string}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <Field label={isAr ? "ملاحظات (اختياري)" : "Notes (optional)"}>
              <Textarea
                rows={3}
                {...form.register("notes")}
                placeholder={isAr ? "المقاسات التقريبية، أفكار التشطيب، الموعد النهائي — أي شيء يساعدنا في تحديد السعر." : "Rough sizes, finish ideas, deadline — anything that helps us quote."}
                className="rounded-lg border-border bg-background focus-visible:ring-primary resize-none"
              />
            </Field>
          </div>

          {/* Submit footer */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-border bg-muted/30 px-5 py-4 sm:flex-row sm:px-6">
            <p className="text-[11px] text-muted-foreground sm:text-left">
              {isAr ? "يُرسل إلى" : "Goes to"}{" "}
              <span className="font-mono text-foreground">{SITE.email}</span>
              {isAr ? " · لا يُشارك أبدًا." : " · Never shared."}
            </p>
            <Button
              type="submit"
              className="h-10 gap-1.5 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  {isAr ? "جارٍ الإرسال" : "Sending"}
                </>
              ) : (
                <>
                  {isAr ? "إرسال" : "Send"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </Button>
          </div>
        </form>
      </section>
    </article>
  );
}

/* ──────────────────────  primitives  ─────────────────── */

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
}

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-secondary">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </label>
  );
}
