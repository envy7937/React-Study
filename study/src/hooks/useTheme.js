import useSelectorTyped from './useSelectTyped'
import {useDispatch} from 'react-redux'
import {handleTheme} from '../redux/layout'

export const useTheme = () => {
  const dispatch = useDispatch()
  const theme = useSelectorTyped(store => store.layout.theme)

  const setTheme = type => {
    dispatch(handleTheme(type))
  }

  return {theme: theme, setTheme}
}