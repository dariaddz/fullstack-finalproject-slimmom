import axios from 'axios';
import { toast } from 'react-toastify';
// import { PersistGate } from 'redux-persist/integration/react';

import { registerRequest, registerSuccess, registerError } from './auth-action';

axios.defaults.baseURL = '';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = payload => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/signup', payload);
    token.set(response.data.accessToken);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerError(err.message));
    toast.error(err.message);
  }
};
