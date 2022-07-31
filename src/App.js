import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import DashboardPage from './pages/dashboard';
import CategoriesPage from './pages/categories';
import CategoriesCreate from './pages/categories/create';
import CategoriesEdit from './pages/categories/edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/' element={<DashboardPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/create' element={<CategoriesCreate />} />
        <Route path='/categories/edit/:id' element={<CategoriesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
