import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function MissionSection() {
  const { t } = useLang();
  return (
    <section className="py-24 text-center bg-gray-800 text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 px-4">{t('heroTitle')}</h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 px-4">{t('heroSubtitle')}</p>
      <a href="#support" className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/80 transition-colors">
        {t('heroButton')}
      </a>
    </section>
  );
}