import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('live-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="live-video-chat" />;
}
