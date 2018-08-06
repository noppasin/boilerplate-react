import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class LinkComponent extends React.Component {
  historyBack = () => {
    window.history.back()
  }
  render () {
    const {children, href, type, icon} = this.props
    const iconfont = icon || (type === 'back' ? <i className='iconfont icon-cc-arrow-left' /> : null)
    return (
      <Link className={'link ' + type} to={href} onClick={type === 'back' ? this.historyBack : null}>
        {iconfont}
        <span>{children}</span>
      </Link>
    )
  }
}

LinkComponent.defaultProps = {
  type: 'primary',
  href: '',
  icon: null
}

LinkComponent.propTypes = {
  /** If type is 'back', Icon and onclick action will generated */
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'back']),
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.element
}

export default LinkComponent
