import './App.css'
import {Suspense} from 'react'
import Router from './router'
import {ThemeContext} from './context/ThemeContext'
import './pages/practices/theme.scss'
import {useTheme} from './hooks/useTheme'

const App = () => {
  const {theme, setTheme} = useTheme()

  return (
    <Suspense fallback={null}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Router />
      </ThemeContext.Provider>
    </Suspense>
  )
}

export default App
