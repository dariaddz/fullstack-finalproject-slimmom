import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelectors } from '../redux/login';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component,
}) {
  const isLoggedIn = useSelector(loginSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return !shouldRedirect ? component : <Navigate to={redirectTo} />;
}

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};
