import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { PLATFORM_NAME, PLATFORM_DESC } from '@/lib/constants';
import './globals.scss';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: PLATFORM_NAME,
  description: PLATFORM_DESC,
  openGraph: {
    siteName: PLATFORM_NAME,
    title: PLATFORM_NAME,
    description: PLATFORM_DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
