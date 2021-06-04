import API from '../config/config';

const loadMeals = async (category) => {
  console.log('fetching data ...');
  const url = `${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=${category}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

const loadMeal = async (id) => {
  console.log('fetching meal data ...');
  const url = `${API.BASE_URL}/${API.LOOKUP_ENDPOINT}/?i=${id}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }

  throw Error(404);
};

export { loadMeals, loadMeal };
