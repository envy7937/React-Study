import {useNavigate} from 'react-router-dom'
import {Container, ListGroup, ListGroupItem} from 'reactstrap'
import React from 'react'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <Container className={'my-3'}>
      <h1>Main</h1>

      <ListGroup className="d-flex justify-content-between">
        <ListGroupItem onClick={() => navigate(`/practices`)}>
          Practices
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate(`/todo`)}>
          Todo List
        </ListGroupItem>
      </ListGroup>
    </Container>
  )
}

export default Dashboard