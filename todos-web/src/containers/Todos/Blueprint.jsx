import styled from 'styled-components'
import { Button } from 'core/components/Button'

export const CreateNewTodo = styled(Button) `
  text-align: right;
  max-width: 7rem;
  height: 3rem;
  padding: 0.5rem;
  line-height: 0.6rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`

export const Wrapper = styled.div`
  background: ${props => props.theme.primary};
  padding: 1rem;
  text-align: center;
  position: relative;
  color: ${props => props.theme.light};
`

export const Container = styled.div`
  width: 80%;
  margin: auto;
`
