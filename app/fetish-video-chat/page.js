import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('fetish-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="fetish-video-chat" />;
}
