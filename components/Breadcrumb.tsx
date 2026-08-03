'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const breadcrumbLabels: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/work': 'Our Work',
  '/blog': 'Blog',
  '/contact': 'Contact',
  '/quote': 'Get a Quote',
};

export function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { href: '/', label: 'Home' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = breadcrumbLabels[href] || segment.charAt(0).toUpperCase() + segment.slice(1);
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

export function BreadcrumbSchema() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { url: 'https://dohainteriors.com/', name: 'Home' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const labels: Record<string, string> = breadcrumbLabels;
      const name = labels[href] || segment.charAt(0).toUpperCase() + segment.slice(1);
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
