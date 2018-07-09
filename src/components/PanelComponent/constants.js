import {SHOW_ALL, SHOW_UNSENT, SHOW_SENT, DELETE_USERS} from "../../constants/index"

export const panelTabNames = [
  {id: 1, abbr: 'A', name: 'Show all', type: SHOW_ALL},
  {id: 2, abbr: 'S', name: 'Show sent', type: SHOW_SENT},
  {id: 3, abbr: 'U', name: 'Show unsent', type: SHOW_UNSENT},
  {id: 4, abbr: 'D', name: 'Delete selected recipients', type: DELETE_USERS}
]