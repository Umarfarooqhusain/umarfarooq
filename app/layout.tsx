import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Umar Farooq | Frontend Developer',
  description:
    'Frontend Developer specializing in Next.js, React, and modern web applications.',
  keywords: [
    'Umar Farooq',
    'Frontend Developer',
    'Next.js Developer',
    'React Developer',
    'Web Developer',
  ],
  authors: [
    {
      name: 'Umar Farooq',
    },
  ],
  creator: 'Umar Farooq',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body
        className="bg-black text-white antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
