import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import SignUp from './SignUp';
import Authentication from './Authentication';
import Account from './Account';
import Shoes from './Shoes';

export default function App({ user, cards, shoes }) {
  return (
    <Container>
      <NavBar user={user} />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account/:id' element={<Shoes />} />
        <Route path='/signin' element={<Authentication />} />
        <Route path='/account' element={<Account cards={cards} shoes={shoes}/>} />
      </Routes>
    </Container>
  )
}


