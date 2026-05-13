'use client';

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function BannerWrapper() {
  const { t } = useLanguage();
  return (
    <div className="bg-yellow-300 p-3 flex text-center text-black justify-center items-center">
      {t.banner}
    </div>
  );
}
