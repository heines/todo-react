import React, { Component } from 'react';
import './Form.scss';

const Form = (props) => (
  <form>
    <div className="Form">
      <label>new todo:</label>
      <input name="title" type="text"></input>
      <input type="submit" value="add"></input>
    </div>
  </form>
);

export default Form;
