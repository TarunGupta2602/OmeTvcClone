import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('dirty-talk-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="dirty-talk-video-chat" />;
}
