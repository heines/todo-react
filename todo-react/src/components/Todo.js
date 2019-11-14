import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={classNames(
        "todo-item__text",
        {"todo-item__text--completed" : completed}
    )}
  >
    {completed ? "👌" : "👋"}{" "}
    <span>
      {text}
    </span>
  </li>
);

Todo.propsTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
