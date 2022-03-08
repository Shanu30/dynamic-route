//import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Component/Products';
import { Link } from 'react-router-dom';
import { ProductDetail } from './Component/ProductDetail';

function App() {
  return (
    <div className="App">
      <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
