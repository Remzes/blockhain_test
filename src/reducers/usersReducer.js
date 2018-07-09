import {LOAD_ALL_USERS, PENDING, FULFILLED, REJECTED} from '../constants'
import {Record} from 'immutable'
import {convertArrayToMap} from "../helpers/convertArrayToMap"

const UserRecord = Record({
  id: undefined,
  email: undefined,
  name: undefined,
  status: undefined
})

const InitialState = Record({
  pending: false,
  fulfilled: false,
  error: null,
  values: convertArrayToMap([], UserRecord)
})

const defaultState = new InitialState()

export default (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ALL_USERS + PENDING:
      return state.set('pending', true)

    case LOAD_ALL_USERS + FULFILLED:
      const {data} = payload
      return state
        .set('pending', false)
        .set('fulfilled', true)
        .update('values', values => convertArrayToMap(data, UserRecord).merge(values))
      break;

    case LOAD_ALL_USERS + REJECTED:
        return state.set('error', payload.err)

    default:
      return state
  }
}