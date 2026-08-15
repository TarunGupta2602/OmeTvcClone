import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('flirty-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="flirty-video-chat" />;
}
