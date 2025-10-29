import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { AppRoutes } from '@/shared/config'

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = Boolean(localStorage.getItem('token'))

  return isAuthenticated ? children : <Navigate to={AppRoutes.AUTH} />
}
