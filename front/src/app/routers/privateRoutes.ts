import { MainPage } from '@/pages/main'

import { AppRoutes } from '@/shared/config'

export const privateRoutes = {
  main: {
    path: AppRoutes.MAIN,
    component: MainPage,
  },
}
