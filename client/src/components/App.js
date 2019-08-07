import React from 'react'
import { BrowserRouter as Router, Route,} from "react-router-dom"
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Invite from './Invite'
import Going from "./Going"
import NotGoing from "./NotGoing"

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div id="container">
          {/* <Invite /> */}
        </div>
        <Route exact path="/" component={Invite} />
        <Route exact path="/going" component={Going} />
        <Route exact path="/notgoing" component={NotGoing} />
      </Router>
    </Provider>
  )
}