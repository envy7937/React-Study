import './App.css'
import {Suspense} from 'react'
import Router from './router'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
