import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './StopJS';

const rootElement = document.getElementById('root2');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
