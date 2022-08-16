const API_URL = 'https://api.nasa.gov'
const API_KEY = '4odjcacHz7TjYrTwVc2T8OHmPUatRlbZhl0QIAGa'

export const getAPIData = async (dataTypeURL) => {
    const response = await fetch(`${API_URL}${dataTypeURL}?api_key=${API_KEY}`);
    return await response.json();
}
