import React from 'react'
import {withInfo} from '@storybook/addon-info'
import {StoryButton} from './../main'
import {ButtonBack} from './../../component'

const {storiesOf, defaultInfo} = StoryButton
storiesOf.add(
  'Back',
  withInfo({...defaultInfo, source: false, text: `<h4>Source: <<b>ButtonBack</b>/></h4>`})(() => [
    <div>
      <h1 className='heading'>ButtonBack</h1>
      <div>
        <h3>Size</h3>
        <div className='inlineGroup'>
          <ButtonBack size='sm' />
          <ButtonBack size='md' />
          <ButtonBack size='lg' />
        </div>
      </div>
      <div>
        <h3>Full width</h3>
        <div className='container-fullwidth'>
          <ButtonBack fullWidth={true} />
        </div>
      </div>
      <div>
        <h3>Label</h3>
        <div>
          <ButtonBack label='Your label' />
        </div>
      </div>
      <div>
        <h3>Hide Icon</h3>
        <div>
          <ButtonBack icon={false} />
        </div>
      </div>
    </div>
  ])
)
