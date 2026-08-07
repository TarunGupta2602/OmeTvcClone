'use client';

import dynamic from 'next/dynamic';
import ChatSkeleton from './ChatSkeleton';

const ChatPage = dynamic(() => import('../chat/page'), {
  ssr: false,
  loading: () => <ChatSkeleton />,
});

export default function ChatLoader() {
  return <ChatPage />;
}
