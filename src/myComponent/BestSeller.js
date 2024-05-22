import React from 'react'
import "../CSS/Bestseller.css"
import "../CSS/responsivemobile.css"
import img1 from "../images/book 1 new release.jpg"
import img2 from "../images/book 3 new release.jpeg"
import img3 from "../images/book 4 new release.jpg"

export default function BestSeller() {
  return (
    <div>
      <div className='bestseller'>
        <h2 className='title'>Best Seller</h2>
        <hr />
        <div className="row">
          <div className="col-md-1 active">All here</div>
          <div className="col-md-1 active">Fictions</div>
          <div className="col-md-1 active">Biography</div>
          <div className="col-md-1 active">History</div>
          <div className="col-md-2 active">Graphic Design</div>
          <div className="col-md-4 active">All Categories</div>
        </div>
        <div className="row cardsinbest">
          <div className="col-md-3">
            <div className="card cardbestseller">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name of Book</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                <h5>Rs.1200</h5>
                <p className="btn"><small typeof='button'>Add to cart</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card cardbestseller">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name of Book</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                <h5>Rs.1200</h5>
                <p className="btn"><small typeof='button'>Add to cart</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card cardbestseller">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name of Book</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                <h5>Rs.1200</h5>
                <p className="btn"><small typeof='button'>Add to cart</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card cardbestseller">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name of Book</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                <h5>Rs.1200</h5>
                <p className="btn"><small typeof='button'>Add to cart</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
