import React from 'react'
import "../CSS/Flashseller.css"
import "../CSS/responsivemobile.css"
import img1 from "../images/Flash seller book 1.jpg"
import img2 from "../images/Flash seller book 2.jpg"
import img3 from "../images/Flash seller book 3.jpg"
export default function Flashseller() {
  return (
    <div>
      <div className="flashseller">
        <div className="row">
          <div className="col-md-6">
            <h2 className='title'>Flash Seller</h2>
            <hr />
            <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius qui debitis odit vel minima, hic assumenda illo architecto incidunt deleniti ipsam enim at! In, et assumenda? Corporis nobis enim excepturi!</p>
            <button className='viewbtn'>View all</button>
          </div>
          <div className="col-md-6 div">
            <div id="carouselExampleFade" className="carousel slide carousel-fade flashcarousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
