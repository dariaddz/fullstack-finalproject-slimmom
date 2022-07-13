const getUserName = state => state.auth.name;
const getUserAvatar = state => state.auth.avatarURL;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const authSelectors = {
  getUserName,
  getUserAvatar,
  getIsLoggedIn,
};

export default authSelectors;
