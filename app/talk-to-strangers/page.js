import SeoLandingRoute from '../components/SeoLandingRoute';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('talk-to-strangers');

export default function Page() {
  return <SeoLandingRoute slug="talk-to-strangers" />;
}
