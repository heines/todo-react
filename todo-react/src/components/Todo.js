import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={'todo-item' + (completed ? ' todo-item__text--completed' : '')}
  >
    {completed ? "👌" : "👋"}{" "}
    <span>
      {text}
    </span>
  </li>
);

export default Todo;
