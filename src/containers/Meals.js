import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import * as actionsType from '../redux/actions/actionTypes';
import Meal from '../components/Meal';
import { fetchMealsByCategory } from '../redux/actions';

const Meals = ({ meals, dispatch }) => {
  useEffect(() => {
    if (meals.status === actionsType.IDLE_MEALS) {
      dispatch(fetchMealsByCategory('beef'));
    }
  }, []);

  if (meals.status === actionsType.LOADING_MEALS) {
    return <div>Loading ...</div>;
  }

  if (meals.status === actionsType.ERROR_MEALS) {
    return (
      <div>
        Error:
        {meals.error}
      </div>
    );
  }

  return (
    <div className="flex">
      {meals.meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
    </div>
  );
};

Meals.propTypes = {
  meals: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meals: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
});

export default connect(mapStateToProps)(Meals);
