import React, {lazy, useEffect, useState} from 'react'
import {Button, Col, Container, Input, InputGroup, Nav, NavItem, NavLink, Row} from 'reactstrap'
import {useDispatch} from 'react-redux'
import useSelectorTyped from '../../hooks/useSelectTyped'
import moment from 'moment'
import {handleAddTodo, handleRemoveAll, handleSetOrderBy} from './store'
import classnames from 'classnames'
import Select from 'react-select'

const TodoList = lazy(() => import('./Table'))

const Todo = () => {
  const dispatch = useDispatch()
  const list = useSelectorTyped(state => state.todoManage.list)
  const orderBy = useSelectorTyped(state => state.todoManage.orderBy)

  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState('')
  const [showList, setShowList] = useState([])

  const sortOptions = [
    {
      label: '등록순',
      value: 'asc'
    },
    {
      label: '최신순',
      value: 'desc'
    },
    {
      label: '가나다순',
      value: 'abc'
    }
  ]

  const handleAdd = () => {
    dispatch(handleAddTodo({
      id: list.length + 1,
      text: inputText,
      is_completed: false,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }))

    setInputText('')
  }

  const handleInputKeyDown = e => {
    if (e.keyCode === 13) {
      handleAdd()
    }
  }

  const handleClearAll = () => {
    if (window.confirm('정말 모두 삭제하겠습니까 ?')) {
      dispatch(handleRemoveAll())
    }
  }

  const handleSort = sort => {
    dispatch(handleSetOrderBy(sort))
  }

  useEffect(() => {
    let tempList = []

    if (list) {
      tempList = list

      if (filter === 'active') {
        tempList = list.filter(item => item.is_completed === false)
      } else if (filter === 'completed') {
        tempList = list.filter(item => item.is_completed === true)
      }
    }

    setShowList(tempList)
  }, [list, filter])

  return (
    <Container className={'my-3'}>
      <h1>Todo List</h1>

      <InputGroup className={'my-5'}>
        <Input type={'text'} value={inputText} onKeyDown={handleInputKeyDown} onChange={e => setInputText(e.target.value)}/>
        <Button type={'button'} onClick={() => handleAdd()}>등록</Button>
      </InputGroup>

      <Row className={'mb-3'}>
        <Col>
          <span>Total : {showList.length}</span>
        </Col>
      </Row>

      <Row>
        <Col lg={9}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({active: !filter})}
                onClick={() => setFilter('')}>All</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({active: filter === 'active'})}
                onClick={() => setFilter('active')}>Active</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({active: filter === 'completed'})}
                onClick={() => setFilter('completed')}>Completed</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col lg={3} className={'d-flex justify-content-end'}>
          <Select
            size='lg'
            placeholder="등록순"
            className={'me-3'}
            classNamePrefix='select'
            onChange={data => handleSort(data.value)}
            value={sortOptions.find(item => item.value === orderBy)}
            options={sortOptions} />
          <Button type={'button'} size={'sm'} onClick={handleClearAll}>전체 삭제</Button>
        </Col>
      </Row>

      <TodoList list={showList} />
    </Container>
  )
}

export default Todo
