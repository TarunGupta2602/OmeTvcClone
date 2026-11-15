import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-video-call-free');

export default function Page() {
  return <SeoLandingRoute slug="random-video-call-free" />;
}
