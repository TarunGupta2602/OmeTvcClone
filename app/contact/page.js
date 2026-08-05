import ContactPageContent from '../components/ContactPageContent';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { CONTACT_FAQS } from '../../data/contactFaqs';
import { buildFaqSchema, buildWebPageSchema } from '../../lib/seo';

export const metadata = {
  title: 'Contact Support & Safety',
  description:
    'Email Parvah support at support@parvah.online or safety@parvah.online. No contact forms or data storage — direct email for video chat help and safety reports.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Support & Safety | Parvah',
    description: 'Email Parvah support for help with video chat, safety, or technical issues.',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Parvah Support' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Support & Safety | Parvah',
    description: 'Email Parvah support for video chat help and safety reports.',
    images: ['/og-image.png'],
  },
};

const pageTitle = 'Contact Support & Safety';
const pageDescription =
  'Email Parvah support at support@parvah.online or safety@parvah.online for video chat help and safety reports.';

const jsonLd = [
  buildWebPageSchema({ title: pageTitle, description: pageDescription, url: `${SITE_URL}/contact` }),
  buildFaqSchema(
    CONTACT_FAQS.map((f) => ({ q: f.q, a: f.a }))
  ),
];

export default function ContactPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ContactPageContent />
    </>
  );
}
