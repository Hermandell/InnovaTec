import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? <Route {...props} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
