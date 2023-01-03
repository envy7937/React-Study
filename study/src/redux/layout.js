import {createSlice} from '@reduxjs/toolkit'

const initialTheme = () => {
  const item = window.localStorage.getItem('theme')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : 'light'
}

export const layoutSlice = createSlice({
  initialState: {
    theme: initialTheme(),
  },
  name: 'layout',
  reducers: {
    handleTheme: (state, action) => {
      state.theme = action.payload
      window.localStorage.setItem('theme', JSON.stringify(action.payload))
    },
  }
})

export const { handleTheme } = layoutSlice.actions

export default layoutSlice.reducer
