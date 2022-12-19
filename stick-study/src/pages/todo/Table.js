import {Button, Col, Input, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row} from 'reactstrap'
import React from 'react'
import classnames from 'classnames'
import {XCircle} from 'react-feather'
import useSelectorTyped from '../../hooks/useSelectTyped'
import {useDispatch} from 'react-redux'
import {handleRemoveAll, handleRemoveTodo} from './store'

const TodoListTable = () => {
  const dispatch = useDispatch()

  const list = useSelectorTyped(state => state.todoManage.list)

  const handleRemove = todo => {
    if (window.confirm('정말 삭제하겠습니까 ?')) {
      dispatch(handleRemoveTodo(todo))
    }
  }

  return (
    <ListGroup>
      {list && list.length > 0 && list.map((item, index) => {
        return (
          <ListGroupItem key={'index'} className="d-flex justify-content-between">
          <span>
            <Label>
              <Input type={'checkbox'}/>
              {item.text}
            </Label>
            <span className={'d-inline-block'}>{item.created_at}</span>
          </span>
            <XCircle size={24} onClick={() => handleRemove(item)}/>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default TodoListTable