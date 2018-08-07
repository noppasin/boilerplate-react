import React from 'react'
import {Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import {storiesOf} from '@storybook/react'
import './style.css'

const defaultInfo = {header: false, inline: true}

const AppRouter = (story) => {
  return (
    <Router history={createHistory()}>
      <div id='storybook'>{story()}</div>
    </Router>
  )
}

export const Story = (name) => {
  return {
    storiesOf: storiesOf(name, module).addDecorator((story) => AppRouter(story)),
    defaultInfo: defaultInfo
  }
}

// export const StoryGeneral = {
//   storiesOf: storiesOf('General', module).addDecorator((story) => AppRouter(story)),
//   defaultInfo: defaultInfo
// }

// export const StoryNavigate = {
//   storiesOf: storiesOf('Navigate', module).addDecorator((story) => AppRouter(story)),
//   defaultInfo: defaultInfo
// }

// export const StoryEntry = {
//   storiesOf: storiesOf('Navigate', module).addDecorator((story) => AppRouter(story)),
//   defaultInfo: defaultInfo
// }
