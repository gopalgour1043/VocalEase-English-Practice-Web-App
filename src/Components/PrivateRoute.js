import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCentralData } from '../Context/CentralData';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useCentralData(); 
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
