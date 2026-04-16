import React from 'react';
import { createRoot } from 'react-dom/client';
import HirePage from './HirePage';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HirePage />
  </React.StrictMode>
);
