import {useEffect, useState} from 'react'

const CountPage = () => {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState([])
  const [sort, setSort] = useState('asc')

  const handleAddCount = () => {
    if (count >=0) {
      setCount(count + 1)
    }
  }

  const handleSubCount = () => {
    if (count >0) {
      setCount(count - 1)
    }
  }

  const handleSort = value => {
    if (sort !== value) {
      setSort(value)
    }
  }

  useEffect(() => {
    let logList = []

    if (sort === 'asc') {
      logList = logs.sort((a, b) => a.id - b.id)
    } else {
      logList = logs.sort((a, b) => b.id - a.id)
    }
    setLogs([...logList])

  }, [logs, sort])

  useEffect(() => {
    if (!(count === 0 && logs && logs.length === 0)) {
      if (sort === 'asc') {
        setLogs([
          ...logs,
          {
            id: logs.length + 1,
            text: '값이 변경 되었습니다.',
            count: count
          }
        ])
      } else {
        setLogs([
          {
            id: logs.length + 1,
            text: '값이 변경 되었습니다.',
            count: count
          },
          ...logs
        ])
      }
    } else {
      setLogs([
        {
          id: 1,
          text: '초기값입니다.',
          count: count
        }
      ])
    }
  }, [count, sort])

  return (
    <div>
      <div>
        <h1>Count : {count}</h1>
        <button type={'button'} onClick={handleAddCount}>증가</button>
        <button type={'button'} onClick={handleSubCount}>감소</button>
      </div>

      <div>
        <h1>History</h1>
        <button type={'button'} onClick={() => handleSort('asc')}>시간순</button>
        <button type={'button'} onClick={() => handleSort('desc')}>최신순</button>
        <p> 정렬 상태 : {sort}</p>
        <ul>
          {logs.length > 0 && logs.map((log, index) => <li key={index}>{`${log.id} - ${log.text} :: ${log.count}`}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default CountPage