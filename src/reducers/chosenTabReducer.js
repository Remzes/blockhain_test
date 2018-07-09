import {SHOW_SENT, SHOW_ALL, SHOW_UNSENT} from "../constants/index"

export default (state = 'All', action) => {
  const {type, payload} = action
  switch(type) {
    case SHOW_SENT:
      return state = 'Sent'

    case SHOW_UNSENT:
      return state = 'Unsent'

    case SHOW_ALL:
      return state = 'All'

    default:
      return state
  }
}