import React, { Component } from 'react';
import Header from '../components/navbar/navbar';
class NavBar extends Component {
    test=()=>{
      console.log("Test is called")
    }
    render(){
        return (
            
               <Header click={this.test}/>
        )
    }
}
export default NavBar;