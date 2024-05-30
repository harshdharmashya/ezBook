import React from 'react'
import "../CSS/Footer.css"
export default function Footer(props) {
    return (
        <div>
            <div className="kir">
                <div className="col-md-4 p-5">
                    <form action="">
                        <input className="m-2 border p-1 inpemail" type="text" placeholder='Enter Email' /><br />
                        <input className="m-2 border p-1 inpemail" type="text" placeholder='Enter Phone no.' /><br />
                        <input className="m-2 border p-1 inpemail height" type="text" placeholder='Enter your message' /> <br />
                        <button className='btn mx-5 my-3' type='submit'>Submit</button>
                    </form>
                </div>
                <div className="col-md-3 Books p-5">
                    <h3>Books</h3>
                    <li>Romantic</li>
                    <li>Sci-fi</li>
                    <li>Adventures</li>
                    <li>Religious</li>
                    <li>Fiction</li>
                    <li>Horror</li>
                </div>
                <div className="col-md-4 Books p-5">
                    <h3>Contact</h3>
                    <h4>(480)565-7878</h4>
                    <h4>shop no. 180 Allentown, New Mexico 56674</h4>
                    <h4>Tuesday-Friday:8am to 9pm</h4>
                    <h4>Saturday-Sunday:9am to 11pm</h4>
                    <h4>Closed Monday</h4>
                    <div className="social_icons kir">
                        <div><i className="fa-brands fa-facebook color text-white m-1"></i></div>
                        <div><i className="fa-brands fa-instagram text-white m-1"></i></div>
                        <div><i className="fa-brands fa-x-twitter text-white m-1"></i></div>
                        <div><i className="fa-brands fa-threads text-white m-1"></i></div>
                    </div >
                </div >
                        
            </div >
        </div >
            )
}
