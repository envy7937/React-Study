import PracticeList from '../../pages/practices/index'
import CountPage from '../../pages/practices/Count'
import Tree from '../../pages/practices/Tree'
import Theme from '../../pages/practices/Theme'
import Cat from '../../pages/practices/cat'
import CatDetail from '../../pages/practices/cat/Detail'

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
  },
  {
    path: '/practices/cats',
    element: <Cat />
  },
  {
    path: '/practices/cats/:id',
    element: <CatDetail />
  }
]

export default PracticeRoutes