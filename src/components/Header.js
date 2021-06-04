import { Link } from 'react-router-dom';
import Search from '../containers/Search';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>

    <Search />
  </nav>
);

export default Header;
