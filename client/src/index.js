import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import './reset.css';
import './index.css';
import App from './App.js';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);