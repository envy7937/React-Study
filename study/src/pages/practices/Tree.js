import React, {useState} from 'react'
import {Container} from 'reactstrap'
import styled, {css} from 'styled-components'
import Navbar from '../../components/Navbar'

const Circle = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.inputColor || '#61dafb'};
  
  ${({active}) => active && 
  css`
    background: #fa2968;
  `}
`

const CustomCircle = ({active, color, childCount, handleActive}) => {
  const child = childCount ? childCount - 1 : 0
  
  return (
    <>
      <Circle inputColor={color} active={active} onClick={handleActive}/>
      {(child > 0) && <CustomCircle color={color} active={active} childCount={child} handleActive={handleActive} />}
    </>
  )
}

const CircleWrap = ({childCount, color}) => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <div className={'d-flex'}>
      <CustomCircle childCount={childCount} active={active} color={color} handleActive={handleActive}/>
    </div>
  )
}

const Tree = () => {
  return (
    <>
      <Navbar/>
      <Container className={'py-3'}>
        <h1>Practice Component Props</h1>

        <div>
          <CircleWrap childCount={4} />
          <CircleWrap childCount={2} color={'#e2e834'} />
          <CircleWrap childCount={3} color={'#56fa29'} />
          <CircleWrap childCount={8} color={'#9d67f1'} />
        </div>
      </Container>
    </>
  )
}

export default Tree