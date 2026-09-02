"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { SITE } from "@/config/site";
import type { Locale } from "@/i18n.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

function buildFormSchema(isAr: boolean) {
  return z.object({
    name: z.string().min(2, isAr ? "الاسم يجب أن يكون حرفين على الأقل" : "Name must be at least 2 characters"),
    email: z.string().email(isAr ? "الرجاء إدخال بريد إلكتروني صحيح" : "Please enter a valid email"),
    phone: z.string().optional(),
    message: z.string().min(10, isAr ? "الرسالة يجب أن تكون 10 أحرف على الأقل" : "Message must be at least 10 characters"),
  });
}

type FormValues = z.infer<ReturnType<typeof buildFormSchema>>;

export default function ContactForm({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSchema = buildFormSchema(isAr);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      const html = `
        <h2>Website contact</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Name</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Email</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.phone || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Message</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.message}</td></tr>
        </table>`;
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone ?? "");
      formData.append("message", data.message);
      formData.append("_subject", `Contact form: ${data.name}`);
      formData.append("_template", "box");
      formData.append("_captcha", "false");
      formData.append("_html", html);

      const response = await fetch(
        `https://formsubmit.co/ajax/${SITE.email}`,
        { method: "POST", body: formData },
      );

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: isAr ? "تم إرسال الرسالة" : "Message sent",
        description: isAr ? "سنعاود التواصل معك قريبًا." : "We will get back to you shortly.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: isAr ? "تعذر الإرسال" : "Could not send",
        description: isAr ? "حاول مرة أخرى أو تواصل معنا عبر واتساب." : "Please try again or reach us on WhatsApp.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="layout-section">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              {isAr ? "أو أرسل رسالة" : "Or send a note"}
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
              {isAr ? "أخبرنا قليلاً عن المهمة." : "Tell us a bit about the job."}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {isAr
                ? "كلما شاركت تفاصيل أكثر — العناوين، التواريخ، ما هو مطلوب — كان عرض السعر الأول أقرب للدقة. نرد خلال 48 ساعة، وعادةً أسرع."
                : "The more you can share — addresses, dates, what's involved — the closer the first quote lands. We reply within 48 hours, usually faster."}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {isAr ? "يصل النموذج إلى" : "Form goes to"}{" "}
              <span className="font-mono text-foreground">{SITE.email}</span>
            </p>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label={isAr ? "اسمك" : "Your name"}
                  error={form.formState.errors.name?.message}
                >
                  <Input
                    id="name"
                    {...form.register("name")}
                    autoComplete="name"
                    placeholder={isAr ? "خالد" : "Khalid"}
                    className="h-11 rounded-lg"
                  />
                </Field>
                <Field
                  id="email"
                  label={isAr ? "البريد الإلكتروني" : "Email"}
                  error={form.formState.errors.email?.message}
                >
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-lg"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field id="phone" label={isAr ? "الهاتف (اختياري)" : "Phone (optional)"}>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    autoComplete="tel"
                    placeholder="+974 …"
                    className="h-11 rounded-lg"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field
                  id="message"
                  label={isAr ? "ما هي المهمة؟" : "What's the job?"}
                  error={form.formState.errors.message?.message}
                >
                  <Textarea
                    id="message"
                    rows={6}
                    {...form.register("message")}
                    placeholder={isAr ? "التواريخ، العنوان، نطاق العمل التقريبي — أي شيء يساعدنا في تحديد السعر." : "Dates, address, rough scope — anything that helps us quote."}
                    className="rounded-lg"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 h-12 w-full rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isAr ? "جارٍ الإرسال…" : "Sending…"}
                  </>
                ) : isAr ? (
                  "إرسال الرسالة"
                ) : (
                  "Send message"
                )}
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                {isAr
                  ? "لن نشارك بياناتك أبدًا. لا نشرة إخبارية، لا رسائل مزعجة — فقط رد على مهمتك."
                  : "We'll never share your details. No newsletter, no spam — just a reply about the job."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  children,
  error,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
