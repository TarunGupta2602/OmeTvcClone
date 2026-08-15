import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('hot-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="hot-video-chat" />;
}
