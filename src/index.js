import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Cad from './Cad';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Cad />
  </StrictMode>
);
