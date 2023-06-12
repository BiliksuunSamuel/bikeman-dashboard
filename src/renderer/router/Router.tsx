import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WelcomeRouter from './WelcomeRouter';

export default function Router() {
  return (
    <BrowserRouter>
      <WelcomeRouter />
    </BrowserRouter>
  );
}
