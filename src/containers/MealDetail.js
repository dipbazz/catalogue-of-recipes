import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchMealById } from '../redux/actions';
import * as actionsType from '../redux/actions/actionTypes';

const MealDetail = ({ meal: { status, meal, error }, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id !== meal.idMeal) {
      dispatch(fetchMealById(id));
    }
  }, []);

  if (status === actionsType.LOADING_MEAL) {
    return <div>Loading ...</div>;
  }

  if (status === actionsType.ERROR_MEAL) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const renderIngrediants = (meal) => {
    const ingrediants = [];
    for (let index = 1; index <= 20; index += 1) {
      const ingrediant = meal[`strIngredient${index}`];
      if (ingrediant) {
        const measure = meal[`strMeasure${index}`];
        const element = (
          <li key={index}>
            <span>
              {measure}
            </span>
            <span>-</span>
            <span>
              {ingrediant}
            </span>
          </li>
        );
        ingrediants.push(element);
      }
    }
    console.log(ingrediants);
    return ingrediants;
  };

  return (
    <div>
      <h3>{meal.strMeal}</h3>
      <div className="flex">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <ul>
          {renderIngrediants(meal)}
        </ul>
      </div>
    </div>
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

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default connect(mapStateToProps)(MealDetail);
