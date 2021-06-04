import { CHANGE_CATEGORY } from '../actions/actionTypes';

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default categoriesReducer;
