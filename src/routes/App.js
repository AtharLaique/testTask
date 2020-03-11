import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import Header from '../components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <Header/>
     <Route path='/' />
    </div>
  );
}

export default App;