import React from 'react'
import {withInfo} from '@storybook/addon-info'
import {Story} from './../main'
import {Link} from './../../component'

const {storiesOf, defaultInfo} = Story('General')
storiesOf.add(
  'Link',
  withInfo({...defaultInfo, source: false, text: `<h4>Source: <<b>Link</b>>Children</<b>Link</b>></h4>`})(() => [
    <div>
      <h1 className='heading'>Link</h1>
      <div className='haft'>
        <div className='grid2'>
          <div className='group'>
            <h3>Primary</h3>
            <div className='inlineGroup'>
              <div>
                <Link type='primary'>Read more...</Link>
              </div>
            </div>
          </div>
          <div className='group'>
            <h3>Success</h3>
            <div className='inlineGroup'>
              <div>
                <Link type='success'>Read more...</Link>
              </div>
            </div>
          </div>
          <div className='group'>
            <h3>Danger</h3>
            <div className='inlineGroup'>
              <div>
                <Link type='danger'>Read more...</Link>
              </div>
            </div>
          </div>
          <div className='group'>
            <h3>Warning</h3>
            <div className='inlineGroup'>
              <div>
                <Link type='warning'>Read more...</Link>
              </div>
            </div>
          </div>
          <div className='group'>
            <h3>Back</h3>
            <div className='inlineGroup'>
              <div>
                <Link type='back'>Go back</Link>
              </div>
            </div>
          </div>
          <div className='group'>
            <h3>Icon</h3>
            <div className='inlineGroup'>
              <div>
                <Link type='back' icon={<i className='iconfont icon-home' />}>
                  Home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ])
)
