import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('casual-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="casual-video-chat" />;
}
