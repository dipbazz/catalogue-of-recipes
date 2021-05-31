import { combineReducers } from 'redux';
import categories from './categories';

const rootReducer = combineReducers({
  categories,
});

export default rootReducer;
