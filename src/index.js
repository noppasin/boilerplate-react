import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import AppRouter from './Router'
import './asset/css/app.css'

ReactDOM.render(
  <Router history={createHistory()}>
    <AppRouter />
  </Router>,
  document.getElementById('app')
)

registerServiceWorker()
