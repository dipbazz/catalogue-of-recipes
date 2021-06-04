import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => (
  <div className="card">
    <Link to={`/meals/${category.strCategory}`}>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <p>
        {category.strCategory}
      </p>
    </Link>
  </div>
);
Category.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Category;
