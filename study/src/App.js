import './App.css'
import {Suspense} from 'react'
import Router from './router'
import {ThemeContext} from './context/ThemeContext'
import './pages/practices/theme.scss'
import {useTheme} from './hooks/useTheme'
import {AuthContext} from './context/AuthContext'
import {RecoilRoot} from 'recoil'

const ThemeContextProvider = ({children}) => {
  const {theme, setTheme, isEffect, setIsEffect} = useTheme()

  return (
    <ThemeContext.Provider value={{theme, setTheme, isEffect, setIsEffect}}>
      <div className={`${theme} vh-100`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

const AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )
}


const App = () => {

  return (
    <Suspense fallback={null}>
      <RecoilRoot>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Router />
          </AuthContextProvider>
        </ThemeContextProvider>
      </RecoilRoot>
    </Suspense>
  )
}

export default App
