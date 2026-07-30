import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://parvah.online'),
  title: {
    default: 'Parvah - Free Random Video Chat Platform | Connect Instantly',
    template: '%s | Parvah',
  },
  description:
    'Parvah is a free random video chat platform connecting thousands of people worldwide in instant 1-on-1 live video and text conversations. Safe, fast, WebRTC powered, and no registration required!',
  applicationName: 'Parvah',
  keywords: [
    'free random video chat',
    'random video chat',
    'Parvah',
    'Parvah video chat',
    'live webcam chat',
    'chat with strangers',
    'WebRTC video chat',
    'online 1 on 1 chat',
  ],
  authors: [{ name: 'Parvah Team' }],
  creator: 'Parvah',
  publisher: 'Parvah',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Parvah - Free Random Video Chat Platform | Connect Instantly',
    description:
      'Parvah is a free random video chat platform connecting thousands of people worldwide in instant 1-on-1 live video and text conversations. Safe, fast, WebRTC powered, and no registration required!',
    url: 'https://parvah.online',
    siteName: 'Parvah',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Parvah - Free Random Video Chat Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parvah - Free Random Video Chat Platform | Connect Instantly',
    description:
      'Parvah is a free random video chat platform connecting thousands of people worldwide in instant 1-on-1 live video and text conversations.',
    site: '@ParvahApp',
    creator: '@ParvahApp',
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Parvah',
  alternateName: 'Parvah Free Random Video Chat',
  url: 'https://parvah.online',
  description:
    'Free random video chat platform connecting people worldwide in instant 1-on-1 live WebRTC video and text conversations.',
  publisher: {
    '@type': 'Organization',
    name: 'Parvah',
    url: 'https://parvah.online',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://parvah.online/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
