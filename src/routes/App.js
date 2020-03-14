import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Landingpage from "../components/landing/landing";
import Content from "../components/content/content"
import NavBar from "../container/navbar";
import Auth from "../components/auth/auth";
import data from "../assets/data";
import PrivateRoute from "../routes/guard/privateRoute";
import CreateProfile from "../components/Profile/createProfile";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path={"/"} exact component={Landingpage}  />
      {data.paths.map(path=>{
        return  <Route path={"/"+path}component={Content}  />
      })}
      <PrivateRoute path="/login" component={Auth}/>
      <PrivateRoute path={"/create-profile"} exact component={ CreateProfile}  />
    </div>
  );
}
export default App;
