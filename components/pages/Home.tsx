"use client";

import { HeroSlider } from "@/components/home/HeroSlider";
import { Button } from "@/components/ui/button";
import { MovingPackingVideo } from "@/components/MovingPackingVideo";
import { WorkVideos } from "@/components/WorkVideos";
import { SITE } from "@/config/site";
import { ALL_WORK_PHOTOS } from "@/config/work-photos";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

interface HomeProps {
  locale: Locale;
}

const servicesEN = [
  {
    title: "Wall cabinets & joinery.",
    text: "Wall-mounted cabinets, storage walls, display units, and bespoke shelving. Surveyed, built, and fitted flush and level. Soft-close hardware, your choice of finish.",
  },
  {
    title: "Kitchens & wardrobes.",
    text: "Full kitchen cabinetry, built-in wardrobes, and TV units — measured to the room and made to order. Same team that surveyed you.",
  },
  {
    title: "Curtains & blinds.",
    text: "Measured, made, and hung — sheers, blackout, roman and roller blinds, and motorised tracks. Our own fabric library on site.",
  },
  {
    title: "Sofas, majlis & reupholstery.",
    text: "Custom sofas and majlis built to measure, plus reupholstery — frames, foam, and fabric or leather.",
  },
  {
    title: "Flooring & furniture moving.",
    text: "SPC and wood flooring with clean subfloor prep, and home, villa, and office furniture moving across Qatar — wrap, load, drive, place.",
  },
  {
    title: "What we don't do.",
    text: "Flat-pack assembly only. Long-haul international moves. Dedicated storage. Same-day jobs we haven't surveyed. We'll point you to people who do those well.",
  },
];

const servicesAR = [
  {
    title: "خزائن الحائط والنجارة.",
    text: "خزائن معلقة على الحائط، جدران تخزين، وحدات عرض، والرفوف المخصصة. تم المسح والبناء والتركيب بشكل متساوي ومستوي. أجهزة إغلاق ناعمة، من اختيارك.",
  },
  {
    title: "المطابخ والدواليب.",
    text: "خزائن مطابخ كاملة، دواليب مدمجة، ووحدات تلفاز — مقاسة حسب الغرفة وتصنع حسب الطلب. نفس الفريق الذي قام بالمسح.",
  },
  {
    title: "الستائر والعمى.",
    text: "مقاسة وصنعت وعلقت — شيفون، معتم، ستائر رومانية وأسطوانية، ومسارات مؤتمتة. مكتبتنا الخاصة من الأقمشة في الموقع.",
  },
  {
    title: "الأرائك والسدادات وإعادة التغطية.",
    text: "أرائك مخصصة وسدادات مصنوعة حسب الطلب، بالإضافة إلى إعادة التغطية — إطارات، رغوة، وأقمشة أو جلد.",
  },
  {
    title: "الأرضيات ونقل الأثاث.",
    text: "أرضيات SPC والخشب مع تنظيف الأساس النظيف، ونقل الأثاث المنزلي والفيلا والمكتب عبر قطر - لف، تحميل، قيادة، وضع.",
  },
  {
    title: "ما لا نفعله.",
    text: "تجميع الأثاث المسطح فقط. النقل الدولي طويل المدى. التخزين المخصص. الوظائف نفس اليوم لم نقم بالمسح. سنشير لك إلى الأشخاص الذين يقومون بتلك الأعمال بشكل جيد.",
  },
];

const processEN = [
  { stamp: "Day 0", title: "Survey", note: "Free site measure. We check the room, fixings, services, and the finish you want." },
  { stamp: "Week 1", title: "Quote", note: "Drawings and a fixed, itemised quote. Materials ordered once you approve." },
  { stamp: "Build", title: "Make", note: "Cabinets, curtains, and furniture made to your measurements and finish." },
  { stamp: "Fit day", title: "Install", note: "Delivered and fitted flush and level. Aligned, set, site left clean." },
  { stamp: "Done", title: "Handover", note: "One team, one invoice — cabinets, curtains, sofas, flooring, or a full fit-out." },
];

const processAR = [
  { stamp: "اليوم 0", title: "المسح", note: "قياس موقع مجاني. نتحقق من الغرفة والتثبيتات والخدمات والتشطيب الذي تريده." },
  { stamp: "الأسبوع 1", title: "السعر", note: "رسومات وعرض سعر ثابت ومفصل. يتم طلب المواد بمجرد موافقتك." },
  { stamp: "البناء", title: "الصنع", note: "خزائن وستائر وأثاث مصنوع حسب قياساتك والتشطيب." },
  { stamp: "يوم التركيب", title: "التثبيت", note: "تم التسليم والتركيب بشكل مستوي ومستقيم. محاذاة، تعيين، موقع نظيف." },
  { stamp: "تم", title: "تسليم", note: "فريق واحد، فاتورة واحدة — خزائن، ستائر، أرائك، أرضيات، أو تناسب كامل." },
];

const galleryTilts = [-2.5, 2, -1.5, 2.5, -2, 1, -1.5, 2, -2, 1.5];

const gallery = ALL_WORK_PHOTOS.map((photo, i) => ({
  ...photo,
  rot: galleryTilts[i % galleryTilts.length],
}));

export default function Home({ locale }: HomeProps) {
  const isArabic = locale === 'ar';
  const services = isArabic ? servicesAR : servicesEN;
  const process = isArabic ? processAR : processEN;

  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    isArabic ? "مرحبا! أود الحصول على عرض سعر." : "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      <HeroSlider locale={locale} />

      {/* ────────────  WHAT WE DO (numbered list) ─────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {isArabic ? "ما نفعله" : "What we do"}
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {isArabic ? "كل شيء للغرفة — من الخزائن إلى الستائر." : "Everything for the room — cabinets to curtains."}
            </h2>

            <ol className="mt-8 sm:mt-12">
              {services.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: isArabic ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-1 border-b border-border py-5 first:border-t sm:gap-x-6 sm:py-9 lg:grid-cols-[3.5rem_1fr_1.5fr]"
                >
                  <span
                    className="font-mono text-xl font-bold tabular-nums text-primary/80 sm:text-2xl lg:text-3xl"
                    aria-hidden
                  >
                    .{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold leading-tight text-secondary sm:text-lg sm:col-start-2 lg:text-2xl">
                    {s.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-[1.6] text-muted-foreground sm:text-base lg:col-start-3 lg:text-base">
                    {s.text}
                  </p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 pt-2 sm:mt-10">
              <Link
                href={`/${locale}/services`}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                {isArabic ? "شاهد قائمة الخدمات الكاملة" : "See the full service list"}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────  HOW A JOB RUNS (vertical on mobile, horizontal on desktop) ─────────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="layout-container py-10 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {isArabic ? "كيف يعمل" : "How it works"}
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {isArabic ? "من مكالمتك إلى غرفة نهائية." : "From your call to a finished room."}
            </h2>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="mt-8 space-y-6 sm:hidden">
            {process.map((p, i) => (
              <motion.div
                key={p.stamp}
                initial={{ opacity: 0, x: isArabic ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative flex gap-4 pb-6 last:pb-0"
              >
                <div className="relative flex flex-col items-center">
                  <div
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      i === process.length - 1
                        ? "border-primary bg-primary"
                        : "border-secondary bg-background"
                    }`}
                  >
                    {i === process.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  {i < process.length - 1 && (
                    <div className="absolute top-6 bottom-0 w-px bg-secondary/20" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    {p.stamp}
                  </p>
                  <p className="mt-1 font-display text-lg font-extrabold text-secondary">
                    {p.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal scroll */}
          <div className="mt-10 -mx-4 hidden overflow-x-auto px-4 pb-2 sm:block">
            <ol className="relative flex min-w-max items-start gap-8 sm:gap-12">
              <span
                className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                aria-hidden
              />
              {process.map((p, i) => (
                <motion.li
                  key={p.stamp}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative flex w-56 flex-col items-start"
                >
                  <span
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      i === process.length - 1
                        ? "border-primary bg-primary"
                        : "border-secondary bg-background"
                    }`}
                  >
                    {i === process.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    {p.stamp}
                  </p>
                  <p className="mt-1 font-display text-xl font-extrabold text-secondary">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ────────────  GET STARTED (sign-off card) ──── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl sm:rounded-[2rem] sm:p-10 lg:p-12">
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {isArabic ? "— ابدأ الآن —" : "— Get started —"}
              </p>
              <h2 className="font-display mt-3 text-xl font-bold leading-tight text-secondary sm:mt-4 sm:text-2xl lg:text-3xl">
                {isArabic ? "مسح مجاني. عرض سعر ثابت في غضون 48 ساعة." : "Free survey. Fixed quote in 48 hours."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
                {isArabic
                  ? "أخبرنا بالغرفة وما تريد القيام به — خزائن أو مطبخ أو ستائر أو أريكة أو أرضيات أو نقل أو تناسب كامل. نقوم بالمسح مجاناً ونعود في غضون 48 ساعة مع عرض سعر ثابت ومفصل."
                  : "Tell us the room and what you want done — cabinets, a kitchen, curtains, a sofa, flooring, a move, or a full fit-out. We survey free and come back within 48 hours with a fixed, itemised quote."}
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:flex-1 sm:px-7 sm:text-base"
                  asChild
                >
                  <Link href={`/${locale}/quote`}>
                    {isArabic ? "احصل على عرض سعر مجاني" : "Get a free quote"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full gap-2 rounded-full border-secondary/20 bg-background px-6 text-sm font-medium text-secondary hover:bg-muted sm:w-auto sm:px-7 sm:text-base"
                  asChild
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-right font-mono text-[10px] tracking-wider text-muted-foreground sm:mt-7 sm:text-[11px]">
                — {SITE.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
