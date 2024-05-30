import React from 'react'
import "../CSS/Macrobiotic.css"
// import img1 from "../images/book 1 new release.jpg"
// import img2 from "../images/book 3 new release.jpeg"
// import img3 from "../images/book 4 new release.jpg"
export default function Macrobiotic(props) {
    const books = props.macrobioticData
    return (
        <div>
            <div className='macro'>
                <h2 className='title'>Macrobiotic Library</h2>
                <hr />
                <div className="row cardsinmacro">
                {
                    books.map((data, i) => (
                                <div className="col-md-3"   key={i}>
                                    <div className="card cardbestseller" style={{backgroundColor:props.mode==='dark'?'#333333':'white'}}>
                                        <img src={data?.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{data?.name}</h4>
                                            <p className="card-text">{data?.desc}</p>
                                            <h5>Rs.{data?.price}</h5>
                                            <p className="btn btn-center"><small typeof='button'>Add to cart</small></p>
                                        </div>
                                    </div>
                                </div>
                    )
                    )
                }
                <hr />
                </div>

                {/* <div className="col-md-3">
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
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name of Book</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sapiente.</p>
                                <h5>Rs.1200</h5>
                                <p className="btn"><small typeof='button'>Add to cart</small></p>
                            </div>
                        </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}
