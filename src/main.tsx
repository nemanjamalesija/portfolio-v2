import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RefsProvider } from './context.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RefsProvider>
      <App />
    </RefsProvider>
  </React.StrictMode>
);
