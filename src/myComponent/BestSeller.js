import React, { useState } from 'react'
import "../CSS/Bestseller.css"
import "../CSS/responsivemobile.css"
import { Link } from "react-router-dom"

export default function BestSeller(props) {
  const Bestbooks = props.BestSellerbooks;
  
  // var True = true;
  // var False = false;
  // var isPresent = isPresent;
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);
  // const handleClick = (item) => {
  //   isPresent = False;
  //   cart.forEach((Bestbooks) => {
  //     if (item.id === Bestbooks.id)
  //       isPresent = true;
  //   })
  //   if (isPresent)
  //     return;
  //   setCart([...cart,item])
  // }
  return (
    <div>
      <div className='bestseller'>
        <h2 className='title'>Best Seller</h2>
        <hr />
        <div className='outerTab'>
          <ul>
            <li><button className='active' style={{ color: props.mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>All here</button></li>
            <li><button style={{ color: props.mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>Fictions</button></li>
            <li><button style={{ color: props.mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>Biography</button></li>
            <li><button style={{ color: props.mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>History</button></li>
            <li><button style={{ color: props.mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>Graphic Design</button></li>
            <li><button style={{ color: props.mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>Cateory</button></li>
          </ul>
        </div>
        <div className="row cardsinbest">
          {
            Bestbooks.map((dataB, i) => (
              <div className="col-md-3" key={i}>
                <div className="card cardbestseller" style={{ backgroundColor: props.mode === 'dark' ? '#31363a' : 'white' }}>
                  <img src={dataB?.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{dataB?.name}</h5>
                    <p className="card-text">{dataB?.desc}</p>
                    <h5>Rs.{dataB?.price}</h5>
                    <div className='buttonreadcart'>
                      <Link className="btn view" to={`/Bestseller/${dataB.id}`} state={dataB}><p ><small typeof='button'>View</small></p></Link>
                      <button className='btn btn1' onClick={() => props.handleClick(dataB)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Link to='' state={props.cart}>
        <button className='addcardicon' onClick={()=>props.setshow(false)}>
          <i className="fa-solid fa-cart-shopping"></i>
            <p className='cartcount'>{props.cart.length}</p>
        </button>
      </Link>
    </div>
  )
}
