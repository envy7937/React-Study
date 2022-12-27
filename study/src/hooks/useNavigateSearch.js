import {createSearchParams, useNavigate} from 'react-router-dom'

const useNavigateSearch = () => {
  const navigate = useNavigate()
  return (pathname, params = null) => navigate({pathname, search: (params ? `?${createSearchParams(params).toString()}` : '')})
}

export default useNavigateSearch