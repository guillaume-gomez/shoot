import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SoundContextWrapper from "./contexts/SoundContextWrapper";
import SceneContextWrapper from "./contexts/SceneContextWrapper";
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoundContextWrapper>
      <SceneContextWrapper>
        <App />
      </SceneContextWrapper>
    </SoundContextWrapper>
  </StrictMode>,
)
