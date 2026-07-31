import OmeTVChatPage from './chat/page';

export const metadata = {
  title: 'Free Random Video Chat with Strangers | Talk to Girls Online | Live Webcam Chat',
  description:
    'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat with no registration required. Connect with thousands of people worldwide for safe, fast video conversations.',
  openGraph: {
    title: 'Free Random Video Chat with Strangers | Talk to Girls Online',
    description:
      'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat with no registration required.',
    url: 'https://parvah.online',
    siteName: 'StrangerLive',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free Random Video Chat with Strangers' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Random Video Chat with Strangers | Talk to Girls Online',
    description: 'Free random video chat platform to talk to strangers and girls online. Instant 1-on-1 live webcam chat.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return <OmeTVChatPage />;
}
