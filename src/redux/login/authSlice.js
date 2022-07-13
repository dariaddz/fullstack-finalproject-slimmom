import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const registerAndLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const resetToInitialState = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      registerAndLogin(state, action);
    },
    [authOperations.logIn.fulfilled](state, action) {
      registerAndLogin(state, action);
    },
    [authOperations.logIn.rejected](state) {
      resetToInitialState(state);
    },

    [authOperations.logOut.fulfilled](state) {
      resetToInitialState(state);
    },
    [authOperations.logOut.rejected](state) {
      resetToInitialState(state);
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      resetToInitialState(state);
    },
  },
});

export default authSlice.reducer;
