import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Photography from "./pages/Photography";
import ProVideo from "./pages/ProVideo";
import Lighting from "./pages/Lighting";
import Audio from "./pages/Audio";
import Drones from "./pages/Drones";
import Optics from "./pages/Optics";
import Other from "./pages/Other";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/pro-video" element={<ProVideo />} />
        <Route path="/lighting" element={<Lighting />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/drones" element={<Drones />} />
        <Route path="/optics" element={<Optics />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;
