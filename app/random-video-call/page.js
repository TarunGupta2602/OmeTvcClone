import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-video-call');

export default function Page() {
  return <SeoLandingRoute slug="random-video-call" />;
}
