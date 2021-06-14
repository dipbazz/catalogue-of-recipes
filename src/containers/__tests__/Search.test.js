import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Search from '../Search';

const mockStore = ConfigureMockStore([thunk]);
jest.mock('../../API/api');

let store;
beforeEach(() => {
  store = mockStore({});
});

test('should test for search snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('should test for search submit event', () => {
  const handleSearch = jest.fn();
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    </Provider>,
  );

  const form = container.querySelector('form');
  const { search } = form.elements;
  search.value = 'Burger';
  // fireEvent.submit(search);
  fireEvent.keyDown(search, { key: 'enter', keyCode: 13 })

  expect(handleSearch).toHaveBeenCalledTimes(1);
});
