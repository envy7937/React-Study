import React from 'react'
import {useNavigate} from 'react-router-dom'

const PracticeList = () => {
  const navigate = useNavigate()

  return (
    <ul>
      <li onClick={() => navigate(`/practice/use-state`)}>useState() 와 useEffect()</li>
    </ul>
  )
}

export default PracticeList
