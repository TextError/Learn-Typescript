import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './App';

import './index.css';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

serviceWorker.unregister();