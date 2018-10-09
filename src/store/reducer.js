import { combineReducers } from 'redux-immutable'
import { reducer as testReducer }  from '../pages/test/store'



// 合并reducer
export default combineReducers({
  test: testReducer
})