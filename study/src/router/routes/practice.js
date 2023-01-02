import PracticeList from '../../pages/practices/index'
import CountPage from '../../pages/practices/Count'
import Tree from '../../pages/practices/Tree'
import Theme from '../../pages/practices/Theme'

const PracticeRoutes = [
  {
    path: '/practices',
    element: <PracticeList />
  },
  {
    path: '/practices/count',
    element: <CountPage />
  },
  {
    path: '/practices/tree',
    element: <Tree />
  },
  {
    path: '/practices/theme',
    element: <Theme />
  }
]

export default PracticeRoutes