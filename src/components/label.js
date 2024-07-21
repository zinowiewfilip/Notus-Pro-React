import React from 'react'

import PropTypes from 'prop-types'

import './label.css'

const Label = (props) => {
  return <div className="label-container"></div>
}

Label.defaultProps = {
  text: 'Text',
}

Label.propTypes = {
  text: PropTypes.string,
}

export default Label
