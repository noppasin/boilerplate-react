import React from 'react'
import {Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
const {Fragment} = React

export const PublicRoute = ({component: Component, ...rest}) => (
  <Route
    render={(props) => (
      <Fragment>
        <Header {...props} {...rest} />
        <main>
          <Component {...props} {...rest} />
        </main>
        <Footer {...props} {...rest} />
      </Fragment>
    )}
  />
)
