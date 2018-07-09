import axios from 'axios'
import {
  LOAD_ALL_USERS,
  PENDING,
  FULFILLED,
  REJECTED,
  DELETE_USERS,
  STARTING,
  DELETED,
  ERROR,
  FINISHED,
  SELECT_USER
} from '../constants'

export const loadAllUsers = () => {
  return dispatch => {
    dispatch({type: LOAD_ALL_USERS + PENDING})

    axios.get('https://5b42823d63839a00144c011d.mockapi.io/api/db/users')
      .then(res => dispatch({type: LOAD_ALL_USERS + FULFILLED, payload: {data: res.data}}))
      .catch(err => dispatch({type: LOAD_ALL_USERS + REJECTED, payload: {err}}))
  }
}

export const toggleTabs = (type) => {
  return dispatch => {
    dispatch({type})
  }
}

export const selectUser = (id) => {
  return ({type: SELECT_USER, payload: {id}})
}

export const deleteSelected = (ids) => {
  return dispatch => {
    if (ids.size > 0) {
      dispatch({type: DELETE_USERS + STARTING})
      ids.reduce((promise, id, index) => {
        console.log(id)
        return promise.then(() => {
          const seconds = index === 0 ? 0 : 50;
          return Promise.all([
            axios.delete(`https://5b42823d63839a00144c011d.mockapi.io/api/db/users/${id}`)
              .then(() => dispatch({type: DELETE_USERS + DELETED, payload: {id}}))
              .catch((err) => dispatch({type: DELETE_USERS + ERROR, payload: {err}})),
            _delay(seconds)
          ])
        })
      }, Promise.resolve())
    }
  }
}

function _delay(seconds) {
  return new Promise(res => setTimeout(res, seconds))
}