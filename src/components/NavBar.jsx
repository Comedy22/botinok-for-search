import React from 'react'
import { Nav } from 'react-bootstrap'
import axios from 'axios'

export default function NavBar({ user }) {
  return (
    <Nav defaultActiveKey="/home" as="ul" style={{ fontSize: '30px', backgroundColor: 'black' }}>
      <Nav.Item as="li">
        <Nav.Link href="/">Hello, {user ? user.name : 'guest'}</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/" style={{marginLeft: '1em'}}>Home</Nav.Link>
      </Nav.Item>
      {user
        ? (
          <>
            <Nav.Item as="li" style={{ marginLeft: '20em' }}>
              <Nav.Link href="/account">Account</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/logout"
                onClick={(e) => {
                  e.preventDefault();
                  axios('/api/logout')
                    .then(() => (window.location = '/'))
                    .catch(console.log);
                }}
              >
                Logout
              </Nav.Link>
            </Nav.Item>
          </>
        )
        : (
          <>
            <Nav.Item as="li" style={{ marginLeft: '20em' }}>
              <Nav.Link href="/signup">Sign up!</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/signin">Sign in!</Nav.Link>
            </Nav.Item>
          </>
        )
      }
    </Nav >
  )
}
