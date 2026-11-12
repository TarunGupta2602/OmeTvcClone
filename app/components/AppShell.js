'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import AdsterraSocialBar from './AdsterraSocialBar';
import { ADSTERRA_SMARTLINK } from '../../lib/adsterra';
import { ChatLayoutProvider, useChatLayout } from '../context/ChatLayoutContext';

function ShellInner({ children }) {
  const pathname = usePathname();
  const { chatMode, lobbyMode } = useChatLayout();
  const isHome = pathname === '/';
  const hideChrome = isHome && chatMode;
  const hideFooter = isHome && chatMode;

  // Global click listener to trigger smartlink (every 2 clicks - aggressive)
  useEffect(() => {
    let clickCount = 0;
    const TRIGGER_EVERY = 2;

    const handleClick = () => {
      clickCount++;
      if (clickCount % TRIGGER_EVERY === 0) {
        const smartlink = window.open(ADSTERRA_SMARTLINK, '_blank');
        if (smartlink) {
          smartlink.blur();
          window.focus();
          setTimeout(() => window.focus(), 50);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {!hideChrome && <Navbar minimal={isHome && lobbyMode && !chatMode} />}
      <div className="flex-1 flex flex-col">{children}</div>
      {!hideFooter && <Footer />}
      <CookieConsent />
      <AdsterraSocialBar />
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
