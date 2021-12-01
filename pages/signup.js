import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  Text,
  Link
} from "@chakra-ui/react"
import Main from '../components/layouts/main'
import { useAuth } from '../contexts/AuthContext'
import { AuthProvider } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      router.replace('/');
    } catch (error) {
      console.log(error);
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <Main>
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
          <FormLabel>Email address</FormLabel>
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
        <Button isDisabled={loading} mb={3} colorScheme='teal' type="submit">Sign Up</Button>
        <Text>Already have an account? {' '}
          <NextLink href="login">
            <Link variant="link-text">Log In</Link>
          </NextLink>
        </Text>
      </form>
    </Main>
  )
}