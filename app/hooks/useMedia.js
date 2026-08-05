'use client';

import { useCallback, useRef, useState } from 'react';

export function useMedia() {
  const localStreamRef = useRef(null);
  const localVideoRef = useRef(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [mediaReady, setMediaReady] = useState(false);
  const [mediaError, setMediaError] = useState(null);

  const setupMedia = useCallback(async () => {
    if (localStreamRef.current) {
      setMediaReady(true);
      return localStreamRef.current;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      setMediaReady(true);
      setMediaError(null);
      return stream;
    } catch (err) {
      setMediaError('Camera / Microphone permission denied');
      throw err;
    }
  }, []);

  const stopMedia = useCallback(() => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    setMediaReady(false);
  }, []);

  const toggleAudio = useCallback(() => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioMuted(!audioTrack.enabled);
      }
    }
  }, []);

  const toggleVideo = useCallback(() => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoMuted(!videoTrack.enabled);
      }
    }
  }, []);

  return {
    localStreamRef,
    localVideoRef,
    isAudioMuted,
    isVideoMuted,
    mediaReady,
    mediaError,
    setupMedia,
    stopMedia,
    toggleAudio,
    toggleVideo,
  };
}
