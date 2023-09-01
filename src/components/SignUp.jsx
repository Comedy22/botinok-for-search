import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeat: '',
  });
  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeat) {
      return alert('Passwords do not match')
    }
    const response = await axios.post('/api/signup', formData)
    console.log(response);
    if (response.status === 200) {
      window.location.href = '/'
    }
  }

  return (
    <Form onSubmit={submitHandler}
      style={{ width: '30%', display: 'block', margin: 'auto', marginTop: '10%' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontSize: '25px' }}>Name</Form.Label>
        <Form.Control
          value={formData.name}
          onChange={changeHandler}
          name='name'
          type="text"
          placeholder="Name"
          style={{ height: '50px' }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontSize: '25px' }}>Email address</Form.Label>
        <Form.Control
          value={formData.email}
          onChange={changeHandler}
          name='email'
          type="email"
          placeholder="Enter email"
          style={{ height: '50px' }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontSize: '25px' }}>Password</Form.Label>
        <Form.Control
          value={formData.password}
          onChange={changeHandler}
          name='password'
          type="password"
          placeholder="Password"
          style={{ height: '50px' }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontSize: '25px' }}>Repeat password</Form.Label>
        <Form.Control
          value={formData.repeat}
          onChange={changeHandler}
          name='repeat'
          type="password"
          isValid={formData.password === formData.repeat && formData.password !== ''}
          isInvalid={formData.password !== formData.repeat && formData.password !== ''}
          style={{ height: '50px' }}
        />
        <Form.Control.Feedback type="invalid">Passwords should match!</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit"
        style={{ height: '50px', display: 'block', margin: 'auto', fontSize: '25px' }}>
        Submit
      </Button>
    </Form>
  )
}
