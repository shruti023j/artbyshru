import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import { auth } from "./firebase";
import './App.css';
import './mediaquery.css';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || user.email);
      } else {
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Navbar name={userName} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/artgallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
