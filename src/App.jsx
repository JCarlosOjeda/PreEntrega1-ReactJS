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

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<React.Fragment><Carousel /><ItemListContainer /></React.Fragment>} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailCointeiner />} />
          <Route path={"/destacadas"} element={<ItemListContainer />} />
          <Route path={"/*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
