import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('video-chat-with-girls');

export default function Page() {
  return <SeoLandingRoute slug="video-chat-with-girls" />;
}
