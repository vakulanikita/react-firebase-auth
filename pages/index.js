import NextLink from 'next/link'
import Main from '../components/layouts/main'
import {
  Box,
  Link,
  Heading,
} from '@chakra-ui/react'
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from './dashboard';

export default function Home() {
  return (
    <Main title="index page">
      {/* <ThemeToggleButton /> */}
      <Box mt={3}>

        <Box display="flex" flexDir="column" alignItems="center" mb={6}>
          <NextLink href="./login">
            <Link textDecoration="underline" fontSize="xl">Login</Link>
          </NextLink>

          <NextLink href="./signup">
            <Link textDecoration="underline" fontSize="xl">Sign Up Link</Link>
          </NextLink>
        </Box>

        {/* <NextLink href="./page">
          <Link textDecoration="underline" fontSize="xl">Routing</Link>
        </NextLink> */}

      </Box>
    </Main>
  )
}
