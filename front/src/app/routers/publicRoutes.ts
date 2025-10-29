import { AuthPage } from '@/pages/auth'

import { AppRoutes } from '@/shared/config'

export const publicRoutes = {
  auth: {
    path: AppRoutes.AUTH,
    component: AuthPage,
  },
}
