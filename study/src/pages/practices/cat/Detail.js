import Navbar from '../../../components/Navbar'
import React from 'react'
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Container, ListGroup, ListGroupItem} from 'reactstrap'
import useSelectorTyped from '../../../hooks/useSelectTyped'
import {useNavigate} from 'react-router-dom'

const CatDetail = () => {
  const navigate = useNavigate()
  const cat = useSelectorTyped(state => state.catManage.selectedCat)

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
        <div className={'d-flex justify-content-between'}>
          <h1>고양이 상세</h1>
          <Button onClick={() => navigate(-1)}>뒤로가기</Button>
        </div>

        <div className={'py-2'}>
        {
          cat ?
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
                  <ListGroupItem>무게: {cat.weight}</ListGroupItem>
                  <ListGroupItem>상태: {cat.status}</ListGroupItem>
                  <ListGroupItem>먹이 준 횟수: {cat.feedCount}</ListGroupItem>
                  <ListGroupItem>처음 먹이 준 날짜: {cat.firstFeedTime}</ListGroupItem>
                  <ListGroupItem>마지막으로 먹이 준 날짜: {cat.lastFeedTime}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            : <div>
              <h3>데이터가 없습니다.</h3>
            </div>
        }
        </div>
      </Container>
    </>
  )
}

export default CatDetail