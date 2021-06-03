import {
  LOADING, ERROR, SUCCESS, IDLE,
} from '../actions/actionTypes';

const mealsReducer = (state = { meals: [], status: IDLE, error: null }, action) => {
  console.log(state);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        status: LOADING,
      };
    case ERROR:
      return {
        ...state,
        status: ERROR,
        error: action.error,
      };
    case SUCCESS:
      return {
        ...state,
        status: SUCCESS,
        meals: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export default mealsReducer;
