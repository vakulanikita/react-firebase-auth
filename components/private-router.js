import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const router = useRouter()

  if(currentUser) {
    return <>{children}</>
  } else {
    router.replace('/login');
    return <></>
  }
}