import { TEST } from './constants'
import axios from 'axios'




// http://jsonplaceholder.typicode.com/posts


// thunk

export const thunkTest = () => {
  
  return (dispatch) => {
    axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res)
      dispatch({ type: TEST, payload: {name: 2313213185648721} })
    }) 
  }
}
