import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, ListGroup, ListGroupItem} from 'reactstrap'

const PracticeList = () => {
  const navigate = useNavigate()

  return (
    <Container className={'my-3'}>
      <ListGroup className="d-flex justify-content-between">
        <ListGroupItem onClick={() => navigate(`/practices/count`)}>
          useState() 와 useEffect()
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate(`/practices/tree`)}>
          Component props
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate(`/practices/theme`)}>
          Custom Hook & 전역 상태 관리
        </ListGroupItem>
      </ListGroup>
    </Container>
  )
}

export default PracticeList
