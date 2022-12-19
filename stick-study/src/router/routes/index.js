import PracticeRoutes from './practice'
import TodoRoutes from './todo'

const routes = [
  ...PracticeRoutes,
  ...TodoRoutes
]

const getRoutes = () => {
  return routes
}

export {routes, getRoutes}