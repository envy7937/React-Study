import './App.css'
import {Suspense} from 'react'
import Router from './router'
import {ThemeContext} from './context/ThemeContext'
import './pages/practices/theme.scss'
import {useTheme} from './hooks/useTheme'

const App = () => {
  const {theme, setTheme, isEffect, setIsEffect} = useTheme()

  return (
    <Suspense fallback={null}>
      <ThemeContext.Provider value={{theme, setTheme, isEffect, setIsEffect}}>
        <Router />
      </ThemeContext.Provider>
    </Suspense>
  )
}

export default App
