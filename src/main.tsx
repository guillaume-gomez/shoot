import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SoundContextWrapper from "./contexts/SoundContextWrapper";
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoundContextWrapper>
      <App />
    </SoundContextWrapper>
  </StrictMode>,
)
