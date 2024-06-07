import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/Carasol book 1.jpg'
import img2 from '../images/Carasol book 2.jpg'
import img3 from '../images/book 4 new release.jpg'
import "../CSS/Carasole.css"
import "../CSS/responsivemobile.css"

export default function Carousel(props) {
  return (
    <>
      <div className='bgimg'>
        <div className="col-md-6">
          <h2 className='headline'><strong>S</strong>TART YOUR READING <span>ADVENTURE</span> INVEST IN BOOK TODAY</h2>
          <p className='loremline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam fugiat, laboriosam vel dolor nam illum similique neque ullam animi possimus ex.</p>
          <form className="d-flex">
            <input className="form-control mx-4 search" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
        <div id="carouselExampleControls col-md-6" className="carousel1st slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 imgcar" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 imgcar" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100 imgcar" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
