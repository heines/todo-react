import '../App.scss';
import React from 'react';
import Clock from './Clock';
import Form from './Form';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Clock />
//           <Form />
//         </header>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
)

export default App;

// http://www.fumiononaka.com/Business/html5/FN1908003.html
