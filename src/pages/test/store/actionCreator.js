import { TEST } from './constants'
import axios from 'axios'




// http://jsonplaceholder.typicode.com/posts

export const thunkTest = () => {
  return async (dispatch) => {
    let res = await axios.get('http://jsonplaceholder.typicode.com/posts')
    console.log(res)
    dispatch({ type: TEST, payload: {name: 2313213185648721} })
  }
}
