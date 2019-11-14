import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLOR from '../components/_const/COLOR';

const AddTodo = styled.form`
  padding-top: 1.1em;
  input {
    outline: none;
    font-size: 1.5em;
  }
  button {
    font-size: 1.5em;
    margin-left: .4em;
    padding: 0.2em 0.45em;
    color: ${COLOR.TEXT2};
    background: ${COLOR.SUB};
    border-radius: 0.15em;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
  }
`;

const StyledAddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <AddTodo onSubmit={
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
      </AddTodo>
    </div>
  );
};

StyledAddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(StyledAddTodo);
