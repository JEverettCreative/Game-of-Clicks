import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Headshot from "./components/Headshot";
import characters from "./characters.json";



class App extends Component {
  state = {
    characters
  };


  render() {
    return (
      <>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <Wrapper>
      {this.state.characters.map(characters => (
        <Headshot
          id={characters.id}
          key={characters.id}
          name={characters.name}
          image={characters.image}
        />
      ))}
      </Wrapper>
      </>
    )
  }
}



export default App;
