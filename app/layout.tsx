import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Lee Family Kitchen',
  description: 'Authentic Korean Recipes for the Lee Family',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pb-20">
            {children}
          </main>
          <footer className="bg-white border-t py-12 text-center text-gray-400 text-sm no-print">
            <p>© {new Date().getFullYear()} Lee Family Kitchen</p>
            <p className="mt-2">Made with ❤️ for Lee & Family</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
