import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('aboutTitle')}</h2>
        <p className="mb-12 text-lg leading-relaxed max-w-3xl">{t('aboutBody')}</p>
        {/* TODO: add team & patient photos here */}
      </div>
    </section>
  );
}