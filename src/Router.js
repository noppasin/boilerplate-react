import React from 'react'
import {Switch} from 'react-router-dom'
import {PublicRoute} from './component/layout'

import Home from './page/home'

class AppRouter extends React.Component {
  render () {
    return (
      <Switch>
        <PublicRoute path='/' exact component={Home} />
      </Switch>
    )
  }
}

export default AppRouter
