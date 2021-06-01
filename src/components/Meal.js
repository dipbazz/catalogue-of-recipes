import PropTypes from 'prop-types';

const Meal = ({ meal }) => (
  <>
    <img src={meal.strMealThumb} alt={meal.strMeal} />
    <p>
      id:
      {meal.idMeal}
    </p>
    <p>
      Meal:
      {meal.strMeal}
    </p>
    <br />
  </>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
