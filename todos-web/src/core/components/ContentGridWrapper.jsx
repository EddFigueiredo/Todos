import styled from 'styled-components'
import { screen } from 'core/utils/theme'

export const ContentGridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "content content content";
  
  ${screen.desktop`
    grid-template-columns: 10% auto 10%;
    grid-template-areas: ". content .";
  `}
`

export const InsideWrapper = styled.div`
  display: grid;
  grid-template-rows: 1rem auto;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: 
    ". . ."
    "content content content"
    "footer-content footer-content footer-content";
  padding: 0 1.25rem;
  
  ${screen.desktop`
    grid-template-rows: 5rem auto;
    grid-template-columns: 1fr 44rem 1fr;
    grid-template-areas: 
      ". . ."
      ". content ."
      "footer-content footer-content footer-content";
  `}
`

export const Content = styled.div`
  grid-area: content;
`
