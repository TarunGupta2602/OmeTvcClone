'use client';

import { forwardRef } from 'react';
import { IconMessage, IconSend } from './ChatIcons';

function formatTime(iso) {
  try {
    return new Date(iso).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  } catch {
    return '';
  }
}

const ChatMessagesPanel = forwardRef(function ChatMessagesPanel(
  { messages, inputMessage, onInputChange, onSubmit, inRoom, peerId },
  bottomRef
) {
  return (
    <aside className="chat-messages-panel">
      <header className="chat-messages-header">
        <div>
          <h2 className="chat-messages-title">Live chat</h2>
          <p className="chat-messages-sub">
            {inRoom && peerId ? `Connected · ${peerId.substring(0, 6)}` : 'Match to send messages'}
          </p>
        </div>
        {inRoom && peerId && (
          <span className="chat-messages-badge">
            <span className="chat-live-dot" />
            Live
          </span>
        )}
      </header>

      <div className="chat-messages-body">
        {messages.length === 0 ? (
          <div className="chat-messages-empty">
            <div className="chat-messages-empty-icon">
              <IconMessage className="w-6 h-6" />
            </div>
            <p>{inRoom ? 'Say hello to start the conversation.' : 'Messages appear here once you are matched.'}</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={`${msg.timestamp}-${idx}`}
              className={`chat-bubble-row ${msg.sender === 'You' ? 'chat-bubble-row-you' : 'chat-bubble-row-peer'}`}
            >
              <div className={`chat-bubble-wrap ${msg.sender === 'You' ? 'chat-bubble-wrap-you' : 'chat-bubble-wrap-peer'}`}>
                <div className={`chat-bubble ${msg.sender === 'You' ? 'chat-bubble-you' : 'chat-bubble-peer'}`}>
                  {msg.text}
                </div>
                {msg.timestamp && <time className="chat-bubble-time">{formatTime(msg.timestamp)}</time>}
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={onSubmit} className="chat-messages-form">
        <input
          type="text"
          value={inputMessage}
          onChange={onInputChange}
          placeholder={inRoom ? 'Type a message…' : 'Waiting for match…'}
          disabled={!inRoom || !peerId}
          className="chat-messages-input"
        />
        <button
          type="submit"
          disabled={!inRoom || !peerId || !inputMessage.trim()}
          className="chat-messages-send"
          aria-label="Send message"
        >
          <IconSend className="w-4 h-4 sm:hidden" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </aside>
  );
});

export default ChatMessagesPanel;
