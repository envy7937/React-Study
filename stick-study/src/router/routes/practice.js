import PracticeList from '../../pages/practices/index'
import UseStatePage from '../../pages/practices/use-state'

const PracticeRoutes = [
  {
    path: '/practices',
    element: <PracticeList />
  },
  {
    path: '/practice/use-state',
    element: <UseStatePage />
  }
]

export default PracticeRoutes