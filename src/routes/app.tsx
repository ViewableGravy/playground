/***** BASE IMPORTS *****/
import { rootRoute } from '../router'
import { createRoute, Outlet } from '@tanstack/react-router'

/***** SHARED *****/
import { Sidebar } from '../components/sidebar'

/***** CONSTS *****/
import './_App.scss'

const backgroundImage = "https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const App = () => {
  /***** RENDER *****/
  return (
    <>
      <img src={backgroundImage} className="App__background" />

      <div className="App__title">
        <h1>Gravy UI</h1>
      </div>

      <Sidebar className="App__sidebar" />

      <div className="App__Content" >
        <Outlet />
      </div>
    </>
  )
}

export const AppRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App
})