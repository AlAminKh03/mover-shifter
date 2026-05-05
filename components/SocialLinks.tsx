"use client";

import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSnapchatGhost,
} from "react-icons/fa";

type Social = {
  name: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
  bg: string;
  fg?: string;
};

const socials: Social[] = [
  {
    name: "Instagram",
    url: SITE.socials.instagram,
    Icon: FaInstagram,
    bg: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
    fg: "text-white",
  },
  {
    name: "Pinterest",
    url: SITE.socials.pinterest,
    Icon: FaPinterestP,
    bg: "bg-[#E60023]",
    fg: "text-white",
  },
  {
    name: "Snapchat",
    url: SITE.socials.snapchat,
    Icon: FaSnapchatGhost,
    bg: "bg-[#FFFC00]",
    fg: "text-black",
  },
  {
    name: "Facebook",
    url: SITE.socials.facebook,
    Icon: FaFacebookF,
    bg: "bg-[#1877F2]",
    fg: "text-white",
  },
];

/**
 * One consistent design across mobile + desktop:
 * a small horizontal pill of brand-colored circles, fixed bottom-left, always visible.
 * Doesn't compete with the bottom-right WhatsApp/phone FAB.
 *
 * If `url` is empty, the icon renders as a non-clickable placeholder.
 * Add the real URL in `config/site.ts` → `SITE.socials.*` to make it active.
 */
export function SocialLinks() {
  return (
    <nav
      aria-label="Social links"
      className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6"
    >
      <ul className="flex items-center gap-2 rounded-full bg-background/85 p-1.5 shadow-lg ring-1 ring-secondary/10 backdrop-blur-md sm:gap-2.5 sm:p-2">
        {socials.map((s, i) => {
          const hasUrl = s.url.length > 0;
          const tile = (
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full ${s.bg} ${s.fg ?? "text-white"} sm:h-10 sm:w-10`}
            >
              <s.Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          );

          return (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
            >
              {hasUrl ? (
                <motion.a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`Follow on ${s.name}`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="block"
                >
                  {tile}
                </motion.a>
              ) : (
                <span
                  aria-label={`${s.name} (coming soon)`}
                  title={`${s.name} — link coming soon`}
                  className="block opacity-70"
                >
                  {tile}
                </span>
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
