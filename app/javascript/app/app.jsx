import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import Home from './home';
import RegistrationPage from './registration/registration-page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<RegistrationPage />} />
        <Route exact path="/sign-up" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}