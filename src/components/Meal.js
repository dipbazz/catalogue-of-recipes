import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => (
  <div className="card">
    <Link to={`/meal/${meal.idMeal}`}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>
        {meal.strMeal}
      </p>
    </Link>
  </div>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
