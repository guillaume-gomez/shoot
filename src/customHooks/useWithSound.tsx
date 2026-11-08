import { useRef, useEffect } from "react";

interface UseSoundReturn {
  playSound: () => void;
  pauseSound: () => void;
  stopSound: () => void;
  setVolume: (volume: number) => void;
}

function useWithSound(audioSource : AudioSource): UseSoundReturn {
  const soundRef = useRef<Audio| undefined>(undefined);

  useEffect(() => {
    soundRef.current = new Audio(audioSource);
  }, []);

  function playSound() {
    soundRef.current.play();
  }

  function pauseSound() {
    soundRef.current.pause();
  }

  function stopSound() {
    soundRef.current.pause();
  }

  function setVolume(volume: number) {
    soundRef.current.volume = volume;
  }

  return { 
    playSound,
    pauseSound,
    stopSound,
    setVolume
  };
}