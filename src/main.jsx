import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

import { ThemeProvider } from './hooks/useTheme';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
