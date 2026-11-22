import { createContext, type ReactNode, useMemo, useState } from 'react';

export interface SceneContextParams {
  sceneIndex: boolean;
  setSceneIndex: (sceneIndex: boolean) => void;
}
export const SceneContext = createContext<SceneContextParams>(null!);

interface Props {
  children: ReactNode;
}

function SceneContextWrapper({children}: Props) {
  const [sceneIndex, setSceneIndex] = useState<boolean>(true);
  
  return (
    <SceneContext value={{
      sceneIndex,
      setSceneIndex
    }}>
      {children}
    </SceneContext >
  );
}

export default SceneContextWrapper;