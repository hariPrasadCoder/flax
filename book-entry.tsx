import React from 'react';
import { createRoot } from 'react-dom/client';
import BookApp from './BookApp';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BookApp />
  </React.StrictMode>
);
