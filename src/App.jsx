import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Carousel from './components/Carousel';
import Error404 from './components/Error404';
//import ItemDetail from './components/ItemDetail';
import ItemDetailCointeiner from './components/ItemDetailCointeiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div >
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<React.Fragment><Carousel /><ItemListContainer /></React.Fragment>} />
            <Route path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailCointeiner />} />
            <Route path={"/destacadas"} element={<ItemListContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
