import React from 'react'
import PropTypes from 'prop-types'

class InputTextComponent extends React.Component {
  handleKeyPress = (e) => {
    const keyCode = e.which || e.keyCode
    if (keyCode === 13) return this.props.onPressEnter()
  }
  render () {
    const {id, name, label, labelType, size, defaultValue, placeHolder, disabled, prefix, suffix, type} = this.props
    let style = ['input-text', size, labelType]
    if (prefix) style.push('prefix')
    if (suffix) style.push('suffix')
    if (type) style.push(type)
    return (
      <label className={style.join(' ')}>
        {label && <b>{label}</b>}
        <div>
          {prefix && <span>{prefix}</span>}
          <input
            type='text'
            id={id === null ? name : id}
            name={name}
            defaultValue={defaultValue}
            disabled={disabled}
            onKeyPress={this.handleKeyPress}
            placeHolder={placeHolder === null ? label : placeHolder}
          />
          {suffix && <span>{suffix}</span>}
        </div>
      </label>
    )
  }
}

InputTextComponent.defaultProps = {
  id: null,
  name: null,
  size: 'md',
  defaultValue: null,
  placeHolder: null,
  disabled: false,
  label: null,
  labelType: 'normal',
  onPressEnter: null,
  prefix: null,
  suffix: null,
  type: null
}

InputTextComponent.propTypes = {
  /** If id is null, id will use name instead */
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  defaultValue: PropTypes.string,
  /** If placeHolder is null, placeHolder will use label instead */
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelType: PropTypes.oneOf(['normal', 'inline']),
  onPressEnter: PropTypes.func,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger'])
}

export default InputTextComponent
