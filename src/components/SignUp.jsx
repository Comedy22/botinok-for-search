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
        setFormData((prev)=> ({...prev, [e.target.name]: e.target.value}))

        const submitHandler = async(e) => {
            e.preventDefault();
            if(formData.password !== formData.repeat){
              return  alert('Passwords do not match')     
            }
            const response = await axios.post('/api/signup', formData)
            console.log(response);
            if(response.status === 200){
                window.location.href = '/'
            }
        }
    
  return (
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control
      value={formData.name} 
      onChange={changeHandler}
      name='name' 
      type="text" 
      placeholder="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
      value={formData.email}
      onChange={changeHandler}
      name='email' 
      type="email" 
      placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      value={formData.password}
      onChange={changeHandler}
      name='password' 
      type="password" 
      placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Repeat password</Form.Label>
      <Form.Control
      value={formData.repeat}
      onChange={changeHandler} 
      name='repeat' 
      type="password" 
      isValid={formData.password === formData.repeat && formData.password !== ''}
      isInvalid={formData.password !== formData.repeat && formData.password !== ''}
      />
        <Form.Control.Feedback type="invalid">Passwords should match!</Form.Control.Feedback>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}
