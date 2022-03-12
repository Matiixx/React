import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { If, Then, Else } from 'react-if';

export default function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match!');
    }
    
    try {
      setError('');
      setLoading(true);
      //await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);

  }

  return (
    <>
      <Card className='mt-4'>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <If condition={ error }>
            <Then>
              <Alert variant='danger'>{ error }</Alert>
            </Then>
          </If>

          <Form onSubmit={ handleSubmit }>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
            </Form.Group>
            <Button type='submit' className='w-100 mt-4' disabled={ loading }>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Have an account? Log In
      </div>
    </>
  )
}
