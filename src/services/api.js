import axios from 'axios';

const fetchCart = () => {
  return axios.get('/');
};

export {
  fetchCart
}
