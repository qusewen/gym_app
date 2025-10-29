import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, StoreProvider } from '@/app/providers'

import '@/app/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  </React.StrictMode>
)
