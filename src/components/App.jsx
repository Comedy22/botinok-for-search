import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SignUp from './SignUp';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </>
  )
}


