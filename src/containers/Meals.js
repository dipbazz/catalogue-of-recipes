import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import * as actionsType from '../redux/actions/actionTypes';
import Meal from '../components/Meal';
import { fetchMealsByCategory } from '../redux/actions';

const Meals = ({ meals, dispatch }) => {
  useEffect(() => {
    dispatch(fetchMealsByCategory('beef'));
  }, []);

  console.log(meals.status);

  if (meals.status === actionsType.LOADING) {
    return <div>Loading ...</div>;
  }

  if (meals.status === actionsType.ERROR) {
    return (
      <div>
        Error:
        {meals.error}
      </div>
    );
  }

  return (
    <div>
      {meals.meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
    </div>
  );
};

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
});

export default connect(mapStateToProps)(Meals);
