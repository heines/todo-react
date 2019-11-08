import React from 'react';
import classNames from 'classnames';

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

export default Todo;
