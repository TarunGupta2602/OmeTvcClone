'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import AdsterraPopunder from './AdsterraPopunder';
import AdsterraSocialBar from './AdsterraSocialBar';
import { ADSTERRA_POPUNDER_SRC, ADSTERRA_SMARTLINK } from '../../lib/adsterra';
import { ChatLayoutProvider, useChatLayout } from '../context/ChatLayoutContext';

function ShellInner({ children }) {
  const pathname = usePathname();
  const { chatMode, lobbyMode } = useChatLayout();
  const isHome = pathname === '/';
  const hideChrome = isHome && chatMode;
  const hideFooter = isHome && chatMode;

  // Global click listener to trigger popunder (every 5 clicks - reduced aggressiveness)
  useEffect(() => {
    let clickCount = 0;
    const TRIGGER_EVERY = 5;

    const handleClick = () => {
      clickCount++;
      if (clickCount % TRIGGER_EVERY === 0) {
        const popunder = window.open(ADSTERRA_SMARTLINK, '_blank');
        if (popunder) {
          popunder.blur();
          window.focus();
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
      <AdsterraPopunder />
      {/* <AdsterraSocialBar /> */}
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
