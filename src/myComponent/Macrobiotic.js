import React from 'react'
import "../CSS/Macrobiotic.css"
import "../CSS/responsivemobile.css"
import { Link } from 'react-router-dom'
export default function Macrobiotic(props) {
    const macbooks = props.macrobioticData
    return (
        <div>
            <div className='macro'>
                <h2 className='title'>Macrobiotic Library</h2>
                <hr />
                <div className="row cardsinmacro">
                {
                    macbooks.map((data, i) => (
                                <div className="col-md-3"   key={i}>
                                    <div className="card cardbestseller" style={{backgroundColor:props.mode==='dark'?'#333333':'white'}}>
                                        <img src={data?.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{data?.name}</h4>
                                            <p className="card-text">{data?.desc}</p>
                                            <h5>Rs.{data?.price}</h5>
                                            <Link to={`/Bestseller/${data.id}`} state={data}><p className="btn"><small typeof='button'>Read more</small></p></Link>
                                        </div>
                                    </div>
                                </div>
                    ))
                }
                <hr />
                </div>
            </div>
        </div>
    )
}
