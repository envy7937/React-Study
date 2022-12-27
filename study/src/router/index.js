import {lazy} from 'react'
import {useRoutes} from 'react-router-dom'
import {getRoutes} from './routes'

const Dashboard = lazy(() => import('../pages/dashboard'))
const Router = () => {
  const allRoutes = getRoutes()

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Dashboard />
    },
    ...allRoutes
  ])

  return routes
}

export default Router