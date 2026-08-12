# Full Bilingual Arabic + English Implementation Plan

## Overview

Transform dohainteriors.com into a fully bilingual site targeting local Qatar customers. Architecture: subfolder-based routing (`/en/` and `/ar/`) with shared components and centralized translation management.

## Architecture: Subfolder Routing

**Why this approach:**
- ✅ Static export compatible (`output: "export"`)
- ✅ GSC-friendly with hreflang
- ✅ No runtime middleware needed
- ✅ Proven SEO standard (Wikipedia, MDN pattern)
- ✅ Clean, discoverable URLs

**Structure:**
```
app/
  [lang]/               ← NEW: dynamic language segment
    (pages)/
      page.tsx          ← home
      about/
      services/
      work/
      contact/
      quote/
      blog/
        page.tsx
        [slug]/page.tsx
    layout.tsx          ← language-specific layout
  layout.tsx            ← root (unchanged)
  sitemap.ts            ← include both languages
  robots.ts             ← unchanged
components/             ← shared (language-agnostic UI)
config/
  translations.ts       ← 900+ text entries (en + ar)
  site-config.ts        ← shared constants
hooks/
  useTranslations.ts    ← language + text helper
```

## Phase 1: Foundation (1 week)

1. **Create `/app/[lang]/` structure** with `generateStaticParams()` validation
2. **Set up `config/translations.ts`** — centralized dictionary with all text
   - English strings copied from existing pages
   - Arabic translations (I'll provide)
   - ~900 entries (UI, page content, metadata, blog)
3. **Create `hooks/useTranslations.ts`** helper for accessing translations in components
4. **Update root `app/layout.tsx`**:
   - Add `[lang]` parameter handling
   - Set `dir="rtl"` for Arabic
   - Add hreflang for homepage
5. **Migrate all hardcoded text** to use `t()` helper (affects every page)

## Phase 2: Pages & Metadata (1 week)

6. **Update page metadata files** (`metadata.ts` in each route):
   - Every page gets `alternates.languages` with both `/en/` and `/ar/` variants
   - Title, description, keywords, OG tags all translated
7. **Ensure canonical tags** are per-language correct
8. **Test static build**: `npm run build` confirms `out/[en|ar]/**/*.html` generated

## Phase 3: Blog & Advanced (1 week)

9. **Bilingual blog posts**:
   - Keep English slugs (e.g., `/blog/kitchen-cabinets-qatar-guide`)
   - Both `/en/blog/{slug}` and `/ar/blog/{slug}` point to same post, different language
   - Translations in `translations.ts` or extended `posts.ts`
10. **Language picker component** (`LanguageSwitcher.tsx`):
    - Globe icon in navbar
    - Switches between `/en/{path}` and `/ar/{path}`
    - Intelligently handles current page path

## Phase 4: Polish & Deploy (1 week)

11. **RTL layout polish**:
    - Verify `html[dir="rtl"]` CSS logical properties work
    - Test form inputs, modals, dropdowns in Arabic
    - Check text alignment (should auto-reverse)
12. **Build & test on staging**:
    - `npm run build` → `out/` folder
    - Test both `/en/` and `/ar/` routes
    - Verify hreflang in page `<head>`
13. **Update GSC**:
    - Resubmit sitemap (now includes both languages)
    - Check "International Targeting" tab for hreflang status
14. **Deploy** to production

## Translation Scope

**What gets translated:**
- All page content (6 services, FAQs, process steps, testimonials)
- Metadata (titles, descriptions, keywords)
- UI components (navbar, buttons, form labels, placeholders)
- Blog posts (all ~20 posts) — keep slugs in English
- JSON-LD structured data (schema descriptions)

**What stays English:**
- Brand name "Doha Interiors"
- Phone, email, addresses
- Social handles
- Photographer credits (Unsplash names)

**Total entries to translate: ~900–1,000**
- 150 UI strings
- 80 page content blocks
- 40 metadata strings
- ~600 blog content blocks

## Hreflang Setup (SEO Critical)

Every page gets dual-language metadata:

```typescript
alternates: {
  canonical: "https://dohainteriors.com/en/services",
  languages: {
    "en": "https://dohainteriors.com/en/services",
    "ar": "https://dohainteriors.com/ar/services",
    "x-default": "https://dohainteriors.com/en/services",
  },
}
```

**Sitemap includes both:**
- `/en/` and `/ar/` versions of every page
- `/en/blog/{slug}` and `/ar/blog/{slug}` for each post

**Result:** Google treats them as one content set in two languages, not duplicate content — no ranking penalty.

## Language Switching UI

**Navbar addition:**
```typescript
<LanguageSwitcher />  // Globe icon, switches /en ↔ /ar on current page
```

**Optional language banner:**
```
🇸🇦 موقع معرّب خصيصاً لعملائنا في قطر
```

## RTL Layout Support

- `html dir="rtl"` set automatically for Arabic
- Tailwind CSS handles most reversals (flexbox, text-align)
- May need explicit `flex-row-reverse` in navbar/components
- Test all forms, dropdowns, modals in Arabic mode

## Critical Implementation Notes

1. **All internal links must include language:**
   ```typescript
   ✅ <Link href={`/${lang}/services`}>
   ❌ <Link href="/services">
   ```

2. **Blog slugs stay English** (even in Arabic version):
   - `/ar/blog/kitchen-cabinets-qatar-guide` (not `/ar/blog/مطابخ-قطر`)
   - Easier for backlinks, social sharing, consistency

3. **Form submissions include language:**
   ```typescript
   submitForm({ ...data, lang: "ar" })  // Backend knows which language
   ```

4. **Fallback for missing translations:**
   - If a key isn't found, show `[MISSING: key]` or fallback to English

5. **Static export gotcha:**
   - Homepage `/` won't auto-redirect to `/en/` on static hosts
   - Solution: Update outbound links to point to `/en/` by default
   - Alternative: Use `next.config.mjs` redirects (may not work on all hosts)

## Critical Files to Modify

| File | Purpose |
|------|---------|
| `app/[lang]/layout.tsx` | Language validation, RTL, hreflang |
| `app/layout.tsx` | Root layout, homepage hreflang |
| `config/translations.ts` | 900+ text entries (en + ar) |
| `hooks/useTranslations.ts` | `useTranslations()` hook |
| `components/LanguageSwitcher.tsx` | Language picker in navbar |
| `app/[lang]/(pages)/*/metadata.ts` | All page metadata with alternates |
| `app/sitemap.ts` | Include both language variants |
| `app/[lang]/blog/posts.ts` | Bilingual posts (English slugs) |
| `app/globals.css` | RTL utilities (logical properties) |
| Every page (`page.tsx`, components) | Replace hardcoded text with `t()` |

## Implementation Timeline

- **Week 1:** Foundation (file structure, translations dict, hook, RTL)
- **Week 2:** Pages & metadata (all routes updated, static build tested)
- **Week 3:** Blog & advanced (bilingual posts, language picker)
- **Week 4:** Polish & deploy (RTL QA, GSC update, production deploy)

## Verification

After implementation:

1. **Static build succeeds:** `npm run build` produces `out/en/**` and `out/ar/**`
2. **Hreflang correct:** Inspect both `/en/services` and `/ar/services` — each has correct alternates
3. **All links work:** Click navbar items, language switcher, internal links on both languages
4. **RTL layout:** Arabic version has correct text direction, form inputs work, no layout breaks
5. **GSC sees both:** Upload updated sitemap, verify "International Targeting" shows both languages
6. **Blog posts display:** Both English and Arabic versions render content correctly

## Next Steps

Ready to implement? Start with Phase 1 following the Critical Files to Modify table.

---

**Last Updated:** 2026-08-12
**Status:** Plan Ready for Implementation
