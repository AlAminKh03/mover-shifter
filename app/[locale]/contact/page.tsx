import { SITE } from "@/config/site";
import type { Metadata } from "next";
import type { Locale } from "@/i18n.config";
import Link from "next/link";
import ContactForm from "@/app/contact/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr ? `تواصل مع ${SITE.name} — الدوحة، قطر` : `Contact ${SITE.name} — Doha, Qatar`,
    description: isAr
      ? `واتساب، هاتف، أو بريد إلكتروني — اختر ما يناسبك. ورشتنا في ${SITE.addressLine}، ${SITE.city}. رد خلال 48 ساعة، وعادةً أسرع.`
      : `WhatsApp, phone, or email — pick what suits you. Workshop in ${SITE.addressLine}, ${SITE.city}. Replies within 48 hours, usually faster.`,
    keywords: [
      "contact cabinet maker Qatar",
      "wall cabinets phone Doha",
      "curtains Qatar contact",
      "WhatsApp interiors studio Qatar",
      "Al Wokra joinery workshop",
      "furniture workshop Doha",
    ],
    alternates: {
      canonical: `${SITE.url}/${locale}/contact/`,
      languages: {
        en: `${SITE.url}/en/contact/`,
        ar: `${SITE.url}/ar/contact/`,
        "x-default": `${SITE.url}/en/contact/`,
      },
    },
    openGraph: {
      title: `Contact | ${SITE.name}`,
      description: isAr
        ? "واتساب، هاتف، أو بريد إلكتروني — اختر ما يناسبك. ورشتنا في الوكرة، قطر."
        : "WhatsApp, phone, or email — pick what suits you. Workshop in Al Wokra, Qatar.",
      url: `${SITE.url}/${locale}/contact/`,
      siteName: SITE.name,
      images: [
        {
          url: `${SITE.url}/social.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Contact`,
        },
      ],
      type: "website",
      locale: isAr ? "ar_AR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Contact | ${SITE.name}`,
      description: isAr ? "تواصل معنا — واتساب، هاتف، أو بريد إلكتروني." : "Get in touch — WhatsApp, phone, or email.",
      images: [`${SITE.url}/social.jpg`],
    },
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    isAr ? "مرحباً! أرغب في التحدث عن مهمة." : "Hi! I'd like to talk about a job.",
  )}`;

  const mapQuery = encodeURIComponent(
    `${SITE.addressLine}, ${SITE.city}, ${SITE.country}`,
  );

  return (
    <article className="bg-background">
      {/* ────────  HEADER  ──────── */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(18_100%_96%/0.5),transparent_60%)]"
          aria-hidden
        />
        <div className="layout-container pt-20 pb-10 sm:pt-24 sm:pb-14">
          <div className="flex items-baseline gap-3">
            <span className="h-px w-10 bg-secondary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {isAr ? "تواصل معنا" : "Get in touch"}
            </span>
          </div>

          <h1 className="font-display mt-5 max-w-3xl text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[3.75rem]">
            {isAr ? (
              <>
                اختر الطريقة{" "}
                <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[8px]">
                  التي تناسبك.
                </em>
              </>
            ) : (
              <>
                Pick the way{" "}
                <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[8px]">
                  that suits you.
                </em>
              </>
            )}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {isAr
              ? "واتساب يمنحك أسرع رد. البريد الإلكتروني هو الأفضل لإرسال الصور أو مخطط المبنى. الهاتف إذا كنت تفضل التحدث مباشرة."
              : "WhatsApp gets the fastest reply. Email is best for forwarding photos or a building plan. Phone if you'd rather talk it through."}
          </p>
        </div>
      </section>

      {/* ────────  QUICK CONTACTS  ──────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="layout-container py-8 sm:py-10">
          <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            <ContactPill
              kind="whatsapp"
              label="WhatsApp"
              value={isAr ? "أسرع رد" : "Fastest reply"}
              href={whatsappUrl}
              external
              note={isAr ? "نهدف للرد خلال ساعة واحدة خلال النهار." : "We aim to reply within an hour during the day."}
            />
            <ContactPill
              kind="phone"
              label={isAr ? "الهاتف" : "Phone"}
              value={SITE.phoneDisplay}
              href={`tel:${SITE.phoneE164}`}
              note={isAr ? "دعم على مدار الساعة" : "24/7 Support"}
            />
            <ContactPill
              kind="email"
              label={isAr ? "البريد الإلكتروني" : "Email"}
              value={SITE.email}
              href={`mailto:${SITE.email}`}
              note={isAr ? "الأفضل للمخططات والصور والقوائم التفصيلية." : "Best for plans, photos, or detailed lists."}
            />
          </ul>
        </div>
      </section>

      {/* ────────  FORM  ──────── */}
      <ContactForm locale={locale} />

      {/* ────────  MAP  ──────── */}
      <section className="layout-section pt-0">
        <div className="layout-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                {isAr ? "موقعنا" : "Find us"}
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                {isAr ? "ورشتنا في الوكرة." : "Our Al Wokra workshop."}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {isAr
                  ? "يتم قياس الموقع في مكانك — لا حاجة للحضور إلينا. لكن إن أردت رؤية الورشة أو معاينة عينات الأبواب والتشطيبات، فأنت مرحب بالزيارة."
                  : "Site measures are done at your place — no need to come over. But if you'd like to see the workshop or check door and finish samples, you're welcome to drop in."}
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {isAr ? "العنوان" : "Address"}
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold text-secondary">
                    {SITE.city}, {SITE.country}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {isAr ? "ساعات العمل" : "Hours"}
                  </dt>
                  <dd className="mt-1 text-foreground/85">
                    {isAr ? (
                      <>
                        الأحد – الخميس · 8 صباحًا – 6 مساءً
                        <br />
                        السبت · بموعد مسبق
                        <br />
                        الجمعة · مغلق
                      </>
                    ) : (
                      <>
                        Sun – Thu · 8am – 6pm
                        <br />
                        Sat · By appointment
                        <br />
                        Fri · Closed
                      </>
                    )}
                  </dd>
                </div>
              </dl>

              <Link
                href={`https://maps.google.com/?q=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                {isAr ? "افتح في خرائط جوجل ←" : "Open in Google Maps →"}
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-md sm:aspect-video">
                <iframe
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  title="Al Wokra, Qatar — workshop location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

/* ─────────────────────  ContactPill  ─────────────────── */

function ContactPill({
  kind,
  label,
  value,
  href,
  note,
  external,
}: {
  kind: "whatsapp" | "phone" | "email";
  label: string;
  value: string;
  href: string;
  note: string;
  external?: boolean;
}) {
  const accent = {
    whatsapp: "bg-[#25D366] text-white",
    phone: "bg-secondary text-white",
    email: "bg-primary text-primary-foreground",
  }[kind];

  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-lg"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accent}`}
        >
          {kind === "whatsapp" && (
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          )}
          {kind === "phone" && (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.79a2 2 0 01-.5 1.945L8.21 10.79a16 16 0 005 5l1.54-1.21a2 2 0 011.945-.5l2.79.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          )}
          {kind === "email" && (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </p>
          <p className="mt-1 break-all font-display text-base font-bold text-secondary sm:text-lg">
            {value}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {note}
          </p>
        </div>
      </a>
    </li>
  );
}
