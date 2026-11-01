'use client';

import ChatLoader from './ChatLoader';
import HomeSEO from './HomeSEO';
import AdsterraBanner300x250 from './AdsterraBanner300x250';
import { useChatLayout } from '../context/ChatLayoutContext';

export default function HomePageClient() {
  const { chatMode } = useChatLayout();

  return (
    <>
      <ChatLoader />
      {!chatMode && (
        <>
          <HomeSEO />
          <div className="flex justify-center py-8">
            <AdsterraBanner300x250 />
          </div>
        </>
      )}
    </>
  );
}
