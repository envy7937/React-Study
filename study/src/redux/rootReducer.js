import {combineReducers} from 'redux'
import todoManage from '../pages/todo/store'
import layout from './layout'

const rootReducer = combineReducers({
  todoManage,
  layout
})

export default rootReducer
