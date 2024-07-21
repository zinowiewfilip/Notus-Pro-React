import React from 'react'

import PropTypes from 'prop-types'

import './member-details.css'

const MemberDetails = (props) => {
  return <div className="member-details-container"></div>
}

MemberDetails.defaultProps = {
  heading11: 'WEB DEVELOPER',
  heading1: 'Ryan Tompson',
  imageAlt: 'image',
  imageSrc:
    'https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg',
}

MemberDetails.propTypes = {
  heading11: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default MemberDetails
