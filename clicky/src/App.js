import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Jumbotron from './components/Jumbotron';



class App extends Component {
  // state = {
  //   characters
  // };
  render() {
    return (
      <>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      </>
    )
  }
}



export default App;
