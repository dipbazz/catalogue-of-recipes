import { combineReducers } from 'redux';
import categories from './categories';
import meals from './meals';

const rootReducer = combineReducers({
  categories,
  meals,
});

export default rootReducer;
