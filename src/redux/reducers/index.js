import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import mealsReducer from './meals';
import mealReducer from './meal';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  meal: mealReducer,
});

export default rootReducer;
