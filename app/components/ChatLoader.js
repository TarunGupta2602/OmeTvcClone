'use client';

import dynamic from 'next/dynamic';
import ChatSkeleton from './ChatSkeleton';

const OmeTVChatPage = dynamic(() => import('../chat/page'), {
  ssr: false,
  loading: () => <ChatSkeleton />,
});

export default function ChatLoader() {
  return <OmeTVChatPage />;
}
