import styled from 'styled-components'
import { screen, contentWrapper } from 'core/utils/theme'

export const Title = styled.h1`
  ${contentWrapper}
  
  color: ${props => props.theme.primary};
  font-size: 2rem;
  font-weight: 300;
  padding: 0 1.25rem;
  margin: auto;
  
  ${screen.tablet`font-size: 2.3rem;`}
  ${screen.desktop`font-size: 3.2rem;`}
`

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
`

export const Download = styled.div`
  display: none;
  padding-top: 7rem;
  grid-template-rows: repeat(2, auto);
  ${screen.tablet`display: grid;`}
`

export const DownloadTitle = styled(Title)`
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 1.5rem;
`

export const DownloadApp = styled.div`
  text-align: center;
  a {
    display: inline-block;
    margin: 0.5rem;
    &:first-child { margin-left: 0 }
  }
`

export const Footer = styled.div`
  height: 10.25rem;

  display: none;
  ${screen.tablet`display: block;`}
`
