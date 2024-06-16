/***** BASE IMPORTS *****/
import ReactDOM from 'react-dom/client'
import React from 'react'

/***** ROUTER *****/
import { createRouter } from './router'
import { RouterProvider } from '@tanstack/react-router'

/***** CONSTS *****/
import './_Main.scss'
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query'

export const router = createRouter()
const queryClient = new QueryClient()

const Main = () => {
  const queryClient = useQueryClient();

  return <RouterProvider context={{ queryClient }} router={router} />
}

/***** RENDER *****/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </React.StrictMode>
)
