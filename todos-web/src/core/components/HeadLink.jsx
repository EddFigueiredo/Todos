import styled from 'styled-components'
import { Link } from 'react-router'
import { screen } from 'core/utils/theme'

export const HeadLink = styled(Link)`
  line-height: 5.5rem;
  display: inline-block;
  color: ${props => props.theme.neutro};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.neutroDark}; 
  }

  ${screen.desktop`line-height: 7.3rem;`}
`
