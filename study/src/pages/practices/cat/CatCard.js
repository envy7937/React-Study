import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, ListGroup, ListGroupItem} from 'reactstrap'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const CatCard = ({cat}) => {
  const navigate = useNavigate()

  const goDetail = (cat) => {
    navigate(`/practices/cats/${cat.id}`)
  }

  return (
    <Card>
      <CardImg
        src={cat.profileImage}
        alt={cat.name}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          {cat.name}
        </CardTitle>
        {cat.message && <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {cat.message}
        </CardSubtitle>}
        <ListGroup flush>
          <ListGroupItem>성별: {cat.gender}</ListGroupItem>
          <ListGroupItem>나이: {cat.age}</ListGroupItem>
          <ListGroupItem>상태: {cat.status}</ListGroupItem>
          <ListGroupItem>먹이 준 횟수: {cat.feeds.length}</ListGroupItem>
        </ListGroup>
        <div className={'d-flex justify-content-between'}>
          <Button onClick={() => goDetail(cat)}>
            상세보기
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default CatCard