import React, { Component,  } from 'react'
import XSwiper from '../../components/swiper'
import XTest from '../test'
class Answer extends Component {
  render() {
    return (
      <XSwiper> 
        <XTest />
        <XTest />
        <XTest />
      </XSwiper>
    )
  }
}

export default Answer