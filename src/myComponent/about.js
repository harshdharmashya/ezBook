import React from 'react'
import "../CSS/about.css"
import "../CSS/responsivemobile.css"
import img1 from "../images/author.png"
import { Link } from "react-router-dom"

export default function about(props) {
  return (
    <div>
    <section class="about-harsh-and-albatross" style={{backgroundColor:props.mode==='dark'?'#333333':'rgb(233, 230, 230)'}}>
        <div class="responsive-text">
            <h1 class="heading">ABOUT ezBook</h1>
            <p class="paragraph"><Link className="nav-link" aria-current="page" to="/">Home</Link></p>
        </div>
    </section>
    <section class="image-who-we-are">
        <div class="container row">
            <div class="image-container col-md-6">
                <img src={img1} alt="Image Description"/>
                <p class="paragraph">All Books › <a href="">main page</a></p>

            </div>
            <div class="text-container col-md-6">
                <strong >What is ezBook?</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, cupiditate veritatis eligendi doloremque quas sint?  soluta architecto optio laborum expedita tempore quasi. Eius, sit numquam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, cupiditate veritatis  Iste neque illo officiis soluta architecto optio laborum expedita tempore quasi. Eius, sit numquam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, cupiditate veritatis eligendi doloremque quas sint? a tempore quasi. Eius, sit numquam?</p>
            </div>
        </div>
    </section>
        <hr />
    <section class="about-albatross">
        <div>
            <h1 class="heading responsive-text">About ezBook</h1>
            <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adiing elit. Eaque voluptas aliquam rem, voluptatum, maiores vitae at expedita eius quaerat debitis exercitationem dolorem officiis corrdoloque pariatur, sint suscipit! Modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum aut necessitatibus fugiat error temporibus mollitia. Accusantium velit facilis impedit voluptatem dolor, dolorum aperiam illo totam illum? Ratione, ipsum nam?</p>
            <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptas aliquam rem, voluptatum, maiores vitae at expedita eius quaerat debitis exercitationem dolorem officiis corrupti ea doloremque pariatur, sint suscipit! Modi.</p>
        </div>
    </section>
    </div>
  )
}
