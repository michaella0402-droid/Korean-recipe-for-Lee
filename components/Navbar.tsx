'use client';

import { useLanguage } from './LanguageContext';
import Link from 'next/link';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 no-print">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-primary">
          Lee Family Kitchen
        </Link>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              language === 'en' ? 'bg-secondary text-white' : 'text-gray-500 hover:text-secondary'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              language === 'de' ? 'bg-secondary text-white' : 'text-gray-500 hover:text-secondary'
            }`}
          >
            DE
          </button>
        </div>
      </div>
    </nav>
  );
}
