import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import playstore from '../assets/playstore.svg'
import appstore from '../assets/appstore.svg'

export const Button = styled.a`
  cursor: pointer;
  img { height: 4rem }
`

const images = { playstore, appstore }

export const AppButton = ({ type, href }) => (
  <Button href={href} target="_blank">
    <img src={images[type]} alt="Download on {type}" />
  </Button>
)

AppButton.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string
}
