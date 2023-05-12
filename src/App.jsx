import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div >
      <Header />
      <ItemListContainer greeting={"Gracias por Visitarnos"} />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
