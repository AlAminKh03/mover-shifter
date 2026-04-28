"use client";

import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function ContactButtons() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like a quote for moving / shifting in Qatar.",
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${SITE.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/20 transition-colors hover:bg-[#1ebe57]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      <motion.a
        href={`tel:${SITE.phoneE164}`}
        aria-label={`Call ${SITE.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-primary/20 transition-colors hover:bg-primary/90"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
