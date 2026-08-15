import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('free-webcam-chat');

export default function Page() {
  return <SeoLandingRoute slug="free-webcam-chat" />;
}
