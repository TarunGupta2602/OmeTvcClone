'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const ChatLayoutContext = createContext({
  chatMode: false,
  setChatMode: () => {},
});

export function ChatLayoutProvider({ children }) {
  const [chatMode, setChatModeState] = useState(false);
  const setChatMode = useCallback((value) => setChatModeState(value), []);

  return (
    <ChatLayoutContext.Provider value={{ chatMode, setChatMode }}>
      {children}
    </ChatLayoutContext.Provider>
  );
}

export function useChatLayout() {
  return useContext(ChatLayoutContext);
}
