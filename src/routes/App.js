import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Landingpage from "../components/landing/landing";
import NavBar from "../container/navbar";
import data from "../assets/data";

function App() {
  console.log(data.paths)
  return (
    <div className="App">
      <NavBar />
      {data.paths.map(path=>{
        return  <Route path={"/"+path} exact component={Landingpage} />
      })}
    </div>
  );
}
export default App;
