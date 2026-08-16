import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('chat-with-girls');

export default function Page() {
  return <SeoLandingRoute slug="chat-with-girls" />;
}
