import { useState } from 'react'
import List from '../components/List'

export default () => {
  const [keyword, setKeyword] = useState('next-tdd-example')
  const [input, setInput] = useState('next-tdd-example')
  return (<div>
    <div>
      <label>关键字</label>
      <input value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => setKeyword(input)}
      >搜索</button>
    </div>
    <List keyword={keyword} />
  </div>)
}