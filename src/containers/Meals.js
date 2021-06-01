import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';

const Meals = ({ meals }) => (
  <div>
    {meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
  </div>
);

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
});

export default connect(mapStateToProps)(Meals);
