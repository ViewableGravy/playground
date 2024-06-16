/***** BASE IMPORTS *****/
import ReactDOM from 'react-dom/client'
import React from 'react'

/***** ROUTER *****/
import { createRouter } from './router'
import { RouterProvider } from '@tanstack/react-router'

/***** CONSTS *****/
import './_Main.scss'

export const router = createRouter()

/***** RENDER *****/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
