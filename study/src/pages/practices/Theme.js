import './theme.scss'
import {Container, Form, FormGroup, Input, Label} from 'reactstrap'
import './theme.scss'
import {Moon, Sun} from 'react-feather'
import {useContext, useEffect, useState} from 'react'
import {ThemeContext} from '../../context/ThemeContext'

const Theme = () => {
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

  return (
    <div className={`${theme} vh-100`}>
      <div className={'navbar'}>
        <div className={'ms-3'}>
          <h2>Theme</h2>
        </div>
        <div className={'d-flex'}>
          <Form className={'me-3'}>
            <FormGroup switch>
              <Label check className={'fs-5'}>이펙트</Label>
              <Input type="switch" role="switch" checked={isEffect} onChange={e => setIsEffect(e.target.checked)}/>
            </FormGroup>
          </Form>
          {renderThemeButton(isDark)}
        </div>
      </div>
      <Container>
        <h1>Theme Test</h1>
      </Container>
    </div>
  )
}

export default Theme