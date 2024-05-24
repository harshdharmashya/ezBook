
import './App.css';
import Navbar from "./myComponent/Navbar"
import Carousel from "./myComponent/Carousel"
import CardSec from "./myComponent/CardSec"
import BestSeller from "./myComponent/BestSeller"
import Flashseller from './myComponent/Flashseller';
import Macrobiotic from './myComponent/Macrobiotic';
import Footer from './myComponent/Footer';
import img1 from "./images/mb1.jpg"
import img2 from "./images/mb2.jpg"
import img3 from "./images/mb3.jpg"
import img4 from "./images/mb4.jpg"
import img5 from "./images/mb5.jpg"
import img6 from "./images/mb6.jpg"
import img7 from "./images/mb7.jpg"
import img8 from "./images/mb8.jpg"

function App() {
  const macrobioticBooks = [
    {
      image: img1,
      name: "The Little Mermaid",
      price: 1299,
      desc: "The Little Mermaid by Hans Christian Andersen is a fairytale about a mermaid who falls in love with a human."
    },
    {
      image: img2,
      name: "SOUL",
      price: 1199,
      desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability."
    },
    {
      image: img3,
      name: "The Old You",
      price: 999,
      desc: "Lynn Naismith gave up the job she loved when she married Ed, the love of her life, but it was worth it for the happy.."
    },
    {
      image: img4,
      name: "Invisible Man",
      price: 1399,
      desc: "Invisible Man is a masterpiece about an unnamed narrator and his formative years in early 20th-century America."
    },
    {
      image: img5,
      name: "Jurassic Park",
      price: 1199,
      desc: "A cautionary tale about genetic engineering, it presents the collapse of a zoological park showcasing genetically recreated.."
    },
    {
      image: img6,
      name: "I'll Find You",
      price: 299,
      desc: "An innocent father serving life for the murder of his own son receives evidence that his child may still be alive, and must break.."
    },
    {
      image: img7,
      name: "I'll Find You",
      price: 1499,
      desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability."
    },
    {
      image: img8,
      name: "SOUL",
      price: 1099,
      desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability."
    }
  ]
  return (
    <>
      <Navbar title="ezBook" />
      <Carousel/>
      <CardSec />
      <BestSeller />
      <Flashseller />
      <Macrobiotic macrobioticData={macrobioticBooks}/>
      <Footer />
    </>
  );
}

export default App;
