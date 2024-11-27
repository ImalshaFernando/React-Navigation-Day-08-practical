import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<Aboutus/>}/>
            <Route path='/contact' element={<Contactus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
