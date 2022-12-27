import PracticeList from '../../pages/practices/index'
import UseStatePage from '../../pages/practices/use-state'
import Tree from '../../pages/practices/Tree'

const PracticeRoutes = [
  {
    path: '/practices',
    element: <PracticeList />
  },
  {
    path: '/practice/use-state',
    element: <UseStatePage />
  },
  {
    path: '/practice/tree',
    element: <Tree />
  }
]

export default PracticeRoutes