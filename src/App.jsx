import Navbar from './components/layouts/navbar';
import '@/css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Footer from './components/layouts/footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men"/>} />
          <Route path="/women" element={<ShopCategory  category="women"/>} />
          <Route path="/kids" element={<ShopCategory  category="kids"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>   
          <Route path="/cart" element={<cart />} />
          <Route path="/login" element={<loginSignup />} />
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
