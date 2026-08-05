'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const ChatLayoutContext = createContext({
  chatMode: false,
  setChatMode: () => {},
  lobbyMode: false,
  setLobbyMode: () => {},
});

export function ChatLayoutProvider({ children }) {
  const [chatMode, setChatModeState] = useState(false);
  const [lobbyMode, setLobbyModeState] = useState(false);
  const setChatMode = useCallback((value) => setChatModeState(value), []);
  const setLobbyMode = useCallback((value) => setLobbyModeState(value), []);

  return (
    <ChatLayoutContext.Provider value={{ chatMode, setChatMode, lobbyMode, setLobbyMode }}>
      {children}
    </ChatLayoutContext.Provider>
  );
}

export function useChatLayout() {
  return useContext(ChatLayoutContext);
}
