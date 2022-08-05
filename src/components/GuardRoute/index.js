import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function GuestOnlyRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  console.log('children');
  console.log(children);
  if (!token) return <Navigate to='/login' replace={true} />;

  return children;
}
