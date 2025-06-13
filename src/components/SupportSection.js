import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function SupportSection() {
  const { t } = useLang();
  return (
    <section id="support" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('supportTitle')}</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">{t('supportSubtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* One‑click donation */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col items-center gap-6">
            <button className="w-full rounded-lg bg-primary py-3 font-semibold text-white hover:bg-primary/80 transition-colors">
              {t('oneClick')}
            </button>
            <ul className="text-left text-sm leading-relaxed list-disc list-inside">
              <li>Works with any card.</li>
              <li>Your payment is safe and encrypted.</li>
              <li>100% goes to rehab efforts.</li>
            </ul>
          </div>

          {/* Bank details */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col items-center gap-6">
            <button className="w-full rounded-lg bg-primary py-3 font-semibold text-white hover:bg-primary/80 transition-colors">
              {t('bank')}
            </button>
            <div className="w-full flex flex-col gap-3 text-sm">
              <input className="border rounded px-3 py-2" placeholder="UAH" readOnly value="UA1234567890123456" />
              <input className="border rounded px-3 py-2" placeholder="USD" readOnly value="US1234567890123456" />
              <input className="border rounded px-3 py-2" placeholder="EUR" readOnly value="EU1234567890123456" />
            </div>
          </div>

          {/* Subscription */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col items-center gap-6">
            <button className="w-full rounded-lg bg-primary py-3 font-semibold text-white hover:bg-primary/80 transition-colors">
              {t('subs')}
            </button>
            <ul className="text-left text-sm leading-relaxed list-disc list-inside">
              <li>Custom amount & duration.</li>
              <li>Minimum Plan …</li>
              <li>Maximum Plan …</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
