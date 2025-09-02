import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
// CssBaseline is optional - will be used if @mui/material is installed
import { CssBaseline } from '@mui/material';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>
);
