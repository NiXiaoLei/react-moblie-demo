import React, { PureComponent  } from 'react'
import { connect } from 'react-redux'
import { TEST } from './store/constants'
import { thunkTest } from './store/actionCreator'
import './index.scss'
class XTest extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      flag: false
    }
  }

  


  render() {
    return (
      <div className="test">
        <h3  {...global.aniCreator('fadeIn')}>
          我叫吴小红{this.props.name}
        </h3>
        { this.state.flag ? '啥v比': 'a23s1d32a1sd' }
        <button onClick={this.props.clickHandle}>点我</button>
        <button onClick={this.props.getPlaceHolder}>请求placeHodle</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.get('test').get('name')

})

const mapDispatchToProps = (dispatch) => ({
  clickHandle() {
    dispatch({ type: TEST,  payload: {name: 1321321}})
  },
  getPlaceHolder(){
    dispatch(thunkTest())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(XTest)