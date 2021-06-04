import * as actionsType from './actionTypes';
import { fetchMeals, fetchMeal, fetchSearchMeals } from '../../API/api';

const loadingMeals = () => ({
  type: actionsType.LOADING_MEALS,
});

const successMeals = (data) => ({
  type: actionsType.SUCCESS_MEALS,
  data,
});

const errorMeals = (error) => ({
  type: actionsType.ERROR_MEALS,
  error,
});

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
    .then((data) => dispatch(successMeals(data.meals)))
    .catch(() => dispatch(errorMeals('Error while fetching data.')));
};

const loadingMeal = () => ({
  type: actionsType.LOADING_MEAL,
});

const successMeal = (data) => ({
  type: actionsType.SUCCESS_MEAL,
  data,
});

const errorMeal = (error) => ({
  type: actionsType.ERROR_MEAL,
  error,
});

const fetchMealById = (id) => (dispatch) => {
  dispatch(loadingMeal());
  const response = fetchMeal(id);
  response
    .then((data) => dispatch(successMeal(data.meals[0])))
    .catch(() => dispatch(errorMeal('Error while fetching data.')));
};

export { fetchMealsByCategory, fetchMealById, searchMeals };
