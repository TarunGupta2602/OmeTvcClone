'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import HilltopAdsPopunder from './HilltopAdsPopunder';
import HilltopAdsInPagePush from './HilltopAdsInPagePush';
import { ChatLayoutProvider, useChatLayout } from '../context/ChatLayoutContext';

function ShellInner({ children }) {
  const pathname = usePathname();
  const { chatMode, lobbyMode } = useChatLayout();
  const isHome = pathname === '/';
  const hideChrome = isHome && chatMode;
  const hideFooter = isHome && chatMode;

  return (
    <>
      {!hideChrome && <Navbar minimal={isHome && lobbyMode && !chatMode} />}
      <div className="flex-1 flex flex-col">{children}</div>
      {!hideFooter && <Footer />}
      <CookieConsent />
      <HilltopAdsPopunder />
      <HilltopAdsInPagePush />
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
