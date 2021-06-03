import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Meal from '../components/Meal';
import fetchMealsByCategory from '../redux/actions';

const Meals = ({ meals, dispatch }) => {
  useEffect(() => {
    dispatch(fetchMealsByCategory('beef'));
  }, []);

  return (
    <div>
      {meals.meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
    </div>
  );
};

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
});

export default connect(mapStateToProps)(Meals);
