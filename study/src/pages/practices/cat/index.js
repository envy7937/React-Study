import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardTitle,
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import React from 'react'
import Navbar from '../../../components/Navbar'
import useSelectorTyped from '../../../hooks/useSelectTyped'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {handleFeed, handleSelectCat, STATUS} from './store'

const Cat = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const catList = useSelectorTyped(state => state.catManage.catList)

  const goDetail = (cat) => {
    dispatch(handleSelectCat(cat))
    navigate(`/practices/cats/${cat.id}`)
  }

  const handleFeedCat = (cat) => {
    if (cat.status !== STATUS.DEAD) {
      dispatch(handleFeed(cat))
    }
  }

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
        <h1>고양이 관리</h1>

        <CardGroup>
          {catList && catList.length > 0 && catList.map((cat, index) => {
            return (
              <Card key={index}>
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
                    <Button onClick={() => handleFeedCat(cat)}>
                      먹이주기
                    </Button>
                    <Button onClick={() => goDetail(cat)}>
                      상세보기
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )
          })}
        </CardGroup>
      </Container>
    </>
  )
}

export default Cat