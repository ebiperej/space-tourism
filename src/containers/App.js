import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Crew from '../components/Crew';
import Destination from '../components/Destination';
import Technology from '../components/Technology';
import Passengers from "../components/Passengers";

function App() {
  return (
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/crew" element={<Crew />}/>
            <Route path="/destination" element={<Destination />}/>
            <Route path= "technology" element={<Technology />}/>
            <Route path="passengers" element={<Passengers />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
