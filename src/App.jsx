import Navbar from './components/layouts/navbar';
import '@/css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Footer from './components/layouts/footer';
import men_banner from './assets/banner_men.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';
import LoginSignup from './pages/loginSignup';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path="/women" element={<ShopCategory banner={women_banner}  category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>   
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
