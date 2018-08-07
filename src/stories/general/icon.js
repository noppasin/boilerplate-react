import React from 'react'
import {withInfo} from '@storybook/addon-info'
import {Story} from './../main'
import IconFont from './../../asset/font/iconfont.svg'
import SVG from 'react-inlinesvg'

const {storiesOf, defaultInfo} = Story('General')

class FontIcon extends React.Component {
  state = {fonts: []}
  onLoadHandler = (src) => {
    const glyphs = document.getElementsByTagName('font')[0].getElementsByTagName('glyph')
    const num = glyphs.length
    if (num && num > 1) {
      let newFonts = []
      for (let i = 1; i < num; i++) {
        newFonts.push({name: glyphs[i].getAttribute('glyph-name')})
      }
      this.setState({fonts: newFonts})
    }
  }
  copyToClipboard = (e) => {
    if (!e.target.querySelector('i')) return false
    var dummy = document.createElement('input')
    document.body.appendChild(dummy)
    dummy.setAttribute('id', 'dummy_id')
    document.getElementById('dummy_id').value = e.target.querySelector('i').outerHTML.replace('class', 'className')
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    const msg = document.createElement('p')
    e.target.appendChild(msg)
    msg.innerText = 'Copied'
    setTimeout(() => {
      msg.remove()
    }, 1000)
  }
  render () {
    const {fonts} = this.state
    return (
      <div>
        <SVG
          className='dn'
          src={IconFont}
          onLoad={(src) => {
            this.onLoadHandler(src)
          }}
        />
        <ul className='icon_lists clear'>
          {fonts &&
            fonts.map((value, key) => {
              return (
                <li key={key} onClick={this.copyToClipboard}>
                  <i className={'iconfont' + ' icon-' + value.name} />
                  <div className='name'>{value.name}</div>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

storiesOf.add(
  'Icon',
  withInfo({...defaultInfo, inline: false, source: false, text: `<h4>Source: <<b>i</b> className="iconfont classname" <b>/></b></h4>`})(() => [
    <div>
      <h1 className='heading'>Icon font</h1>
      <FontIcon />
    </div>
  ])
)
