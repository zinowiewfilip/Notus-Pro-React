import React from 'react'

import PropTypes from 'prop-types'

import './counter.css'

const Counter = (props) => {
  return <div className="counter-container"></div>
}

Counter.defaultProps = {
  type: 'Friends',
  number: '22',
}

Counter.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
}

export default Counter
