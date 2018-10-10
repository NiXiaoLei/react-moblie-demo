import React from 'react'
import ReactLoading from 'react-loading';
import './index.scss'


const types = ['blank', 'balls', 'bars', 'bubbles', 'cubes', 'cylon', 'spin', 'spinningBubbles', 'spokes']
const rd = parseInt(Math.random() * types.length - 1 )
const getType = types[rd]

const XLoading = ({types=getType, color="#fff"}) => (
  <div className="loading-wrap">
    <div className="loading">
      <ReactLoading type={types} delay={0} color={color} height={'100%'} width={'100%'} />
    </div>
  </div>
)
export default XLoading


