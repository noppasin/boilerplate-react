import React from 'react'
import {withInfo} from '@storybook/addon-info'
import {Story} from './../main'
import {Breadcrumb} from './../../component'

const {storiesOf, defaultInfo} = Story('Navigate')
const items = [
  {name: 'Home', path: '/', icon: <i className='iconfont icon-home' />},
  {name: 'Category', path: '/category'},
  {name: 'Sub category', path: '/category/sub'},
  {name: 'Article', path: '/category/sub/article'}
]

storiesOf.add(
  'Breadcrumb',
  withInfo({
    ...defaultInfo,
    source: false,
    text: `<h4>Source: <<b>Breadcrumb</b> items={[{name: String!, path: String, icon: Element},...]} /></h4>`
  })(() => [
    <div>
      <h1 className='heading'>Breadcrumb</h1>
      <div className='haft'>
        <div className='group'>
          <h3>default</h3>
          <Breadcrumb items={items} />
        </div>
        <div className='group'>
          <h3>separator</h3>
          <Breadcrumb items={items} separator={<i className='iconfont icon-right' />} />
        </div>
      </div>
    </div>
  ])
)
