import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

const middlewares = [thunk];

export const store: any = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

export const persistor = persistStore(store);