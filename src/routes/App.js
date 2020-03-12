import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Landingpage from "../components/landing/landing";
import Content from "../components/content/content"
import NavBar from "../container/navbar";
import Auth from "../components/auth/auth";
import data from "../assets/data";
function App() {
  console.log(data.paths)
  return (
    <div className="App">
      <NavBar />
      <Route path={"/"} exact component={Landingpage}  />
      {data.paths.map(path=>{
        return  <Route path={"/"+path}component={Content}  />
      })}
      <Route path="/login" component={Auth}/>
    </div>
  );
}
export default App;
