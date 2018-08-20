import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { contentWrapper } from 'core/utils/theme'

const Wrapper = styled.div`
  background: ${props => props.theme.primary};
  height: 3.5rem;
  text-align: center;
  position: relative;
  ${contentWrapper}
`

const Grid = styled.div`
  margin: auto;
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.theme.light};
`

export class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <NavLink to="todos"><FormattedMessage id="todos" /></NavLink>
        </Grid>
      </Wrapper>
    )
  }
}

Navbar.propTypes = {}
