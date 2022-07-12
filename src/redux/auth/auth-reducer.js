import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
} from '../auth/auth-action';

const user = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.accessToken,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,

  [registerRequest]: () => false,
  [registerRequest]: () => false,
});
const isLogged = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
});

export default combineReducers({
  user,
  token,
  isLogged,
  error,
});
