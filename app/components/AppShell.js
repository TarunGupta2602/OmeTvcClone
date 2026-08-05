'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import { ChatLayoutProvider, useChatLayout } from '../context/ChatLayoutContext';

function ShellInner({ children }) {
  const pathname = usePathname();
  const { chatMode } = useChatLayout();
  const isChatPage = pathname === '/';
  const hideChrome = isChatPage && chatMode;

  return (
    <>
      {!hideChrome && <Navbar />}
      <div className="flex-1 flex flex-col">{children}</div>
      {!hideChrome && <Footer />}
      <CookieConsent />
    </>
  );
}

export default function AppShell({ children }) {
  return (
    <ChatLayoutProvider>
      <ShellInner>{children}</ShellInner>
    </ChatLayoutProvider>
  );
}
