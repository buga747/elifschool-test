import axios from 'axios';

const BASE_URL = window.location.origin.includes('local')
  ? 'http://localhost:3030/api/shops/'
  : 'https://delivery-shop-rfy2.onrender.com/api/shops/';

axios.defaults.baseURL = BASE_URL;

axios.defaults.baseURL = BASE_URL;

export async function fetchAllShops() {
  const response = await axios.get(`/`);
  return response.data;
}

export async function addOrder(order) {
  const { data } = await axios.post('/orders', order);
  return data;
}
