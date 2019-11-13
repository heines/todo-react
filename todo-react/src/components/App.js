import '../App.scss';
import React from 'react';
import Clock from './Clock';
import Form from './Form';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <Clock />
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App;

// http://www.fumiononaka.com/Business/html5/FN1908005.html
