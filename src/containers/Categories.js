import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/Category';

const Categories = ({ categories }) => (
  <div>
    {categories.map((category) => <Category key={category.idCategory} category={category} />)}
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
