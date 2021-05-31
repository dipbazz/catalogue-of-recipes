import { createStore } from 'redux';
import rootReducer from './reducers';

const state = {};

const store = createStore(rootReducer, state);

export default store;
