import {LOAD_ALL_USERS, PENDING, FULFILLED, REJECTED} from '../constants'
import {OrderedMap, Record} from 'immutable'
import {convertArrayToMap} from "../helpers/convertArrayToMap"
import {convertMapToArray} from "../helpers/convertMapToArray"

const UserRecord = Record({
  id: undefined,
  email: undefined,
  name: undefined,
  sent: undefined
})

const InitialState = Record({
  pending: false,
  fulfilled: false,
  error: null,
  values: new OrderedMap({})
})

const defaultState = new InitialState()

export default (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_ALL_USERS + PENDING:
      return state.set('pending', true)

    case LOAD_ALL_USERS + FULFILLED:
      console.log(payload.data)
      return state
        .set('values', convertArrayToMap(payload.data, UserRecord))
        .set('pending', false)
        .set('loaded', false)
      break;

    case LOAD_ALL_USERS + REJECTED:
        return state.set('error', payload.err)

    default:
      return state
  }
}