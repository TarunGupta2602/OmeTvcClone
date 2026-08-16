import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('girls-video-chat');

export default function Page() {
  return <SeoLandingRoute slug="girls-video-chat" />;
}
