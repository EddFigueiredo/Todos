import styled from 'styled-components'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

const InputContainer = styled.div`
  display: block;
  position: relative;
  padding: 0.8rem 0;

  input {
    border: 0;
    width: 100%;
    outline: none;
    display: block;
    background: ${props => props.children[0].props.background ? props.children[0].props.background : 'transparent'};
    border-bottom: ${props => props.children[0].props.border ? props.children[0].props.border : `1px solid ${props.theme.neutroLight}`};
    color: ${props => props.theme.neutroDark};
    font-size: 1rem;
    line-height: 1.4rem;
    padding: 0.5rem 0.1rem 0.2rem 0.1rem;

    &:focus {
      border-bottom: ${props => props.children[0].props.border ? props.children[0].props.border : `2px solid ${props.theme.primary}`};
      margin-bottom: -1px;

      & ~ label {
        color: ${props => props.theme.primary};
      }
    }

    &:focus ~ label, 
    &:not([value=""]) ~ label {
      top: 0;
      font-size: 0.75rem;
    }

  }

  label {
    position: absolute;
    font-size: 1rem;
    color: ${props => props.theme.neutro};
    padding: 0 0.1rem;
    transition: 0.2s ease;
    top: 1.1rem;
    left: 0;
    transition-property: font-size top;
  }
`

export class Input extends PureComponent {
  render() {
    return (
      <InputContainer>
        <InputMask id={this.props.name} {...this.props} mask={this.props.mask} maskChar={null} />
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
      </InputContainer>
    )
  }
}

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  mask: PropTypes.string
}
