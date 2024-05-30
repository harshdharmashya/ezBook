import './App.css';
import Home from './myComponent/home';
import About from './myComponent/about';
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
        </Routes>
      </Router>      
    </>
  );
}

export default App;
