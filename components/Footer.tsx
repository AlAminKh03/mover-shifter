import { SITE } from "@/config/site";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card">
      <div className="layout-container py-12 pb-10 md:py-16 md:pb-14">
        <div className="mb-12 rounded-2xl border border-border/70 bg-gradient-to-br from-primary/[0.12] via-card to-secondary/35 p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="max-w-xl">
            <p className="font-display text-xl font-semibold text-foreground md:text-2xl">
              Planning a move in Doha or beyond?
            </p>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Send your locations and dates — we&apos;ll reply with a clear plan
              and quote.
            </p>
          </div>
          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/quote">Get a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-[52px] w-[52px]" />
              <span className="font-display text-lg font-bold">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline} We also craft and install furniture, curtains, and
              flooring when your space needs more than a move.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  ["/", "Home"],
                  ["/about", "About"],
                  ["/services", "Services"],
                  ["/work", "Our work"],
                  ["/contact", "Contact"],
                  ["/quote", "Get a quote"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-foreground/90 transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                What we do
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>Home, villa & office moves</li>
                <li>Packing, transport & delivery</li>
                <li>Custom furniture & upholstery</li>
                <li>Curtains, flooring & installation</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="text-foreground/90 hover:text-primary"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-foreground/90 hover:text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {SITE.addressLine}, {SITE.city}, {SITE.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/alaminkhan03/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block font-bold transition-colors hover:text-primary"
            >
              Crafter
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary shadow-[0_0_10px_#000] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_15px_rgba(var(--primary))]" />
              <span className="absolute -right-4 top-0 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ✨
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
