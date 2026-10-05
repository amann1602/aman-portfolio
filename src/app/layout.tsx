import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/index.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0f19' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://amaninamdar.in'),
  title: {
    default: 'Aman Inamdar | AI & Analytics | Software Development | R&D',
    template: '%s | Aman Inamdar',
  },
  description:
    'Aman Inamdar is a Computer Science undergraduate specializing in Artificial Intelligence & Analytics, with experience in AI-powered applications, software development, R&D, analytics and innovative technology solutions.',
  keywords: [
    'Aman Inamdar',
    'Aman Mafij Inamdar',
    'Artificial Intelligence',
    'Data Analytics',
    'Computer Science',
    'MIT ADT University Pune',
    'Software Engineer',
    'Machine Learning',
    'Computer Vision',
    'Research and Development',
  ],
  authors: [{ name: 'Aman Mafij Inamdar', url: 'https://amaninamdar.in' }],
  creator: 'Aman Mafij Inamdar',
  alternates: {
    canonical: 'https://amaninamdar.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amaninamdar.in',
    title: 'Aman Inamdar | AI & Analytics | Software Development | R&D',
    description:
      'Computer Science undergraduate specializing in Artificial Intelligence & Analytics with hands-on experience in AI applications, software engineering, R&D and hardware-software integration.',
    siteName: 'Aman Inamdar Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Aman Mafij Inamdar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Inamdar | AI & Analytics | Software Development | R&D',
    description:
      'Building Intelligent Solutions with AI, Analytics & Technology. Computer Science Undergraduate specializing in AI & Analytics.',
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Person & Profile JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aman Mafij Inamdar',
    alternateName: 'Aman Inamdar',
    jobTitle: 'AI & Analytics Specialist, Software Developer',
    description:
      'Computer Science undergraduate specializing in Artificial Intelligence & Analytics at MIT ADT University, Pune.',
    url: 'https://amaninamdar.in',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'MIT ADT University, Pune',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Analytics',
      'Computer Vision',
      'Python',
      'Java',
      'React.js',
      'Embedded Systems',
      'IoT',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7775909442',
      email: 'amaninamdar7775@gmail.com',
      contactType: 'professional',
    },
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
