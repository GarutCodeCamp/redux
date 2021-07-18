import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import reducer from './reducer/'
import App from './Components/App';

ReactDOM.render(
<Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)}>
  <App />
</Provider>
,
  document.getElementById('root')
);
