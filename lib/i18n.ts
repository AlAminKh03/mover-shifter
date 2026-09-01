import { Locale, i18nConfig } from '@/i18n.config';

const loadedNamespaces: Record<string, Record<string, any>> = {};

const loadNamespace = async (locale: Locale, namespace: string) => {
  const key = `${locale}-${namespace}`;

  if (loadedNamespaces[key]) {
    return loadedNamespaces[key];
  }

  try {
    const data = await import(`@/locales/${locale}/${namespace}.json`);
    loadedNamespaces[key] = data.default;
    return data.default;
  } catch (error) {
    console.error(`Failed to load namespace: ${namespace} for locale: ${locale}`);
    return {};
  }
};

export async function getTranslation(
  locale: Locale,
  namespace: string = i18nConfig.defaultNS
) {
  return loadNamespace(locale, namespace);
}

export async function getTranslations(locale: Locale) {
  const translations: Record<string, any> = {};

  for (const ns of i18nConfig.ns) {
    translations[ns] = await getTranslation(locale, ns);
  }

  return translations;
}

export function getLocaleMetadata(locale: Locale) {
  return {
    locale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    lang: locale,
    isRTL: locale === 'ar',
  };
}

export const localeConfig = {
  en: {
    name: 'English',
    dir: 'ltr',
    flag: '🇬🇧',
    hreflang: 'en',
  },
  ar: {
    name: 'العربية',
    dir: 'rtl',
    flag: '🇸🇦',
    hreflang: 'ar',
  },
};
