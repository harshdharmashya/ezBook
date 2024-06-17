import './App.css';
import Home from './myComponent/Home';
import About from './myComponent/about';
import Book from './myComponent/BookDetails';
import 'react-notifications/lib/notifications.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  
  const [mode, setMode] = useState('light');
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  // console.log(process.env.REACT_APP_EZBOOK_CODE)
  return (
    <>
      
          <Router>
            <Routes>
              <Route path="/" element={<Home mode={mode} setMode={setMode} loginWithRedirect={loginWithRedirect} logout={logout} isAuthenticated={isAuthenticated} user={user}/>} exact />
              <Route path="/about" element={<About mode={mode} />} exact />
              <Route path="/Bestseller/:id" element={<Book mode={mode} />} exact />
            </Routes>
          </Router> 
    </>
  );
}

export default App;
