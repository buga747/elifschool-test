import axios from 'axios';

const BASE_URL = 'http://localhost:3030/api/shops';

axios.defaults.baseURL = BASE_URL;

export async function fetchAllShops() {
  const response = await axios.get(`/`);
  return response.data;
}