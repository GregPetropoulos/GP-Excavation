import React from 'react'
import {Button, Form} from 'react-bootstrap'
// Will need to get the email to be sent to db or gpc

// need useState, handleclick, handlesubmit, validation, possible redirect
const handleSubmit =() =>{
  ''
}

const EmailForm = (props) => {
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default EmailForm
