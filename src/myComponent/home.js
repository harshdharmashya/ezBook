import React from 'react'
import Navbar from "./Navbar"
import Carousel from "./Carousel"
import CardSec from "./CardSec"
import BestSeller from "./BestSeller"
import Flashseller from './Flashseller';
import Macrobiotic from './Macrobiotic';
import Footer from './Footer';


import img1 from "../images/mb1.jpg"
import img2 from "../images/mb2.jpg"
import img3 from "../images/mb3.jpg"
import img4 from "../images/mb4.jpg"
import img5 from "../images/mb5.jpg"
import img6 from "../images/mb6.jpg"
import img7 from "../images/mb7.jpg"
import img8 from "../images/mb8.jpg"

function home(props) {
    const mode = props.mode
    const toggleMode = () => {
        if (mode === 'light') {
            props.setMode('dark');
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
        else {
            props.setMode('light');
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }
    }
    const BestSellerbooks = [
        {
            id : 1,
            image: img1,
            name: "The Little Mermaid",
            price: 1299,
            desc: "The Little Mermaid by Hans Christian Andersen is a fairytale about a mermaid who falls in love with a human.",
            type : 'Fiction'
        },
        {
            id : 2,
            image: img2,
            name: "SOUL",
            price: 1199,
            desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability.",
            type : 'Fiction'
        },
        {
            id : 3,
            image: img4,
            name: "Invisible Man",
            price: 1399,
            desc: "Invisible Man is a masterpiece about an unnamed narrator and his formative years in early 20th-century America.",
            type : 'Biography'
        },
        {
            id : 4,
            image: img5,
            name: "Jurassic Park",
            price: 1199,
            desc: "A cautionary tale about genetic engineering,  zoological park showcasing genetically recreated..",
            type : 'History'
        },
        {
            id : 5,
            image: img7,
            name: "I'll Find You",
            price: 1499,
            desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability.",
            type : 'Graphic design'
        },
        {
            id : 6,
            image: img8,
            name: "yeah",
            price: 1099,
            desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability.",
            type : 'Cateory'
        }
        
    ]


    const macrobioticBooks = [
        {
            id : 1,
            image: img1,
            name: "The Little Mermaid",
            price: 1299,
            desc: "The Little Mermaid by Hans Christian Andersen is a fairytale about a mermaid who falls in love with a human."
        },
        {
            id : 2,
            image: img2,
            name: "SOUL",
            price: 1199,
            desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability."
        },
        {
            id : 3,
            image: img3,
            name: "The Old You",
            price: 999,
            desc: "Lynn Naismith gave up the job she loved when she married Ed, the love of her life, but it was worth it for the happy.."
        },
        {
            id : 4,
            image: img4,
            name: "Invisible Man",
            price: 1399,
            desc: "Invisible Man is a masterpiece about an unnamed narrator and his formative years in early 20th-century America."
        },
        {
            id : 5,
            image: img5,
            name: "Jurassic Park",
            price: 1199,
            desc: "A cautionary tale about genetic engineering, it presents the collapse of a zoological park showcasing genetically recreated.."
        },
        {
            id : 6,
            image: img6,
            name: "I'll Find You",
            price: 299,
            desc: "An innocent father serving life for the murder of his own son receives evidence that his child may still be alive, and must break.."
        },
        {
            id : 7,
            image: img7,
            name: "I'll Find You",
            price: 1499,
            desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability."
        },
        {
            id : 8,
            image: img8,
            name: "SOUL",
            price: 1099,
            desc: "The Book of Soul delves into the spiritual alchemy of that transformation in all its mystery, difficulty, and inevitability."
        }
    ]
    return (
        <>
            <Navbar title="ezBook" mode={mode} toggleMode={() => toggleMode()} />
            <Carousel />
            <CardSec mode={mode} />
            <BestSeller mode={mode} BestSellerbooks={BestSellerbooks}/>
            <Flashseller mode={mode} />
            <Macrobiotic macrobioticData={macrobioticBooks} mode={mode} />
            <Footer mode={mode} />
        </>
    )
}

export default home