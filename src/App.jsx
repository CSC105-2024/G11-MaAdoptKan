import React, { useRef } from 'react';
import { Outlet } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from './assets/Navbar';

function App() {

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
