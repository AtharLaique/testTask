import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Landingpage from "../components/landing/landing";
import NavBar from "../container/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" exact component={Landingpage} />
    </div>
  );
}

export default App;
