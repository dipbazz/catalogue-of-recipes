import * as actionsType from '../actions/actionTypes';

const mealReducer = (state = { meal: {}, status: actionsType.IDLE, error: null }, action) => {
  switch (action.type) {
    case actionsType.LOADING:
      return {
        ...state,
        status: actionsType.LOADING,
      };
    case actionsType.ERROR:
      return {
        ...state,
        status: actionsType.ERROR,
        error: action.error,
      };
    case actionsType.SUCCESS:
      return {
        ...state,
        status: actionsType.SUCCESS,
        meal: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export default mealReducer;
