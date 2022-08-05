import { Route, Routes } from 'react-router-dom';

import Categories from '../pages/categories';
import Create from '../pages/categories/create';

export function CategoriesRoute() {
  return (
    <Routes>
      <Route path='/' element={<Categories />} />
      <Route path='/create' element={<Create />} />
    </Routes>
  );
}
