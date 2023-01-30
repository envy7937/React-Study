import {
  CardGroup,
  Container
} from 'reactstrap'
import React from 'react'
import Navbar from '../../../components/Navbar'
import CatCard from './CatCard'
import {useCatsState} from './store/useCat'

const Cat = () => {
  const {cats} = useCatsState()

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
        <h1>고양이 관리</h1>

        {cats && cats.length > 0 ? (
          <CardGroup>
            {cats.map((cat, index) => {
              return (
                <CatCard cat={cat} key={index}/>
              )
            })}
          </CardGroup>
        ) : (
          <div>고양이가 없습니다.</div>
        )}
      </Container>
    </>
  )
}

export default Cat