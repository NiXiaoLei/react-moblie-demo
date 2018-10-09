import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {swiperAnimateCache,swiperAnimate} from '../../utils/swiper.animate.js'
import './index.scss'

//  className="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"

class XSwiper extends Component {
  render() {
    const child = this.props.children
    return (
      <div className="swiper-container">
        <div  className="swiper-wrapper">
          {
            React.Children.map(child, (ele, index)=> {
            return (
              <div className="swiper-slide">
                {ele}
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }

  

  componentDidMount(){
    const mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", 
      mousewheel: true, 
      grabCursor: true, 
      effect: "slide", 
      autoHeight: true,
      on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        } 
      }  
    })
  }
}
export default XSwiper