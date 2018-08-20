import React from 'react'
import styled, { css } from 'styled-components'
import { screen } from 'core/utils/theme'

const Grid = styled.div`
  display: grid;

  ${({ theme }) => css`
    grid-template-rows: 1.5rem ${theme.logo.height} 1.5rem;
    grid-template-columns: 1.25rem ${theme.logo.width} 1.25rem;

    ${screen.desktop`
      grid-template-columns: 0 ${theme.logo.width} 1.25rem;
      grid-template-rows: 2.37rem ${theme.logo.height} 2.37rem;    
    `}
  `}
`

const Image = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  background-size: 100% 100%;
  background-image: url(${props => props.theme.logo.image});
`

export const Logo = () => (
  <Grid><Image /></Grid>
)
