'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './app/component/App'

let data = [
 {id: 0, text: '天气不错哦!!!', complete: false},
 {id: 1, text: '天气不错哦!!!', complete: false},
 {id: 2, text: '出去玩啊!!!', complete: true},
 {id: 3, text: '天气不错哦!!!', complete: true},
 {id: 4, text: '天气不错哦!!!', complete: false},
 {id: 5, text: '出去玩啊!!!', complete: true},
 {id: 6, text: '天气不错哦!!!', complete: true},
 {id: 7, text: '天气不错哦!!!', complete: false},
 {id: 8, text: '出去玩啊!!!', complete: true}
]

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('app')
)
