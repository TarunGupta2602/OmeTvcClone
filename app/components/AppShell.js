'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import AdsterraPopunder from './AdsterraPopunder';
import AdsterraSocialBar from './AdsterraSocialBar';
import { ADSTERRA_POPUNDER_SRC } from '../../lib/adsterra';
import { ChatLayoutProvider, useChatLayout } from '../context/ChatLayoutContext';

function ShellInner({ children }) {
  const pathname = usePathname();
  const { chatMode, lobbyMode } = useChatLayout();
  const isHome = pathname === '/';
  const hideChrome = isHome && chatMode;
  const hideFooter = isHome && chatMode;

  // Global first-click listener to trigger popunder
  useEffect(() => {
    const handleClick = () => {
      if (document.querySelector(`script[src="${ADSTERRA_POPUNDER_SRC}"]`)) {
        document.removeEventListener('click', handleClick);
        return;
      }
      
      const script = document.createElement('script');
      script.src = ADSTERRA_POPUNDER_SRC;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.body.appendChild(script);
      
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
