import ContactPageContent from '../components/ContactPageContent';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

export const metadata = {
  title: 'Contact Us | Video Chat Support',
  description:
    'Contact the Parvah team by email for support, safety reports, or general questions. No forms or data storage — direct email to support@parvah.online.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Video Chat Support',
    description: 'Email Parvah support for help with video chat, safety, or technical issues.',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Parvah Support' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
