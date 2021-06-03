import { LOADING, SUCCESS, ERROR } from './actionTypes';
import API from '../../config/config';
import loadMeals from '../../API/api';

const loadingMeals = () => ({
  type: LOADING,
});

const successMeals = (data) => ({
  type: SUCCESS,
  data,
});

const errorMeals = (error) => ({
  type: ERROR,
  error,
});

const fetchMealsByCategory = (category) => (dispatch) => {
  dispatch(loadingMeals);
  const response = loadMeals(`${API.BASE_URL}/${API.FILTER_ENDPOINT}?c=${category}`);
  response
    .then((data) => dispatch(successMeals(data.meals)))
    .catch((error) => dispatch(errorMeals(error)));
};

export default fetchMealsByCategory;
