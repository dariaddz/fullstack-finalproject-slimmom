import axios from 'axios';
import { toast } from 'react-toastify';

import {
  dayInfoRequest,
  dayInfoSuccess,
  dayInfoError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  reset,
} from './day_action';
axios.defaults.baseURL = 'http://localhost:3001/api';

// Операция получения информации по определённому дню
export const getDay = (id, date) => async dispatch => {
  const info = { id, date };
  dispatch(dayInfoRequest());

  try {
    const response = await axios.get('/products', info);
    dispatch(dayInfoSuccess(response.data));
  } catch (error) {
    dispatch(dayInfoError(error.message));
  }
};

export const addProduct = (date, productId, weight) => async dispatch => {
  const product = { date, productId, weight };
  dispatch(addProductRequest());

  try {
    const { data } = await axios.post('/products', product);
    dispatch(addProductSuccess(data));
    toast.success('😋 Продукт успішно додано');
  } catch (error) {
    dispatch(addProductError(error.message));
    toast.error(error.message);
  }
};

export const deleteProduct = (dayId, eatenProductId) => async dispatch => {
  dispatch(deleteProductRequest());
  try {
    const { data } = await axios.delete(`/products/${eatenProductId}`, {
      data: { dayId: dayId, eatenProductId: eatenProductId },
    });
    dispatch(deleteProductSuccess(data));
    toast.info('👌 Продукт успішно видалено');
  } catch (error) {
    dispatch(deleteProductError(error.message));
    toast.error(error.message);
  }
};

export const resetDayInfo = () => dispatch => {
  dispatch(reset());
};
