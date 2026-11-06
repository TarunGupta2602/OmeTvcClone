'use client';

import ChatLoader from './ChatLoader';
import HomeSEO from './HomeSEO';
import AdsterraBanner300x250 from './AdsterraBanner300x250';
import AdsterraNativeBanner from './AdsterraNativeBanner';
import AdsterraSmartlink2 from './AdsterraSmartlink2';
import { useChatLayout } from '../context/ChatLayoutContext';

export default function HomePageClient() {
  const { chatMode } = useChatLayout();

  return (
    <>
      <ChatLoader />
      {!chatMode && (
        <>
          <HomeSEO />
          <AdsterraNativeBanner className="mt-6" />
          <div className="flex justify-center py-8">
            <AdsterraBanner300x250 />
          </div>
          <div className="flex justify-center py-4">
            <AdsterraSmartlink2 />
          </div>
        </>
      )}
    </>
  );
}
