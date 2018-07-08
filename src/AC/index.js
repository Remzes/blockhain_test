import axios from 'axios'
import {LOAD_ALL_USERS, PENDING, FULFILLED, REJECTED} from '../constants'

export const loadAllUsers = () => {
  return dispatch => {
    dispatch({type: LOAD_ALL_USERS + PENDING})

    axios.get('https://5b42823d63839a00144c011d.mockapi.io/api/db/users')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => dispatch({type: LOAD_ALL_USERS + FULFILLED, payload: {data}}))
      .catch(err => dispatch({type: LOAD_ALL_USERS + REJECTED, payload: {err}}))
  }
}