import {createSlice} from '@reduxjs/toolkit'

const initialTheme = () => {
  const item = window.localStorage.getItem('theme')
  return item ? item : 'light'
}

const initEffect = () => {
  const item = window.localStorage.getItem('isEffect')
  return item ? JSON.parse(item) : false
}

export const layoutSlice = createSlice({
  initialState: {
    theme: initialTheme(),
    isEffect: initEffect()
  },
  name: 'layout',
  reducers: {
    handleTheme: (state, action) => {
      state.theme = action.payload
      window.localStorage.setItem('theme', action.payload)
    },
    handleEffect: (state, action) => {
      state.isEffect = action.payload
      window.localStorage.setItem('isEffect', JSON.stringify(action.payload))
    }
  }
})

export const { handleTheme, handleEffect } = layoutSlice.actions

export default layoutSlice.reducer
