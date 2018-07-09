import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import selectionReducer from './chosenTabReducer'
import selectedUsers from './selectedUsersReducer'

const reducer = combineReducers({
  users: usersReducer,
  selection: selectionReducer,
  selectedUsers: selectedUsers
})

export default reducer