import React, {lazy} from 'react'
import {Container, Input} from 'reactstrap'

const TodoList = lazy(() => import('./Table'))

const Todo = () => {
  return (
    <Container>
      <Input/>
      <TodoList/>
    </Container>
  )
}

export default Todo
