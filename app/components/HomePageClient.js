'use client';

import ChatLoader from './ChatLoader';
import HomeSEO from './HomeSEO';
import { useChatLayout } from '../context/ChatLayoutContext';

export default function HomePageClient() {
  const { chatMode } = useChatLayout();

  return (
    <>
      <ChatLoader />
      {!chatMode && <HomeSEO />}
    </>
  );
}
