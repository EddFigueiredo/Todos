import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const StyledButton = styled.button`
  display: inline-block;
  border: 0;
  font-size: 1rem;
  padding: 0.72rem;
  min-width: 7.4rem;
  min-height: 0;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  outline: none;
  line-height: 1.37rem;
  color: ${props => props.theme.light};
  background: ${props => props.theme[props.type ? props.type : 'primary']};
`

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
}
