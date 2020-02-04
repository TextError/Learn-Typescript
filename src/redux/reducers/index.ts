import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import post from './post';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data']
};

const rootReducer = combineReducers({
  post
});


export default persistReducer(persistConfig, rootReducer);