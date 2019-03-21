/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'
import axios from 'axios'
import { act } from 'react-dom/test-utils'
import List from '../../components/List'
import apiDatas from './list-apis'

jest.mock('axios')
axios.get.mockImplementation((url, { params = {} }) => {
  const { q } = params
  return Promise.resolve({
    data: apiDatas[q]
  })
})

describe('List功能', () => {
  it('列表为空', async () => {
    const {
      queryByTestId, rerender 
    } = render(<List keyword={'empty'} />)
    //根据mock，“empty”关键字没有结果应该显示“没找到”
    expect(queryByTestId('no-result')).not.toBeNull()
    //关键词变为“noneEmpty”
    rerender(<List keyword={'noneEmpty'} />)
    //给react hook更新的时间，暂时还没有针对useEffect很好的延时方案
    await new Promise((resolve,reject)=>setTimeout(resolve,0))
    //应该重新获取数据，根据mock获取结果渲染列表，所以不应显示“没找到”
    expect(queryByTestId('no-result')).toBeNull()
  })
  
})


