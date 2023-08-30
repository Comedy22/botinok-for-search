import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import NavBar from './NavBar';


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
