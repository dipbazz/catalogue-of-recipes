import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchMealById } from '../redux/actions';
import { ERROR, LOADING } from '../redux/actions/actionTypes';

const MealDetail = ({ meal, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMealById(id));
  }, []);

  if (meal.status === LOADING) {
    return <div>Loading ...</div>;
  }

  if (meal.status === ERROR) {
    return (
      <div>
        Error:
        {meal.error}
      </div>
    );
  }

  return (
    <>
      This is a meal detail
      {meal.meal.strMeal}
    </>
  );
};

MealDetail.propTypes = {
  meal: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meal: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    meal: state.meal,
  };
};

export default connect(mapStateToProps)(MealDetail);
