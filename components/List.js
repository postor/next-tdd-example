import { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

export default ({ keyword }) => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: keyword
      }
    }).then(res => {
      setList(res.data.items)
    }).catch(e => {
      alert(e.toString())
      console.log(e)
    })
  }, [keyword]);

  if (!list.length) {
    return (<div data-testid="no-result">no result found for <em>{keyword}</em></div>)
  }
  return (<ul data-testid="list">{
    list.map((x, i) => (<Item key={i} data={x} />))
  }</ul>)
}