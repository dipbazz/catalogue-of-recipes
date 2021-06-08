import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import card from '../styles/card.css';

const cx = classNames.bind(card);

const Meal = ({ meal }) => (
  <div className={cx('card')}>
    <Link to={`/meal/${meal.idMeal}`} className={cx('card-link')}>
      <img className={cx('card-img')} src={meal.strMealThumb} alt={meal.strMeal} />
      <h3 className={cx('card-title')}>
        {meal.strMeal}
      </h3>
    </Link>
  </div>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
