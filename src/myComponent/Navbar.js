import React from "react";
import { Link } from "react-router-dom"
import "../CSS/Modal.css"
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Navbar(props) {

  let showNotifications=()=>{
    NotificationManager.success("Done")
  }
  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="About">About</Link>
              </li>
              {props.isAuthenticated ? 
              <li className="nav-item">
                <button className={`nav-link loginbtn`} style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'rgba(255, 255, 255, .55)',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}} onClick={() => props.logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </li>
               :
              <li className="nav-item">
                <button className={`nav-link loginbtn`} style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'rgba(255, 255, 255, .55)',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}} onClick={() => props.loginWithRedirect()} >Login</button>
              </li>
              }
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onChange={() => props.toggleMode()} type="checkbox" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?"Light":"Dark"}</label>
            </div>
          </div>
        </div>
      </nav>
          <NotificationContainer/>
    </div>
  )
}
