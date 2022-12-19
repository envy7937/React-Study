import React, {lazy, useEffect, useState} from 'react'
import {Button, Col, Container, Input, InputGroup, Nav, NavItem, NavLink, Row} from 'reactstrap'
import {useDispatch} from 'react-redux'
import useSelectorTyped from '../../hooks/useSelectTyped'
import moment from 'moment'
import {handleAddTodo, handleRemoveAll, handleSetSort} from './store'
import classnames from 'classnames'
import Select from 'react-select'

const TodoList = lazy(() => import('./Table'))

const Todo = () => {
  const dispatch = useDispatch()
  const list = useSelectorTyped(state => state.todoManage.list)

  const [inputText, setInputText] = useState('')
  const [sort, setSort] = useState('asc')

  const sortOptions = [
    {
      label: '등록순',
      value: 'asc'
    },
    {
      label: '최신순',
      value: 'desc'
    }
  ]

  const handleAdd = () => {
    dispatch(handleAddTodo({
      id: list.length + 1,
      text: inputText,
      state: 'active',
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

  useEffect(() => {
    dispatch(handleSetSort(sort))
  }, [sort])

  return (
    <Container>
      <InputGroup>
        <Input type={'text'} value={inputText} onKeyDown={handleInputKeyDown} onChange={e => setInputText(e.target.value)}/>
        <Button type={'button'} onClick={() => handleAdd()}>등록</Button>
      </InputGroup>

      <Row>
        <Col lg={8}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({active: true})}
                onClick={null}>All</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={null}
                onClick={null}>Active</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={null}
                onClick={null}>Completed</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col lg={4} className={'d-flex justify-content-between'}>
          <Select
            size='lg'
            placeholder="등록순"
            classNamePrefix='select'
            onChange={data => setSort(data.value)}
            value={sortOptions.find(item => item.value === sort)}
            options={sortOptions} />
          <Button type={'button'} size={'sm'} onClick={handleClearAll}>전체 삭제</Button>
        </Col>
      </Row>

      <TodoList/>
    </Container>
  )
}

export default Todo
