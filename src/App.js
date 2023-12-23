import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router

import Main from './ui-component/Main';
//import Navbar from './ui-component/Navbar';
import Work from './ui-component/Work';
import Home from './ui-component/Home';

function App() {
  return (
    <div>
      
      <Router> {/* Wrap Routes in Router */}
      <Home />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='Work'
            element={<Home />,<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
