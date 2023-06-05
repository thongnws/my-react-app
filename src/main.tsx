import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import worker from './utils/mockServiceWorker.ts';

const mocked = async () => {
  // if (import.meta.env.DEV) {
  return worker.start();
  // }
};

mocked().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
