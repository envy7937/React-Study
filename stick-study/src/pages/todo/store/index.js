import {createSlice} from '@reduxjs/toolkit'

const compareText = (a, b) => {
  const textA = a.text.toUpperCase()
  const textB = b.text.toUpperCase()

  if (textA < textB) return -1
  if (textA > textB) return 1
  return 0
}

export const TodoManageSlice = createSlice({
  name: 'todoManage',
  initialState: {
    /**
     * list: [{
     *     id: Number, // 각 todoslit의 id
     *     text: String, // 할일 내용, 기존의 title
     *     is_completed: Boolean, // 상태값(false: 미완료, true: 완료)
     *     created_at: String, // 생성일시(format: 2021-05-13 08:57:55)
     * }]
     */
    list: [],
    orderBy: 'asc',
  },
  reducers: {
    // 할일 추가
    handleAddTodo: (state, action) => {
      if (state.orderBy === 'asc') {
        state.list = [...state.list, action.payload]
      } else if(state.orderBy === 'desc') {
        state.list = [action.payload, ...state.list]
      } else {
        state.list = [...state.list, action.payload].sort(compareText)
      }
    },
    // 할일 삭제
    handleRemoveTodo: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload.id)
    },// 할일 전체 삭제
    handleRemoveAll: (state, action) => {
      state.list = []
    },
    // 상태 변경
    handleToggleState: (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id)
      state.list[index].is_completed = !state.list[index].is_completed
    },
    // 할일 목록 정렬
    handleSetOrderBy: (state, action) => {
      state.orderBy = action.payload

      if (state.orderBy === 'asc') {
        state.list = state.list.sort((a, b) => a.id - b.id)
      } else if(state.orderBy === 'desc') {
        state.list = state.list.sort((a, b) => b.id - a.id)
      } else {
        state.list = state.list.sort(compareText)
      }
    }
  },
  extraReducers: builder => {
    //
  }
})

export const {
  handleAddTodo,
  handleRemoveTodo,
  handleRemoveAll,
  handleSetOrderBy,
  handleToggleState
} = TodoManageSlice.actions

export default TodoManageSlice.reducer
