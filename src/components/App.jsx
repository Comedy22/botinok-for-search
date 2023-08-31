import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import SignUp from './SignUp';
import Authentication from './Authentication';
import Account from './Account';

export default function App({ user, cards }) {
  return (
    <Container>
      <NavBar user={user} />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Authentication />} />
        <Route path='/account' element={<Account cards={cards} />} />
      </Routes>
    </Container>
  )
}


