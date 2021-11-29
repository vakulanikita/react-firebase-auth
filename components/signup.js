import { useRef } from 'react';
import {
  Heading,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react"

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <form>
      <Heading as="h3" mb={6}>Sign Up</Heading>
      <FormControl mb={3}>
        <FormLabel>Email addres</FormLabel>
        <Input ref={emailRef} bg="white" type="email" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Password</FormLabel>
        <Input ref={passwordRef} bg="white" type="password" />
      </FormControl>
      <FormControl>
        <FormLabel>Password Confirmation</FormLabel>
        <Input ref={passwordConfirmRef} bg="white" type="password" />
      </FormControl>
    </form>
  )
}