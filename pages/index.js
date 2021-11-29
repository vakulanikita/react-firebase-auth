import NextLink from 'next/link'
import Main from '../components/layouts/main'
import ThemeToggleButton from '../components/theme-toggle-button'
import {
  Box,
  Link,
  Heading,
} from '@chakra-ui/react'
import Signup from '../components/signup'

export default function Home() {
  return (
    <Main title="index page">
      {/* <ThemeToggleButton /> */}
      <Box mt={3}>

        <Box align="center" mb={6}>
          <Signup />
        </Box>


        <NextLink href="./page">
          <Link textDecoration="underline" fontSize="xl">Routing</Link>
        </NextLink>

      </Box>
    </Main>
  )
}
