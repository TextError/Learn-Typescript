import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , root);

serviceWorker.unregister();