import { Locale } from "@/i18n.config";
import Home from "@/components/pages/Home";

interface LocalePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  return <Home locale={locale} />;
}
