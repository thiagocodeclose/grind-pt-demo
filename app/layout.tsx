// @ts-nocheck
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','500','600','700','800','900'], variable: '--font-montserrat' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: 'Grind PT Studio — Austin, TX | 1-on-1 Personal Training',
  description: 'Personalized 1-on-1 coaching in Austin. Your goals, your coach, your timeline. Start your transformation at Grind PT Studio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
