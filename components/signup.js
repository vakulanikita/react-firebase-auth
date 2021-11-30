import React, { useRef, useState } from 'react';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon 
} from "@chakra-ui/react"
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      console.log(error);
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3" mb={6}>Sign Up</Heading>
      {/* {JSON.stringify(currentUser.email)} */}
      {error &&
        <Alert status='error' mb={3}>
          <AlertIcon />
          {error}
        </Alert>
      }
      <FormControl mb={3}>
        <FormLabel>Email addres</FormLabel>
        <Input ref={emailRef} bg="white" type="email" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Password</FormLabel>
        <Input ref={passwordRef} bg="white" type="password" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Password Confirmation</FormLabel>
        <Input ref={passwordConfirmRef} bg="white" type="password" />
      </FormControl>
      <Button isDisabled={loading} colorScheme='teal' type="submit">Sign Up</Button>
    </form>
  )
}