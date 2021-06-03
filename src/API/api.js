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

export default loadMeals;
