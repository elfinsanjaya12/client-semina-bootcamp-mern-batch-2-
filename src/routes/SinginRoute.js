import { Route, Routes } from 'react-router-dom';

import Singin from '../pages/signin';

export function LoginRoute() {
  return (
    <Routes>
      <Route path='/login' element={<Singin />} />
    </Routes>
  );
}
