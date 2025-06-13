import React from 'react';
// import { Link } from 'gatsby';
import { useLang } from '../context/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#video" className="text-2xl font-bold text-primary">Restore life</a>
        <nav className="flex items-center gap-6 font-medium">
          <a href="#about" className="hover:text-primary transition-colors">{t('navAbout')}</a>
          <button onClick={() => setLang(lang === 'en' ? 'ua' : 'en')} className="hover:text-primary transition-colors uppercase">
            {lang === 'en' ? 'UA' : 'EN'}
          </button>
          <a href="#support" className="rounded-lg bg-primary px-5 py-2 text-white hover:bg-primary/80 transition-colors">
            {t('navSupport')}
          </a>
        </nav>
      </div>
    </header>
  );
}