import {React,useState} from 'react'
import "../CSS/bookDetails.css"
import "../CSS/responsivemobile.css"
import { useLocation } from 'react-router-dom'

export default function BookDetails(props) {
    const location = useLocation();

    let currentData = location.state

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
                    <h3>Summary..</h3>
                    <p  className="responsive-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi libero similique labore, repellat dolor nemo facere, asperiores quia praesentium, tempore dolores veniam maxime quas ducimus. Animi beatae ipsum sequi, iusto neque reprehenderit. Ab totam, iusto exercitationem voluptates vel sint rem beatae a labore autem repudiandae ex porro corporis, natus voluptatibus?</p>
                </div>
            </div>
        </>
    )
}
