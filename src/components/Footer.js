import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500">© Restorelife, All rights reserved, 2025</p>
        <div className="flex items-center gap-6 text-gray-600">
          {/* social icons placeholders */}
          <a href="https://www.w3.org/" aria-label="Facebook" className="hover:text-primary"><i className="fa-brands fa-facebook-f"/></a>
          <a href="https://www.w3.org/" aria-label="LinkedIn" className="hover:text-primary"><i className="fa-brands fa-linkedin-in"/></a>
          <a href="https://www.w3.org/" aria-label="YouTube" className="hover:text-primary"><i className="fa-brands fa-youtube"/></a>
          <a href="https://www.w3.org/" aria-label="Instagram" className="hover:text-primary"><i className="fa-brands fa-instagram"/></a>
        </div>
        <a href="mailto:support@restorelife.ua" className="text-gray-500 hover:text-primary">support@restorelife.ua</a>
      </div>
    </footer>
  );
}