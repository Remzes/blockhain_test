import {Record, List, OrderedMap} from 'immutable'
import {SELECT_USER} from "../constants/index"
import {convertArrayToMap} from "../helpers/convertArrayToMap"

const InitialState = Record({
  selectedUsers: List([])
})

const defaultState = InitialState()

export default (state = defaultState, action) => {
  const {type, payload} = action
  switch(type) {
    case SELECT_USER:
      return state.update('selectedUsers', users => users.push(payload.id))

    default:
      return state
  }
}