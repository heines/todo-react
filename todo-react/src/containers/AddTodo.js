import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={
        (event) => {
          // React では false を返してもデフォルトの動作を抑止することができません。明示的に preventDefault を呼び出す必要があります。
          // from https://ja.reactjs.org/docs/handling-events.html
          event.preventDefault();
          const text = input.value.trim();
          input.value = '';
          // テキストなしリストを作らない
          if(!text){
            return;
          }
          dispatch(addTodo(text)); // (全てのreducerが呼び出される)
        }
      }>
        <input ref={(element) => input = element} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
