import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authorized, children }) => {
  if (!authorized) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;