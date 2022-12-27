import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, ListGroup, ListGroupItem} from 'reactstrap'

const PracticeList = () => {
  const navigate = useNavigate()

  return (
    <Container className={'my-3'}>
      <ListGroup className="d-flex justify-content-between">
        <ListGroupItem onClick={() => navigate(`/practice/use-state`)}>
          useState() 와 useEffect()
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate(`/practice/tree`)}>
          Component props
        </ListGroupItem>
      </ListGroup>
    </Container>
  )
}

export default PracticeList
