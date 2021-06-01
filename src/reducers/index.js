import { combineReducers } from 'redux';
import categories from './categories';
import meals from './meals';

const meal = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categories,
  meals,
  meal,
});

export default rootReducer;
