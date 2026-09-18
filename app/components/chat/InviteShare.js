'use client';

import { useState } from 'react';
import { INVITE_URL, getWhatsAppShareUrl, shareInvite } from '../../../lib/invite';

export default function InviteShare({ compact = false }) {
  const [copied, setCopied] = useState(false);

  const handleInvite = async () => {
    const result = await shareInvite();
    if (result === 'copied') {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } else if (result === 'whatsapp') {
      window.open(getWhatsAppShareUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(getWhatsAppShareUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  if (compact) {
    return (
      <div className="chat-invite-chip">
        <p className="chat-invite-chip-copy">Share so the queue fills faster</p>
        <div className="chat-invite-chip-actions">
          <button type="button" className="chat-invite-chip-btn" onClick={handleInvite}>
            {copied ? 'Link copied' : 'Invite'}
          </button>
          <a
            className="chat-invite-chip-btn chat-invite-chip-btn-wa"
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-invite">
      <p className="chat-invite-copy">Matches are faster with more people online</p>
      <div className="chat-invite-actions">
        <button type="button" className="chat-invite-btn" onClick={handleInvite}>
          {copied ? 'Link copied' : 'Invite a friend'}
        </button>
        <button type="button" className="chat-invite-btn chat-invite-btn-ghost" onClick={handleCopy}>
          Copy link
        </button>
        <a
          className="chat-invite-btn chat-invite-btn-wa"
          href={getWhatsAppShareUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
