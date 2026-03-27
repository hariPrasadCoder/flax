import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PrivacyPolicy } from './components/PrivacyPolicy';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivacyPolicy />
    </BrowserRouter>
  </React.StrictMode>
);
