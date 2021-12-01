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

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      router.replace('/dashboard');
    } catch (error) {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <Heading as="h3" mb={6}>Log In</Heading>
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
        <Button isDisabled={loading} mb={3} colorScheme='teal' type="submit">Log In</Button>
        <Text mb={2}>
          <NextLink href="forgot-password">
            <Link variant="link-text">Forgot Password?</Link>
          </NextLink>
        </Text>
        <Text>Need an account? {' '}
          <NextLink href="signup">
            <Link variant="link-text">Sign Up</Link>
          </NextLink>
        </Text>
      </form>
    </Main>
  )
}