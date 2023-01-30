import Navbar from '../../../../components/Navbar'
import React, {useEffect} from 'react'
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Container, ListGroup, ListGroupItem} from 'reactstrap'
import {useNavigate, useParams} from 'react-router-dom'
import {useCatsState} from '../store/useCat'
import moment from 'moment'
import {FOOD_TYPE} from '../../../../data/catsData'

const CatDetail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {cats, setCats, selectedCat, setSelectedCat} = useCatsState()

  const handleFeeding = (foodType) => {
    let increase = 0

    if (foodType === FOOD_TYPE.FEED) {
      increase = 1
    }
    if (foodType === FOOD_TYPE.WATER) {
      increase = 0.1
    }
    if (foodType === FOOD_TYPE.MEET) {
      increase = 3
    }
    const weight = selectedCat.weight + increase

    setSelectedCat({
      ...selectedCat,
      weight,
      feeds: [...selectedCat.feeds, {
        type: 'feed',
        foodType: foodType,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
      }]
    })
  }

  const handleExercise = () => {
    const DECREASE = 2
    const weight = selectedCat.weight - DECREASE

    setSelectedCat({
      ...selectedCat,
      weight,
      feeds: [...selectedCat.feeds, {
        type: 'health',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
      }]
    })
  }

  useEffect(() => {
    setSelectedCat(...cats.filter(cat => cat.id === parseInt(params.id)))
  }, [])

  useEffect(() => {
    setCats([
      ...cats.map(cat => {
        if (cat.id === selectedCat.id) {
          const feedCount = selectedCat.feeds.filter(feed => feed.type === 'feed').length

          if (feedCount !== 0 && feedCount % 3 === 0) {
            return {...selectedCat, age: selectedCat.age + 1}
          }
        }

        return cat
      })
    ])
  }, [selectedCat])

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
        <div className={'d-flex justify-content-between'}>
          <h1>고양이 상세</h1>
          <div className={'d-flex justify-content-end'}>
            <Button color={'danger'} onClick={() => handleFeeding(FOOD_TYPE.MEET)}>고기</Button>
            <Button color={'warning'} onClick={() => handleFeeding(FOOD_TYPE.MEET)}>사료</Button>
            <Button color={'primary'}  onClick={() => handleFeeding(FOOD_TYPE.WATER)}>물</Button>
            <Button color={'success'}  onClick={() => handleExercise()}>운동</Button>
            <Button onClick={() => navigate(-1)}>뒤로가기</Button>
          </div>
        </div>

        <div className={'py-2'}>
        {
          selectedCat ?
            <Card>
              <CardImg
                src={selectedCat.profileImage}
                alt={selectedCat.name}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {selectedCat.name}
                </CardTitle>
                {selectedCat.message && <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {selectedCat.message}
                </CardSubtitle>}
                <ListGroup flush>
                  <ListGroupItem>성별: {selectedCat.gender}</ListGroupItem>
                  <ListGroupItem>나이: {selectedCat.age}</ListGroupItem>
                  <ListGroupItem>무게: {selectedCat.weight}</ListGroupItem>
                  <ListGroupItem>상태: {selectedCat.status}</ListGroupItem>
                  <ListGroupItem>먹이 준 횟수: {selectedCat.feeds.length}</ListGroupItem>
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