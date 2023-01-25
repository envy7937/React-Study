import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, ListGroup, ListGroupItem} from 'reactstrap'
import React, {useEffect, useState} from 'react'
import {handleAddAge, handleAddFeedCount, handleAddWeight, handleChangeStatus, handleSelectCat, STATUS} from './index'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const CatCard = ({cat}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(1)
  const [weight, setWeight] = useState(1)

  const goDetail = (cat) => {
    dispatch(handleSelectCat(cat))
    navigate(`/practices/cats/${cat.id}`)
  }

  const handleFeed = (cat) => {
    if (cat.status !== STATUS.DEAD) {
      dispatch(handleAddFeedCount(cat))
    }
  }

  useEffect(() => {
    if (count !==0 && count % 2 === 0) {
      dispatch(handleAddWeight(cat))
    }

    if (count !==0 && count % 3 === 0) {
      dispatch(handleAddAge(cat))
    }
  }, [count])

  useEffect(() => {
    if (age > 2) {
      dispatch(handleChangeStatus({...cat, status: STATUS.NORMAL}))
    }
    if (age > 14) {
      dispatch(handleChangeStatus({...cat, status: STATUS.DEAD}))
    }
  }, [age])

  useEffect(() => {
    setCount(cat.feedCount)
    setAge(cat.age)
    setWeight(cat.weight)
  }, [cat])

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
          <ListGroupItem>먹이 준 횟수: {cat.feedCount}</ListGroupItem>
        </ListGroup>
        <div className={'d-flex justify-content-between'}>
          <Button onClick={() => handleFeed(cat)}>
            먹이주기
          </Button>
          <Button onClick={() => goDetail(cat)}>
            상세보기
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default CatCard