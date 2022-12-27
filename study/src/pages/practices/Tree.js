import React, {useState} from 'react'
import {Container} from 'reactstrap'
import styled, {css} from 'styled-components'

const Circle = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.inputColor || '#61dafb'};
  
  ${props => props.active && 
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

const Tree = () => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <Container className={'my-3'}>
      <h1>Practice Component Props</h1>

      <div>
        <CustomCircle childCount={4} active={active} handleActive={handleActive}/>
      </div>
    </Container>
  )
}

export default Tree