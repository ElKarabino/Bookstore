import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookDetailsPage } from './pages/BookDetailsPage/BookDetailsPage';
import { CartPage } from './pages/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BooksPage />} />
        <Route path='/books/:isbn13' element={<BookDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
