import { Route, Routes } from 'react-router-dom';

import Events from '../pages/events';
import Create from '../pages/events/create';
import Edit from '../pages/events/edit';

export function EventsRoute() {
  return (
    <Routes>
      <Route path='/' element={<Events />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:eventId' element={<Edit />} />
    </Routes>
  );
}
