import React from 'react'
import 'babel-polyfill'
import {Provider} from 'react-redux'
import store from '../store'

import CombineContainer from './CombineContainer'

export const App = () => {
  return (
    <Provider store={store}>
      <CombineContainer/>
    </Provider>
  )
}

export default App