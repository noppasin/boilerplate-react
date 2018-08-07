import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class BreadcrumbComponent extends React.Component {
  render () {
    const {items, separator} = this.props
    return (
      <div id='breadcrumb'>
        <ul>
          {items.map((value, key) => (
            <li>
              <Link to={value.path || ''}>
                {value.icon}
                <span>{value.name}</span>
              </Link>
              {items[key + 1] && <span>{separator}</span>}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

BreadcrumbComponent.defaultProps = {
  separator: '/'
}

BreadcrumbComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.element
    }).isRequired
  ).isRequired,
  separator: PropTypes.string
}

export default BreadcrumbComponent
