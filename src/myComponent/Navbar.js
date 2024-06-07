import React from "react";
import { Link } from "react-router-dom"
import "../CSS/Modal.css"
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Navbar(props) {
  const [modal, setmodelStatus] = React.useState(false);
  let showNotifications=()=>{
    NotificationManager.success("Done")
  }
  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
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
              <li className="nav-item">
                <button className={`nav-link loginbtn`} style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'rgba(255, 255, 255, .55)',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}} onClick={() => setmodelStatus(!modal)}>Login</button>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onChange={() => props.toggleMode()} type="checkbox" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
          </div>
        </div>
      </nav>
      <div className={`modaloverlap ${modal ? 'modaloverShow' : ''}`}></div>
      <div className={`modalDiv ${modal ? 'modeldivShow' : ''}`} style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'white',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}}>
        <h3>Login</h3>
        <button className="cross" style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'rgba(255, 255, 255, .55)',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}} onClick={() => setmodelStatus(!modal)}>&#10006;</button>
        <form action="" className="loginForm">
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <input type="text" placeholder="Your Name" />
          <input type="password" placeholder="Password" /> <br />
          <div className="linkmanage">
            <button  style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'rgba(255, 255, 255, .55)',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}}><Link className="loginlink" to=''>Forgot Password</Link></button>
            <button style={{color:props.mode==='light'?'rgba(0,0,0,.55)':'rgba(255, 255, 255, .55)',backgroundColor:props.mode==='light'?'#f8f9fa':'#212529'}}><Link className="loginlink" to=''>Sign up</Link></button>
          </div>
          <button className="btn" onClick={showNotifications}>Submit</button>
        </form>
      </div>
          <NotificationContainer/>
    </div>
  )
}
