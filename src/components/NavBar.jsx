import React from 'react'
import { Nav } from 'react-bootstrap'

export default function NavBar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/api/signup">Sign up!</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/login">Sign in!</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
