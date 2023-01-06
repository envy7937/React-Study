import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, ListGroup, ListGroupItem} from 'reactstrap'
import Navbar from '../../Components/Navbar'

const PracticeList = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
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
    </>
  )
}

export default PracticeList
