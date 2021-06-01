import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import Categories from './containers/Categories';
import MealDetail from './containers/MealDetail';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/meal/:id" component={MealDetail} exact />
      <Route path="/categories" component={Categories} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
