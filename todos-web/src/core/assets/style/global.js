import { injectGlobal } from 'styled-components'
import { screen } from 'core/utils/theme'

export const injectGlobalStyle = props => injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${props.font.family};
    font-size: ${props.font.base};
    color: ${props.neutro};
  }

  a {
    text-decoration: none;
    color: ${props.primary}
  }

  h1 {
    font-size: 1.3rem;
    letter-spacing: -0.2px;
    text-align: left;
    color: ${props.primary};

    ${screen.desktop`font-size: 1.9rem;`}
  }
`
