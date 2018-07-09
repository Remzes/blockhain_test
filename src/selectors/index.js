import {createSelector} from 'reselect'

export const usersMapSelector = state => state.users.values
export const selectionSelector = state => state.selection

export const usersPending = state => state.users.pending
export const usersFulfilled = state => state.users.fulfilled
export const usersError = state => state.users.error

export const usersSelector = createSelector(usersMapSelector, values => values.valueSeq().toArray())

export const selectedUsersSelector = createSelector(usersSelector, selectionSelector, (users, selection) => {
  if (selection === '' || selection === 'All') return users
  return users.filter(user => user.status === selection.toLowerCase())
})