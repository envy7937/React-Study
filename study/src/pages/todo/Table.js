import {Input, Label, ListGroup, ListGroupItem} from 'reactstrap'
import React, {useState} from 'react'
import {XCircle} from 'react-feather'
import {useDispatch} from 'react-redux'
import {handleRemoveTodo, handleToggleState} from './store'

const TodoListTable = ({list}) => {
  const dispatch = useDispatch()

  const handleRemove = todo => {
    if (window.confirm('정말 삭제하겠습니까 ?')) {
      dispatch(handleRemoveTodo(todo))
    }
  }

  const handleToggle = todo => {
    dispatch(handleToggleState(todo))
  }

  const TodoItem = ({item}) => {
    const [isHover, setIsHover] = useState(false)

    return (
      <ListGroupItem
        className="d-flex justify-content-between"
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <span>
          <Label className={'me-2'}>
            <Input type={'checkbox'} className={'me-2'} checked={item.is_completed}
                   onChange={() => handleToggle(item)}/>
            {item.text}
          </Label>
          <span className={'d-inline-block'}>{item.created_at}</span>
        </span>
        {isHover && <XCircle size={24} onClick={() => handleRemove(item)}/>}
      </ListGroupItem>
    )
  }


  return (
    <ListGroup>
      {list && list.length > 0 && list.map((item, index) => {
        return (
          <TodoItem key={index} item={item}/>
        )
      })}
    </ListGroup>
  )
}

export default TodoListTable