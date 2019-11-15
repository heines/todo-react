import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLOR from './_const/COLOR';
import styled from 'styled-components';
import moment from 'moment';

const Todo = styled.li`
  font-family: monospace;
  cursor: pointer;
  font-size: 2em;
  line-height: 1.5;
  &.completed {
    text-decoration:  line-through;
    color: ${COLOR.BASE};
  }
`;

const StyledTodo = ({ onClick, completed, text }) => (
  <Todo
    onClick={onClick}
    className={completed ? "completed" : ''}
  >
    {completed ? "✔︎" : "・"}{" "}
    <span>
      {text}: {moment().format('YY/MM/DD h:mm')}
    </span>
  </Todo>
);

StyledTodo.propsTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default StyledTodo;
