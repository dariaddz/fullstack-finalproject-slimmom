import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:3001/api/users';

const token = {
  set(currentToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logIn = createAsyncThunk('login/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/login', credentials);
    // console.log('loginoperation', data);
    token.set(data.token);
    toast.success('Ви успішно увійшли');
    console.log(data.data);
    return data.data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error('Помилка реєстрації.\nПеревірте введені дані.');
    }
    if (error.response.status === 500) {
      toast.error('Немає відповіді від сервера.');
    }
    return thunkAPI.rejectWithValue();
  }
});

const fetchCurrentUser = createAsyncThunk(
  'login/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.login.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/current');
      toast.success('Ваша сессія відновлена');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(
          'Ви не залогінелись, або час сессії вичерпано.\nБудь-ласка залогінтесь.');
      }
      if (error.response.status === 500) {
        toast.error('Немає відповіді від сервера.');
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const loginOperations = {
  logIn,
  fetchCurrentUser,
};
export default loginOperations;