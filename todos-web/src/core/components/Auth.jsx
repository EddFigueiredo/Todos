import { Button } from 'core/components/Button'
import styled from 'styled-components'
import { Link } from 'react-router'
import { screen } from 'core/utils/theme'

export const AuthForm = styled.div`
  margin: 0;
  ${screen.desktop`padding: 5rem;`}
`

export const TinyLink = styled(Link)`
  font-size: 0.75rem;
  display: block;
  color: ${props => props.theme.neutroLight};
`

export const AuthButton = styled(Button)`
  display: block;
  margin: 2rem auto 1rem auto;
`

export const RegisterLink = styled(TinyLink)`
  text-align: center;
  font-size: 0.8rem;

  ${screen.tablet`font-size: 0.9rem;`}
`
