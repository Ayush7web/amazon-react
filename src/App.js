// import logo from './logo.svg';
import Navbar from './component/Navbar/navbar';
import './App.css';
import HomeScreen from './Screen/HomeScreen/homescreen';
import { Routes,Route } from 'react-router-dom';
import Products from './Screen/Products/products';
import Cart from './Screen/Cart/cart';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
