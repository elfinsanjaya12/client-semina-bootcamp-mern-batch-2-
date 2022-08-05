import { Route, Routes } from 'react-router-dom';

import Categories from '../pages/categories';
import Create from '../pages/categories/create';
import Edit from '../pages/categories/edit';

export function CategoriesRoute() {
  return (
    <Routes>
      <Route path='/' element={<Categories />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:categoryId' element={<Edit />} />
    </Routes>
  );
}
