import PracticeRoutes from './practice'
import TodoRoutes from './todo'
import AuthRoutes from './auth'

const routes = [
  ...PracticeRoutes,
  ...TodoRoutes,
  ...AuthRoutes
]

const getRoutes = () => {
  return routes
}

export {routes, getRoutes}