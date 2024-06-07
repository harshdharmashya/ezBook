import {React,useState} from 'react'
import "../CSS/bookDetails.css"
import "../CSS/responsivemobile.css"
import { useLocation,Link } from 'react-router-dom'

export default function BookDetails(props) {
    const location = useLocation();
    console.log(location);
    let currentData = location.state

    var True = true;
    var False = false;
    var isPresent = isPresent;
    const[show,setShow]=useState(true);
    const[cart,setCart] =useState([]);
    const handleClick = (item)=>{
        isPresent = False;
        cart.forEach((currentData)=>{
            if(item.id===currentData.id)
                isPresent =true;
        })
        if(isPresent)
            return;
        setCart([...cart,item])
    }
    return (
        <>
            <div className="container">
                <div className="left">
                    <img src={currentData.image} alt="" className="responsive-image" />
                </div>
                <div className="right">
                    <h1 className="">
                        {currentData.name}
                    </h1>
                    <p className="responsive-text">
                        {currentData.desc}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nesciunt error a illo optio provident quis dicta obcaecati porro totam deleniti numquam veritatis natus, illum labore aspernatur ullam ipsum corporis sequi? Non praesentium reprehenderit voluptates, culpa at atque repudiandae saepe.
                    </p>
                    <h3>
                        Rs.{currentData.price}
                    </h3>
                    <button className='btn' onClick={(item)=>handleClick()}>Add to Cart</button>
                </div>
            </div>
            <Link to='../AddtoCart'><button className='addcardicon'><i class="fa-solid fa-cart-shopping"></i><p className='cartcount'>{cart.length}</p></button></Link>
        </>
    )
}
