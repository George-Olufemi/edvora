import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from "./appbar/Appbar";
import NearestRides from './pages/NearestRides';
import UpcomingRides from './pages/UpcomingRides';
import PastRides from './pages/PastRides';

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<NearestRides />} />
        <Route path="/upcoming-rides" element={<UpcomingRides />} />
        <Route path="/past-rides" element={<PastRides />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;