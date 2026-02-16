import React from 'react';
import { createRoot } from 'react-dom/client';
import ToolsApp from './ToolsApp';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ToolsApp />
  </React.StrictMode>
);
