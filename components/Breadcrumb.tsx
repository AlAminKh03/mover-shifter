'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/i18n.config';

const breadcrumbLabelsByLocale: Record<Locale, Record<string, string>> = {
  en: {
    '': 'Home',
    'about': 'About',
    'services': 'Services',
    'work': 'Our Work',
    'blog': 'Blog',
    'contact': 'Contact',
    'quote': 'Get a Quote',
  },
  ar: {
    '': 'الرئيسية',
    'about': 'عن الشركة',
    'services': 'الخدمات',
    'work': 'أعمالنا',
    'blog': 'المدونة',
    'contact': 'اتصل بنا',
    'quote': 'احصل على عرض سعر',
  },
};

export function Breadcrumb({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const labels = breadcrumbLabelsByLocale[locale];

  // Strip the leading /en or /ar before building crumbs — root of that
  // locale (the homepage) gets no breadcrumb trail.
  const segments = pathname.split('/').filter(Boolean).slice(1);
  if (segments.length === 0) return null;

  const breadcrumbs = [
    { href: `/${locale}`, label: labels[''] },
    ...segments.map((segment, index) => {
      const href = `/${locale}/` + segments.slice(0, index + 1).join('/');
      const label = labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      return { href, label };
    }),
  ];

  return (
    <nav className="layout-container py-3 sm:py-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" aria-hidden />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-sm font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-sm text-primary hover:underline transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BreadcrumbSchema({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const labels = breadcrumbLabelsByLocale[locale];

  const segments = pathname.split('/').filter(Boolean).slice(1);
  if (segments.length === 0) return null;

  const breadcrumbs = [
    { url: `https://dohainteriors.com/${locale}/`, name: labels[''] },
    ...segments.map((segment, index) => {
      const href = `/${locale}/` + segments.slice(0, index + 1).join('/');
      const name = labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      return {
        url: `https://dohainteriors.com${href}`,
        name,
      };
    }),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }),
      }}
    />
  );
}
