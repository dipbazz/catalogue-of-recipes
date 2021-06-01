import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => (
  <>
    <Link to={`/meal/${meal.idMeal}`}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>
        id:
        {meal.idMeal}
      </p>
      <p>
        Meal:
        {meal.strMeal}
      </p>
    </Link>
    <br />
  </>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
