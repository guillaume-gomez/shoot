import { createContext, type ReactNode, useMemo, useState } from 'react';

export interface SoundContextParams {
  hasSound: boolean;
  setHasSound: (hasSound: boolean) => void;
}
export const SoundContext = createContext<SoundContextParams>(null!);

interface Props {
  children: ReactNode;
}

function SoundContextWrapper({children}: Props) {
  const [hasSound, setHasSound] = useState<boolean>(true);
  
  return (
    <SoundContext value={{
      hasSound,
      setHasSound
    }}>
      {children}
    </SoundContext >
  );
}

export default SoundContextWrapper;