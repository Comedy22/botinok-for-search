import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SignUp from './SignUp';
import Authentication from './Authentication';

export default function App({user}) {
  return (
    <>
      <NavBar user = {user}/>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Authentication />} />
      </Routes>
    </>
  )
}


