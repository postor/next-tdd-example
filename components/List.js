import { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

export default ({ keyword }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    if (!keyword) {
      setList([])
      return
    }
    setLoading(1)
    axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: keyword
      }
    }).then(res => {
      setLoading(0)
      setList(res.data.items)
    }).catch(e => {
      setLoading(0)
      alert(e.toString())
      console.log(e)
    })
  }, [keyword]);

  if(loading>0){
    return (<div data-testid="loading">loading...</div>)
  }
  if (!list.length) {
    return (<div data-testid="no-result">no result found for <em>{keyword}</em></div>)
  }
  return (<ul data-testid="list">{
    list.map((x, i) => (<Item key={i} data={x} />))
  }</ul>)
}