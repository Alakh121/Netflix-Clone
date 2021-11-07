import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "../ContextApi/AuthContext";

let PublicRoute = ({ children, ...rest }) => {
  let USER = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props => {
        return USER ? <Redirect to="/profile" {...props} /> : children;
      }}
    />
  );
};

export default PublicRoute;
