import {
  LOADING, SUCCESS, ERROR,
} from './actionTypes';
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
  const response = loadMeals(category);
  response
    .then((data) => dispatch(successMeals(data.meals)))
    .catch(() => dispatch(errorMeals('Error while fetching data.')));
};

export default fetchMealsByCategory;
