import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  isNewUser: false,
  token: null,
  name: null,
  avatarURL: null,
  isOnTraining: false,
  isFetching: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewUser: state => {
      state.isNewUser = true;
    },
    refreshToken: (state, { payload }) => {
      state.token = payload;
    },
    setTrainingStatus: (state, { payload }) => {
      state.isOnTraining = payload;
    },
  },
  extraReducers: {
    [authOperations.register.pending]: state => {
      state.isFetching = true;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
      state.avatarURL = null;
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: state => {
      state.isFetching = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
