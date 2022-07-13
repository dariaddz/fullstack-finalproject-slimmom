const getIsLoggedIn = state => state.login.isLoggedIn;

const getUsername = state => state.login.user.name;

const getIsFetchingCurrent = state => state.login.isFetchingCurrentUser;

const loginSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default loginSelectors;
