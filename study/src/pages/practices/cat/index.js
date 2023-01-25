import {
  CardGroup,
  Container,
} from 'reactstrap'
import React, {useEffect} from 'react'
import Navbar from '../../../components/Navbar'
import useSelectorTyped from '../../../hooks/useSelectTyped'
import CatCard from './store/CatCard'

const Cat = () => {
  const catList = useSelectorTyped(state => state.catManage.catList)

  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
        <h1>고양이 관리</h1>

        <CardGroup>
          {catList && catList.length > 0 && catList.map((cat, index) => {
            return (
              <CatCard cat={cat} key={index}/>
            )
          })}
        </CardGroup>
      </Container>
    </>
  )
}

export default Cat