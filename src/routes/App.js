import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Landingpage from "../components/landing/landing";
import Content from "../components/content/content"
import NavBar from "../container/navbar";
import Auth from "../components/auth/auth";
import data from "../assets/data";
import PrivateRoute from "../routes/guard/privateRoute";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path={"/"} exact component={Landingpage}  />
      {data.paths.map(path=>{
        return  <Route path={"/"+path}component={Content}  />
      })}
      <PrivateRoute path="/login" component={Auth}/>
    </div>
  );
}
export default App;
