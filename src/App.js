import React from 'react'
import {Router, hashHistory} from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'
import store from './store'

class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <Router children={routes} history={hashHistory} />
      </Provider>
    )
  }
}

export default App
