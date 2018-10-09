import { TEST } from './constants'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  name: '吴大龙'
})
export default (state=defaultState, action={}) => {
  switch(action.type){
    case TEST:
      return state.set('name', '吴强')
    default:
      return state
  }
}



