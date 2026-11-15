import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-webcam');

export default function Page() {
  return <SeoLandingRoute slug="random-webcam" />;
}
