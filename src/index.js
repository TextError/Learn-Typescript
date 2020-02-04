import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , root);

serviceWorker.unregister();