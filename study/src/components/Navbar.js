import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {useContext, useEffect, useState} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {Moon, Sun} from 'react-feather'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const {theme, setTheme, isEffect, setIsEffect} = useContext(ThemeContext)
  const [isDark, setIsDark] = useState(theme === 'dark')

  useEffect(() => {
    if (isDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [isDark, setTheme])

  const renderThemeButton = (isDark) => {
    return (
      <div className={'me-3'}>
        { !isDark ? <Moon onClick={() => setIsDark(true)} /> : <Sun onClick={() => setIsDark(false)} /> }
      </div>
    )
  }

  const LoginButton = () => {
    return (
      <div className={'me-3'}>
        <Button color={'primary'} onClick={() => navigate('/login')}>로그인</Button>
      </div>
    )
  }

  return (
    <div className={'navbar'}>
      <div className={'ms-3'}>
        <h2>Let's Study REACT</h2>
      </div>
      <div className={'d-flex'}>
        <Form className={'me-3'}>
          <FormGroup switch>
            <Label check className={'fs-5'}>이펙트</Label>
            <Input type="switch" role="switch" checked={isEffect} onChange={e => setIsEffect(e.target.checked)}/>
          </FormGroup>
        </Form>
        {renderThemeButton(isDark)}
        <LoginButton/>
      </div>
    </div>
  )
}

export default Navbar