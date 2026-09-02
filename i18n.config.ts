export const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: true,
  ns: ['common', 'home', 'services', 'work', 'about', 'blog', 'contact'],
  defaultNS: 'common',
};

export type Locale = (typeof i18nConfig.locales)[number];

export const isLocale = (locale: any): locale is Locale => {
  return i18nConfig.locales.includes(locale);
};
