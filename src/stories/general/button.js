import React from 'react'
import {withInfo} from '@storybook/addon-info'
import {action} from '@storybook/addon-actions'
import {Story} from './../main'
import {Button} from './../../component'

const {storiesOf, defaultInfo} = Story('General')
storiesOf.add(
  'Button',
  withInfo({...defaultInfo, source: false, text: `<h4>Source: <<b>Button</b> /></h4>`})(() => [
    <div>
      <h1 className='heading'>Button</h1>
      <div className='haft'>
        <div className='group'>
          <h3>type</h3>
          <div className='inlineGroup'>
            <Button type='primary' label='Primary' />
            <Button type='success' label='Success' />
            <Button type='warning' label='Warning' />
            <Button type='danger' label='Danger' />
            <Button type='back' label='Back' />
          </div>
        </div>
        <div className='grid2'>
          <div className='group'>
            <h3>size</h3>
            <div className='inlineGroup'>
              <Button size='sm' label='SM' />
              <Button size='md' label='MD' />
              <Button size='lg' label='LG' />
            </div>
          </div>
          <div className='group'>
            <h3>fullwidth</h3>
            <div>
              <Button fullWidth={true} label='Button' />
            </div>
          </div>
          <div className='group'>
            <h3>label</h3>
            <div>
              <Button label='Your label' />
            </div>
          </div>
          <div className='group'>
            <h3>icon</h3>
            <div className='inlineGroup'>
              <Button icon={<i className='iconfont icon-fire' />} />
              <Button icon={<i className='iconfont icon-check-circle-fill' />} />
            </div>
          </div>
          <div className='group'>
            <h3>onClick</h3>
            <div>
              <Button onClick={action('clicked')} />
            </div>
          </div>
          <div className='group'>
            <h3>href</h3>
            <div className='inlineGroup'>
              <Button href='/someurl' target='_self' label='Link_self' />
              <Button href='/someurl' target='_blank' label='Link_blank' />
            </div>
          </div>
          <div className='group'>
            <h3>disabled</h3>
            <div>
              <Button disabled={true} />
            </div>
          </div>
          <div className='group'>
            <h3>loading</h3>
            <div>
              <Button loading={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ])
)
