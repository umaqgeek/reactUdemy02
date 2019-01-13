import { createStore, combineReducers } from 'redux';

import tempatReducer from './reducers/tempats';

const rootReducer = combineReducers({
  tempat: tempatReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
