import PropTypes from 'prop-types';

const Category = ({ category }) => (
  <>
    <img src={category.strCategoryThumb} alt={category.strCategory} />
    <p>
      id:
      {category.idCategory}
    </p>
    <p>
      Category:
      {category.strCategory}
    </p>
    <br />
  </>
);

Category.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Category;
