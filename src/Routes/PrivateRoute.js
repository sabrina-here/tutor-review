import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return <span className="loading loading-spinner text-secondary"></span>;

  if (user) return children;
  else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
}

export default PrivateRoute;
