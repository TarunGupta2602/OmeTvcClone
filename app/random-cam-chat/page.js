import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-cam-chat');

export default function Page() {
  return <SeoLandingRoute slug="random-cam-chat" />;
}
