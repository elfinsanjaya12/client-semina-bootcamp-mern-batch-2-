import { Route, Routes } from 'react-router-dom';

import Orders from '../pages/orders';

export function OrdersRoute() {
  return (
    <Routes>
      <Route path='/' element={<Orders />} />
    </Routes>
  );
}
