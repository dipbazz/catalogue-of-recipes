import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MealDetail = ({ meal }) => {
  const { id } = useParams();

  return (
    <>
      This is a meal detail
      {id}
      {meal.strMeal}
    </>
  );
};

MealDetail.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    meal: state.meal,
  };
};

export default connect(mapStateToProps)(MealDetail);
