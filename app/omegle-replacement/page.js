import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-replacement');

export default function Page() {
  return <SeoLandingRoute slug="omegle-replacement" />;
}
