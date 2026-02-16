import React from 'react';
import { createRoot } from 'react-dom/client';
import PlaybookApp from './PlaybookApp';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <PlaybookApp />
  </React.StrictMode>
);
