import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/welcome/view/Welcome';

export default function WelcomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
