import { Provider } from 'react-redux';
import CreateProductForm from './components/CreateProductForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import Cart from './components/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/CreateProduct" element={<CreateProductForm />} />
          <Route path="/WatchPage" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer />
      </Provider>
    </Router>
  );
}

export default App;
