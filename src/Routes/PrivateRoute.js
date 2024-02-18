import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <h1 className="text-5xl">Loading</h1>;

  if (user) return children;
  else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
}

export default PrivateRoute;
