import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(currentToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      toast.success('The user has been created.', { duration: 4000 });
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Error creating user.\nThis email is already in use.', {
          duration: 4000,
        });
      }
      if (error.response.status === 500) {
        toast.error('No server response.', { duration: 4000 });
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('You have logged in successfully', { duration: 4000 });
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error('Registration error.\nCheck the entered data.', {
        duration: 4000,
      });
    }
    if (error.response.status === 500) {
      toast.error('No server response.', { duration: 4000 });
    }
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('Your session is closed', { duration: 4000 });
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('User authentication error', { duration: 4000 });
    }
    if (error.response.status === 500) {
      toast.error('No server response.', { duration: 4000 });
    }
    return;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      toast.success('Your session has been restored', { duration: 4000 });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(
          'You are not logged in or your session has timed out.\nPlease login.',
          { duration: 4000 }
        );
      }
      if (error.response.status === 500) {
        toast.error('No server response.', { duration: 4000 });
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
