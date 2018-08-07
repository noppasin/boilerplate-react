import React from 'react'
import {withInfo} from '@storybook/addon-info'
import {Story} from './../main'
import {InputText} from './../../component'
import {action} from '@storybook/addon-actions'

const {storiesOf, defaultInfo} = Story('Data Entry')

storiesOf.add(
  'Input',
  withInfo({
    ...defaultInfo,
    source: false,
    text: `<h4>Source: <<b>Input</b> /></h4>`
  })(() => [
    <div>
      <h1 className='heading'>Input</h1>
      <div className='haft'>
        <div className='grid2'>
          <div className='group'>
            <h3>default</h3>
            <InputText />
          </div>
          <div className='group'>
            <h3>defaultValue</h3>
            <InputText defaultValue='Something...' />
          </div>
          <div className='group'>
            <h3>type</h3>
            <InputText label='Primary' type='primary' />
            <br />
            <InputText label='Success' type='success' />
            <br />
            <InputText label='Warning' type='warning' />
            <br />
            <InputText label='Danger' type='danger' />
          </div>
          <div className='group'>
            <h3>size</h3>
            <InputText size='sm' placeHolder='SM' />
            <br />
            <InputText size='md' placeHolder='MD' />
            <br />
            <InputText size='lg' placeHolder='LG' />
          </div>
          <div className='group'>
            <h3>placeHolder</h3>
            <InputText placeHolder='Custom placeholder' />
          </div>
          <div className='group'>
            <h3>disabled</h3>
            <InputText disabled={true} defaultValue='Wording...' />
          </div>
          <div className='group'>
            <h3>label</h3>
            <InputText label='Normal' />
          </div>
          <div className='group'>
            <h3>Label Type</h3>
            <InputText size='sm' type='danger' label='Inline' labelType='inline' suffix={<i className='iconfont icon-securityscan' />} />
            <br />
            <InputText label='Inline' labelType='inline' prefix={<i className='iconfont icon-securityscan' />} />
          </div>
          <div className='group'>
            <h3>onPressEnter</h3>
            <InputText onPressEnter={action('onPress enter')} />
          </div>
          <div className='group'>
            <h3>prefix</h3>
            <InputText size='sm' prefix={<i className='iconfont icon-securityscan' />} defaultValue='Security' />
            <br />
            <InputText prefix={<i className='iconfont icon-user' />} placeHolder='Username' />
            <br />
            <InputText size='lg' prefix={<i className='iconfont icon-link' />} placeHolder='Link' />
          </div>
          <div className='group'>
            <h3>suffix</h3>
            <InputText size='sm' suffix={<i className='iconfont icon-securityscan' />} defaultValue='Security' type='primary' />
            <br />
            <InputText suffix={<i className='iconfont icon-user' />} placeHolder='Username' type='success' />
            <br />
            <InputText size='lg' suffix={<i className='iconfont icon-link' />} placeHolder='Link' type='warning' />
          </div>
        </div>
      </div>
    </div>
  ])
)
