import React from 'react';
import { createRoot } from 'react-dom/client';
import StudiosApp from './StudiosApp';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <StudiosApp />
  </React.StrictMode>
);
