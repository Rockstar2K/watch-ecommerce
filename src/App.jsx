import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={ <h2>Site under construction</h2> }/>
          </Routes>
        </CartProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App

