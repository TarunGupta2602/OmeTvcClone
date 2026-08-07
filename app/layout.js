import { Outfit, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import AppShell from './components/AppShell';
import Analytics from './components/Analytics';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '../lib/constants';
import { buildOrganizationSchema } from '../lib/seo';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f766e' },
    { media: '(prefers-color-scheme: dark)', color: '#042f2e' },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Free Random Video Chat with Strangers',
    template: '%s | Parvah',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: 'social',
  keywords: [
    'random video chat',
    'chat with strangers',
    'talk to strangers online',
    'live webcam chat',
    'video chat with random people',
    'omegle alternative',
    'ome tv alternative',
    'stranger video chat',
    'online video chat',
    'free random cam chat',
    'random cam chat',
    'webcam chat with strangers',
    '1 on 1 video chat',
    'anonymous video chat',
    'free live video chat',
    'video calling strangers',
    'random video call',
    'chat roulette alternative',
    'Parvah',
  ],
  authors: [{ name: 'Parvah Team' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon-180x180.png',
  },
  openGraph: {
    title: 'Free Random Video Chat with Strangers | Parvah',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    category: 'social',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Parvah - Free Random Video Chat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Random Video Chat with Strangers | Parvah',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
  },
  buildOrganizationSchema(),
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    alternateName: 'Parvah Random Video Chat',
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSerif.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="application/rss+xml" title="Parvah Blog RSS" href="/blog/rss.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--page-bg)] text-slate-900 selection:bg-teal-700 selection:text-white">
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  );
}
