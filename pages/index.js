import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import Main from '../components/layouts/main'
import ThemeToggleButton from '../components/theme-toggle-button'
import {
  Box,
  Link,
  Heading,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Main title="index page">
      <ThemeToggleButton />
      <Box mt={3}>
        <Heading as="h1" mb={6}>Next.js starter page includes:</Heading>
        <UnorderedList mb={6}>
          <ListItem>Next.js</ListItem>
          <ListItem>My own comfortable folder structure</ListItem>
          <ListItem>Chakra UI, Chakra icons, styled, framer motion</ListItem>
        </UnorderedList>
        <Heading as="h3" mb={6}>ToDo:</Heading>
        <UnorderedList mb={6}>
          <ListItem>Make options for the start page for the project on chakra, tailwindcss, etc.</ListItem>
        </UnorderedList>
        <NextLink href="./page">
          <Link textDecoration="underline" fontSize="xl">Routing</Link>
        </NextLink>
      </Box>
    </Main>
  )
}
