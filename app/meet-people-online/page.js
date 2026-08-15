import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('meet-people-online');

export default function Page() {
  return <SeoLandingRoute slug="meet-people-online" />;
}
