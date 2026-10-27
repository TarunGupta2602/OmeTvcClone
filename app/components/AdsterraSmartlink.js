'use client';

import { useEffect } from 'react';
import { ADSTERRA_SMARTLINK } from '../../lib/adsterra';

const STORAGE_KEY = 'parvah:adsterra-smartlink-at';
const COOLDOWN_MS = 10 * 60 * 1000;

function openSmartlink() {
  let lastAt = 0;
  try {
    lastAt = Number(window.localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    // private browsing
  }

  if (Date.now() - lastAt < COOLDOWN_MS) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // continue
  }

  window.open(ADSTERRA_SMARTLINK, '_blank', 'noopener,noreferrer');
}

export default function AdsterraSmartlink() {
  useEffect(() => {
    document.addEventListener('click', openSmartlink, { once: true, capture: true });
    document.addEventListener('touchend', openSmartlink, { once: true, capture: true });
    return () => {
      document.removeEventListener('click', openSmartlink, { capture: true });
      document.removeEventListener('touchend', openSmartlink, { capture: true });
    };
  }, []);

  return null;
}
