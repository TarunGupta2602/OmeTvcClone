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
    default: 'Free Random Video Chat with Strangers | Talk to Girls Online | Live Webcam Chat',
    template: '%s | Free Random Video Chat',
  },
  description:
    'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat with no registration required. Connect with thousands of people worldwide for safe, fast video conversations.',
  applicationName: 'StrangerLive',
  category: 'social',
  keywords: [
    'random video chat',
    'chat with strangers',
    'talk to strangers online',
    'free video chat with girls',
    'live webcam chat',
    'video chat with random people',
    'omegle alternative',
    'ome tv alternative',
    'stranger video chat',
    'online video chat',
    'free random cam chat',
    'video chat with girls',
    'talk to girls online',
    'random cam chat',
    'webcam chat with strangers',
    '1 on 1 video chat',
    'anonymous video chat',
    'free live Video chat',
    'video calling strangers',
    'random video call',
    'chat roulette alternative',
  ],
  authors: [{ name: 'StrangerLive Team' }],
  creator: 'StrangerLive',
  publisher: 'StrangerLive',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Free Random Video Chat with Strangers | Talk to Girls Online | Live Webcam Chat',
    description:
      'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat with no registration required. Connect with thousands of people worldwide for safe, fast video conversations.',
    url: 'https://parvah.online',
    siteName: 'StrangerLive',
    locale: 'en_US',
    type: 'website',
    category: 'social',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Random Video Chat with Strangers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Random Video Chat with Strangers | Talk to Girls Online',
    description:
      'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat with no registration required.',
    site: '@StrangerLive',
    creator: '@StrangerLive',
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
  name: 'StrangerLive',
  alternateName: 'Free Random Video Chat with Strangers',
  url: 'https://parvah.online',
  description:
    'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat with no registration required.',
  keywords: 'random video chat, chat with strangers, talk to strangers online, free video chat with girls, live webcam chat, omegle alternative',
  publisher: {
    '@type': 'Organization',
    name: 'StrangerLive',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MF9GKBNC');`
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50/20 to-rose-50/20 text-slate-900 selection:bg-indigo-600 selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MF9GKBNC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
