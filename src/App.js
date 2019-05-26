import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Canvas from "./Components/Canvas";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Canvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
