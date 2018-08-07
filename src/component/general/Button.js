import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class ButtonComponent extends React.Component {
  historyBack = () => {
    window.history.back()
  }
  button = (label, style, action, iconfont) => {
    const {disabled, loading} = this.props
    return (
      <button type='button' className={style.join(' ')} onClick={action} disabled={disabled || loading}>
        {iconfont}
        <span>{label}</span>
      </button>
    )
  }
  link = (label, style, iconfont) => {
    const {href, disabled, loading, target} = this.props
    return (
      <Link to={href} target={target} className={style.join(' ')} disabled={disabled || loading}>
        {iconfont}
        <span>{label}</span>
      </Link>
    )
  }
  render () {
    const {size, fullWidth, icon, type, onClick, href, loading} = this.props
    const action = onClick || (type === 'back' ? this.historyBack : null)
    let {label} = this.props
    let iconfont = icon || (type === 'back' ? <i className='iconfont icon-cc-arrow-left' /> : null)
    let style = ['btn', size]
    if (fullWidth) style.push('fullwidth')
    if (type) style.push(type)
    if (loading && type !== 'back') {
      iconfont = <i className='iconfont icon-Loading1' />
      style.push('loading')
      label = 'Loading...'
    }
    return href ? this.link(label, style, iconfont) : this.button(label, style, action, iconfont)
  }
}

ButtonComponent.defaultProps = {
  type: null,
  size: 'md',
  fullWidth: false,
  label: 'Button',
  icon: null,
  onClick: null,
  href: null,
  target: '_self',
  disabled: false,
  loading: false
}

ButtonComponent.propTypes = {
  /** If type is 'back', Icon and onclick action will generated */
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'back']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  /** Redirect url of link button */
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

export default ButtonComponent
