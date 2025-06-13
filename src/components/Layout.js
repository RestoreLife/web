import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from '../context/LanguageContext';
import '../global.css';

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}