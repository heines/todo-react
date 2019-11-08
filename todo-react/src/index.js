import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

// Providerの目的は2つ
// 1 Reactコンポーネント内でreact-reduxのconnect()関数を使えるようにすること
// 2 ラップしたコンポーネントにstore情報を渡すこと
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
