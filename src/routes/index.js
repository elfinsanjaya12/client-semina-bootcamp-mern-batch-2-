import { Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';

import Login from '../pages/signin';
import { HomeRoute } from './HomeRoute';
import { CategoriesRoute } from './CategoriesRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='login'
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route
        path='/*'
        element={
          <GuardRoute>
            <HomeRoute />
          </GuardRoute>
        }
      />
      <Route
        path='categories/*'
        element={
          <GuardRoute>
            <CategoriesRoute />
          </GuardRoute>
        }
      />
    </Routes>
  );
}
