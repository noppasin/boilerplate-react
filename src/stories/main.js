import React from 'react'
import {storiesOf} from '@storybook/react'
import './style.css'

const defaultInfo = {header: false, inline: true}
export const StoryButton = {
  storiesOf: storiesOf('Button', module).addDecorator((story) => <div id='storybook'>{story()}</div>),
  defaultInfo: defaultInfo
}
