/* REACT */
import React from 'react';

/* MODULES */
import classNames from 'classnames';

/* CUSTOM COMPONENTS */
import SimpleButton from './../SimpleButton';
import Checkbox from './../Checkbox';

/* STYLES */
import './styles.css';

const TodoItem = ({ checked, onChange, text, deleteTodo }) => {

  const todoStyle = classNames({
    'todo-item': true,
    'todo-item__checked': checked,
  });

  return (
    <li className={todoStyle}>
      <Checkbox
        value={checked}
        onChange={onChange}
      />
      {text}
      <SimpleButton
        label="X"
        onClick={deleteTodo}
        btnClose={true}
      />
    </li>
  );
}

export default TodoItem;