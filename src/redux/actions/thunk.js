import { fetchMeals, fetchMeal, fetchSearchMeals } from '../../API/api';
import {
  loadingMeal, errorMeal, successMeal, loadingMeals, errorMeals, successMeals,
} from './index';

const fetchMealsByCategory = (category) => (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchMeals(category);
  response
    .then((data) => dispatch(successMeals(data.meals)))
    .catch(() => dispatch(errorMeals('Error while fetching data.')));
};

const searchMeals = (query) => (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchSearchMeals(query);
  response
    .then((data) => {
      if (data.meals) {
        dispatch(successMeals(data.meals));
      } else {
        dispatch(errorMeals(`There is no meal with name: ${query}`));
      }
    })
    .catch(() => dispatch(errorMeals('Error while fetching data.')));
};

const fetchMealById = (id) => (dispatch) => {
  dispatch(loadingMeal());
  const response = fetchMeal(id);
  response
    .then((data) => dispatch(successMeal(data.meals[0])))
    .catch(() => dispatch(errorMeal('Error while fetching data.')));
};

export { fetchMealsByCategory, searchMeals, fetchMealById };
