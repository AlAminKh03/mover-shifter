"use client";

import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
] as const;

const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      pathname === href
        ? "bg-primary text-primary-foreground shadow-sm"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    );

  return (
    <header className="border-b border-border/60 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="layout-container flex h-14 items-center gap-3 md:h-[3.75rem]">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <Logo className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="font-display truncate text-base font-semibold leading-tight sm:text-lg">
            {SITE.name}
          </span>
        </Link>

        <nav
          className="hidden flex-1 justify-center md:flex"
          aria-label="Main"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-border/70 bg-muted/50 p-1">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/quote">Get quote</Link>
            </Button>
          </div>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 rounded-full md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100%,20rem)] flex-col gap-0 p-0">
              <SheetHeader className="border-b border-border/60 px-6 py-4 text-left">
                <SheetTitle className="font-display text-lg">Menu</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4"
                aria-label="Mobile"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                      pathname === item.href
                        ? "bg-accent font-semibold text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 px-1">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/quote" onClick={() => setSheetOpen(false)}>
                      Get quote
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
