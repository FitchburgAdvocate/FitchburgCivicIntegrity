import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Albert_Sans, Lora } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Fitchburg Civic Integrity',
  description:
    'Informing the public about Fitchburg city government actions, plans, and issues.',
};

const headlineFont = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
});

const bodyFont = Lora({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-body antialiased', headlineFont.variable, bodyFont.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
