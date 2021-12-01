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

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      router.replace('/login');
      setMessage('Check your inbox for further instructions')
    } catch (error) {
      console.log(error);
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <Heading as="h3" mb={6}>Password Reset</Heading>
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
        <Button isDisabled={loading} mb={3} colorScheme='teal' type="submit">Reset Password</Button>
        <Text>
          <NextLink href="login">
            <Link variant="link-text">Login</Link>
          </NextLink>
        </Text>
      </form>
    </Main>
  )
}