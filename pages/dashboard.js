import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Link,
  Button,
  Heading,
  Alert,
  AlertIcon,
  Text
} from '@chakra-ui/react'
import Main from '../components/layouts/main'
import { useAuth } from '../contexts/AuthContext'
import PrivateRoute from '../components/private-router'
import dynamic from 'next/dynamic'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth();
  const router = useRouter()

  async function handleLogout() {
    setError('');

    try {
      await logout()
      router.replace('/login');
    } catch (error) {
      console.log(error);
      setError('Failed to log out')
    }
  }

  // console.log(currentUser);

  return (
    <PrivateRoute>
      <Main>
        <Heading as="h3" mb={3}>Profile</Heading>
        {error &&
          <Alert status='error' mb={3}>
            <AlertIcon />
            {error}
          </Alert>
        }
        {/* <Text fontWeight="bold" mb={3}>Email: {currentUser.email}</Text> */}
        <NextLink href="update-profile">
          <Link display="block" mb={3}>
            <Button onClick={handleLogout} colorScheme='teal' type="submit">Update Profile</Button>
          </Link>
        </NextLink>
        <Button onClick={handleLogout} mb={3} colorScheme='teal' type="submit">Log Out</Button>
      </Main>
    </PrivateRoute>
  )
}