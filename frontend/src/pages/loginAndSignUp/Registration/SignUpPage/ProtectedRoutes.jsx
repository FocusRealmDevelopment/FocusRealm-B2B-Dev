import  { Fragment } from "react";
import { useSelector } from "react-redux";
import {  Route } from "react-router-dom";
import {Link} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({  component: Component, ...rest }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Link to="/login" />;
            }

            

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;