import {useNavigate} from 'react-router-dom'
import {Container, ListGroup, ListGroupItem} from 'reactstrap'
import React from 'react'
import Navbar from '../../components/Navbar'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
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
    </>
  )
}

export default Dashboard