import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

// Have not created these pages yet
// import Routes from './pages/Routes';
// import Events from './pages/Events';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*  I haven't done it yet*/}
            {/* <Route path="/routes" element={<Routes />} /> */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;