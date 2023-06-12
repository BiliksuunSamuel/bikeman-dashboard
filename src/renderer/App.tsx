import { ThemeProvider } from '@mui/material';
import React from 'react';
import Router from './router/Router';
import themeConfiguration from './configuration/theme.configuration';

export default function App() {
  return (
    <ThemeProvider theme={themeConfiguration}>
      <Router />
    </ThemeProvider>
  );
}
