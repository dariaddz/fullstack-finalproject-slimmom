import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelectors } from '../redux/login';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(loginSelectors.getIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  redirectTo: PropTypes.string,
};
