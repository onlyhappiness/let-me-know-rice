import React from 'react'
import { Form, Button } from 'react-bootstrap'
import NavBar from '../navbar/NavBar'

import './SignUp.scss'

function SignUp() {
  return (
    <div className="s">
      <NavBar />
      
      <Form className="signUp">
        <h2>SignUp</h2>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
          
        <Button variant="primary" type="submit" onClick={() => {
            
        }}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SignUp
