import { createSlice } from '@reduxjs/toolkit';
import loginOperations from './LoginOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const resetToInitialState = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [loginOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginOperations.logIn.rejected](state) {
      resetToInitialState(state);
    },
    [loginOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [loginOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [loginOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      resetToInitialState(state);
    },
  },
});

export default loginSlice.reducer;
