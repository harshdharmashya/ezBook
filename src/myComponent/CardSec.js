import React from 'react'
import "../CSS/CardSec.css"
import "../CSS/responsivemobile.css"
import img1 from "../images/book 1 new release.jpg"
import img2 from "../images/book 3 new release.jpeg"
import img3 from "../images/book 4 new release.jpg"
export default function CardSec(props) {
    return (
        <div className='container-fluid' >
            <div className='newRele'>
                <h2 className='title'>New Release</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio quis delectus fugiat repudiandae odit.</p>
                <div className="row">
                    <div className="cardsec col-md-4" style={{backgroundColor:props.mode==='dark'?'#333333':'white'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img1} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Name of Book</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                                    <h5>Rs.1200</h5>
                                    <p className="btn"><small typeof='button'>Add to cart</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardsec col-md-4" style={{backgroundColor:props.mode==='dark'?'#333333':'white'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img2} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Name of Book</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                                    <h5>Rs.1200</h5>
                                    <p className="btn"><small typeof='button'>Add to cart</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardsec col-md-4 " style={{backgroundColor:props.mode==='dark'?'#333333':'white'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img3} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
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
        </div>
    )
}
