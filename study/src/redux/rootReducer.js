import {combineReducers} from 'redux'
import todoManage from '../pages/todo/store'
import layout from './layout'
import catManage from '../pages/practices/cat/store'

const rootReducer = combineReducers({
  todoManage,
  layout,
  catManage
})

export default rootReducer
