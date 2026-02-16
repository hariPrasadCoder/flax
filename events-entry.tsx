import React from 'react';
import { createRoot } from 'react-dom/client';
import EventsApp from './EventsApp';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <EventsApp />
  </React.StrictMode>
);
