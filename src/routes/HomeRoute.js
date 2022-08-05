import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

export function HomeRoute() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}
