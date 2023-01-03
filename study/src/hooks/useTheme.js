import useSelectorTyped from './useSelectTyped'
import {useDispatch} from 'react-redux'
import {handleEffect, handleTheme} from '../redux/layout'
import {useCallback, useEffect} from 'react'

export const useTheme = (callback, deps) => {
  const dispatch = useDispatch()
  const theme = useSelectorTyped(store => store.layout.theme)
  const isEffect = useSelectorTyped(store => store.layout.isEffect)

  const setTheme = type => {
    dispatch(handleTheme(type))
  }

  const setIsEffect = data => {
    dispatch(handleEffect(data))
  }

  const body = window.document.body
  const MIN_DURATION = 10

  const makeSnowflake = useCallback(async () => {
    const effect = document.createElement('div')
    const left = Math.random() * window.screen.width
    const delay = Math.random() * 10
    const initialOpacity = Math.random()
    const duration = Math.random() * 20 + MIN_DURATION

    effect.style.left = `${left}px`
    effect.style.animationDelay = `${delay}s`
    effect.style.opacity = `${initialOpacity}`

    if (theme !== 'dark') {
      effect.classList.add('cherry-blossom')
      effect.style.animation = `cherry-blossom-fall ${duration}s linear`
    } else {
      effect.classList.add('snowflake')
      effect.style.animation = `snow-fall ${duration}s linear`
    }

    body.appendChild(effect)

    setTimeout(() => {
      body.removeChild(effect)
    }, (duration + delay) * 1000)
  }, [body, theme, MIN_DURATION])

  useEffect(() => {
    let timer = null

    if (isEffect) {
      timer = setInterval(() => {
        makeSnowflake()
      }, 500)
    } else {
      clearInterval(timer)

      let effects = null
      if (theme === 'dark') {
        effects = document.querySelectorAll('.snowflake')
      } else {
        effects = document.querySelectorAll('.cherry-blossom')
      }
      for (let i = 0; i < effects.length; i++) {
        effects[i].remove()
      }
    }

    return () => {
      clearInterval(timer)
    }
  }, [isEffect, theme, makeSnowflake])

  return {theme, setTheme, isEffect, setIsEffect}
}