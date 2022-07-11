import axios from 'axios';
import { toast } from 'react-toastify';

import {
  addProductRequest,
  addProductSuccess,
  addProductError,
} from './day_action';
axios.defaults.baseURL = '';

export const addProduct = (date, productId, weight) => async dispatch => {
  const product = { date, productId, weight };
  dispatch(addProductRequest());

  try {
    const { data } = await axios.post('/day', product);
    dispatch(addProductSuccess(data));
    toast.success('Продукт додано');
  } catch (error) {
    dispatch(addProductError(error.message));
    toast.error(error.message);
  }
};
