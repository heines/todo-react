import '../App.scss';
import React from 'react';
import Clock from './Clock';
import Form from './Form';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <Clock />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;

// http://www.fumiononaka.com/Business/html5/FN1908005.html
