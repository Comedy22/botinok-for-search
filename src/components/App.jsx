import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      </Routes>
  )
}
