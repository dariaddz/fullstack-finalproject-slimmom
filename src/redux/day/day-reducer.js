import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addProductRequest,
  addProductSuccess,
  addProductError,
} from './day_action';

const initial = { daySummary: {}, _id: '', eatenProducts: [], date: '' };

const dayInfo = createReducer(initial, {
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    eatenProducts: payload.eatenProducts,
    daySummary: payload.daySummary,
  }),
});

const error = createReducer(null, {
  [addProductError]: (_, { payload }) => payload,

  [addProductRequest]: () => null,
  [addProductSuccess]: () => null,
});

export default combineReducers({
  dayInfo,
  error,
});
