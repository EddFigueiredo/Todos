import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import map from 'lodash/map'

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  list-style:none;
  
  :nth-child(odd) {
    background: ${props => props.theme.primaryLight};
    color: ${props => props.theme.light};
  }

  ${props => props.checked && css`

    background: #888 !important;
    color: #fff;
    text-decoration: line-through;

    ::before {
      content: '';
      position: absolute;
      border-color: #fff;
      border-style: solid;
      border-width: 0 2px 2px 0;
      top: 10px;
      left: 16px;
      transform: rotate(45deg);
      height: 15px;
      width: 7px;
    }
  `}
`

const RemoveButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;

  ::after {
    content: 'x';
  }
`

export class TodoList extends PureComponent {
  get items() {
    return this.props.items
  }

  render() {
    return (
      <List>
        {map(this.props.items, (todo, idx) => (
          <ListItem
            key={idx}
            checked={!!todo.checked}
            onClick={() => this.props.markChecked(idx)}
          >
            {todo.title}
            <RemoveButton onClick={() => this.props.delete(todo.id)} />
          </ListItem>
        ))}
      </List>
    )
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func,
  markChecked: PropTypes.func
}
