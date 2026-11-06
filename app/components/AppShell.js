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

  // Global first-click listener to trigger popunder (once per 30 minutes max)
  useEffect(() => {
    const POPUNDER_KEY = 'parvah_popunder_last_trigger';
    const THIRTY_MINUTES_MS = 30 * 60 * 1000;

    const handleClick = () => {
      const lastTrigger = localStorage.getItem(POPUNDER_KEY);
      const now = Date.now();

      // Only trigger if not triggered in the last 30 minutes
      if (!lastTrigger || now - parseInt(lastTrigger) > THIRTY_MINUTES_MS) {
        const popunder = window.open(ADSTERRA_SMARTLINK, '_blank');
        if (popunder) {
          popunder.blur();
          window.focus();
          localStorage.setItem(POPUNDER_KEY, now.toString());
        }
      }

      document.removeEventListener('click', handleClick);
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
