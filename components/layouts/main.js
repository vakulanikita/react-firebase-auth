import Head from 'next/head'
import { useColorModeValue } from '@chakra-ui/react'
import {
  Container,
  Box,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

export default function Main({ children, title = "starter" }) {
  return (
    <>
      <Head>
        <title>Next | {title}</title>
      </Head>

      <Container
        pt={5}
        color={useColorModeValue('spacejelly', '#fff')}
        maxW="sm"
      >
        { children }
      </Container>

    </>

  )
}