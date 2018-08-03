import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class ButtonBack extends React.Component {
  handleClick = () => {
    window.history.back()
  }
  render () {
    const {size, label, fullWidth, icon} = this.props
    const style = ['btn', 'btn-back', size, fullWidth ? 'fullwidth' : '']
    return (
      <button type='button' className={style.join(' ')} onClick={this.handleClick}>
        {icon && <i className='iconfont icon-cc-arrow-left' />}
        <span>{label}</span>
      </button>
    )
  }
}

ButtonBack.defaultProps = {
  size: 'md',
  fullWidth: false,
  label: 'Back',
  icon: true
}

ButtonBack.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.bool
}

export default ButtonBack
