'use client';

import { useEffect } from 'react';
import ChatLoader from './ChatLoader';
import HomeSEO from './HomeSEO';
import { useChatLayout } from '../context/ChatLayoutContext';
import { performGeoRedirect } from '../../lib/geoRedirect';

export default function HomePageClient() {
  const { chatMode } = useChatLayout();

  useEffect(() => {
    performGeoRedirect();
  }, []);

  return (
    <>
      <ChatLoader />
      {!chatMode && <HomeSEO />}
    </>
  );
}
