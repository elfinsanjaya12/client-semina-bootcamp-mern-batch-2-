import { Route, Routes } from 'react-router-dom';

import Events from '../pages/events';
import Create from '../pages/categories/create';
import Edit from '../pages/categories/edit';

export function EventsRoute() {
  return (
    <Routes>
      <Route path='/' element={<Events />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:categoryId' element={<Edit />} />
    </Routes>
  );
}
