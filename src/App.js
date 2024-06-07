import './App.css';
import Home from './myComponent/home';
import About from './myComponent/about';
import Book from './myComponent/BookDetails';
import AddtoCart from './myComponent/AddtoCart';
import 'react-notifications/lib/notifications.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React
 from 'react';


function App() {
  const [mode, setMode] = React.useState('light');
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode}/>} exact />
          <Route path="/about" element={<About mode={mode}/>} exact />
          <Route path="/addtocart" element={<AddtoCart mode={mode}/>} exact />
          <Route path="/Bestseller/:id" element={<Book mode={mode}/>} exact />
        </Routes>
      </Router>      
    </>
  );
}

export default App;
