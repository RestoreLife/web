import React, { createContext, useContext, useState } from 'react';

const strings = {
  en: {
    navAbout: 'About',
    navSupport: 'Support Us',
    heroTitle: 'Together, We Can Restore Lives',
    heroSubtitle: 'Your support transforms rehabilitation into reality',
    heroButton: 'Support Us',
    aboutTitle: 'Who We Are & What We Do',
    aboutBody: 'We are a passionate team of young professionals dedicated to answering the challenges of our lifetime.',
    supportTitle: 'Support Our Mission',
    supportSubtitle: 'Join our efforts to help Ukrainian defenders in rehabilitation.',
    oneClick: 'One click donation',
    bank: 'Payment by bank details',
    subs: 'Subscription',
  },
  ua: {
    navAbout: 'Про нас',
    navSupport: 'Підтримати',
    heroTitle: 'Разом ми можемо відновити життя',
    heroSubtitle: 'Ваша підтримка перетворює реабілітацію на реальність',
    heroButton: 'Підтримати',
    aboutTitle: 'Хто ми та що ми робимо',
    aboutBody: 'Ми – команда молодих фахівців, що присвятили життя вирішенню викликів нашого часу.',
    supportTitle: 'Підтримайте нашу місію',
    supportSubtitle: 'Приєднуйтеся до наших зусиль допомогти захисникам у реабілітації.',
    oneClick: 'Швидке пожертвування',
    bank: 'Платіж за реквізитами',
    subs: 'Підписка',
  },
};

const LanguageContext = createContext();
export const useLang = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = (key) => strings[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};