
import './App.css';
import Navbar from "./myComponent/Navbar"
import Carousel from "./myComponent/Carousel"
import CardSec from "./myComponent/CardSec"
import BestSeller from "./myComponent/BestSeller"
import Flashseller from './myComponent/Flashseller';
import Macrobiotic from './myComponent/Macrobiotic';
import Footer from './myComponent/Footer';

function App() {
  return (
    <>
    <Navbar title = "ezBook"/>
    <Carousel/>
    <CardSec/>
    <BestSeller/>
    <Flashseller/>
    <Macrobiotic/>
    <Footer/>
    </>
  );
}

export default App;
