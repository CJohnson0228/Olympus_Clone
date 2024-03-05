import { createBrowserRouter } from 'react-router-dom'
import { gsapLoader } from './gsapLoader'
import Home from './Home'
import Landing from './Landing'
import ErrorPage from './ErrorPage'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<ProtectedRoute><Home /></ProtectedRoute>),
    errorElement: <ErrorPage />,
    loader: gsapLoader
  },
  {
    path: '/landing',
    element: <Landing />,
    errorElement: <ErrorPage />,
    loader: gsapLoader
  },
])