import React from 'react'
import { Form, Button } from 'react-bootstrap'

import './css/SignIn.scss'

function SignIn() {
  return (
    <div className="container">
      <Form className="signIn">
        <Form.Group className="mb-3" controlId="formBasicEmail">
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

export default SignIn
