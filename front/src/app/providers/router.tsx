import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/app/routers'

import { PrivateRoute } from '@/shared/lib/routing'

export const RouterProvider = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {Object.values(publicRoutes).map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        {Object.values(privateRoutes).map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
