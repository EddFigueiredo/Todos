import styled from 'styled-components'
import { contentWrapper } from 'core/utils/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid ${props => props.theme.primary};
  ${contentWrapper}
`
