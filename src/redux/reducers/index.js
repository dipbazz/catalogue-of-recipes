import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import mealsReducer from './meals';

const meal = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  meal,
});

export default rootReducer;
