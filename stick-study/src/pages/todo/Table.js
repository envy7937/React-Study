import {Input, Label, ListGroup, ListGroupItem} from 'reactstrap'
import React, {useEffect, useState} from 'react'
import {XCircle} from 'react-feather'
import useSelectorTyped from '../../hooks/useSelectTyped'
import {useDispatch} from 'react-redux'
import {handleRemoveTodo, handleToggleState} from './store'

const TodoListTable = ({filter}) => {
  const dispatch = useDispatch()

  const list = useSelectorTyped(state => state.todoManage.list)

  const [showList, setShowList] = useState([])

  const handleRemove = todo => {
    if (window.confirm('정말 삭제하겠습니까 ?')) {
      dispatch(handleRemoveTodo(todo))
    }
  }

  const handleToggle = todo => {
    dispatch(handleToggleState(todo))
  }

  useEffect(() => {
    let tempList = []

    if (list) {
      tempList = [...list]

      if (filter === 'active') {
        tempList = list.filter(item => item.is_completed === false)
      } else if (filter === 'completed') {
        tempList = list.filter(item => item.is_completed === true)
      }
    }

    setShowList(tempList)
  }, [list, filter])

  return (
    <ListGroup>
      {showList && showList.length > 0 && showList.map((item, index) => {
        return (
          <ListGroupItem key={'index'} className="d-flex justify-content-between">
          <span>
            <Label>
              <Input type={'checkbox'} checked={item.is_completed} onChange={() => handleToggle(item)}/>
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