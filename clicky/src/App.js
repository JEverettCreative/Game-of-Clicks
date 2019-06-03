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

  reorderHeadshots = id => {
    const characters = this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random()
    });

    this.setState({ characters });
  };


  render() {
    return (
      <>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <Wrapper>
      {this.state.characters.map(characters => (
        <Headshot
          reorderHeadshots = {this.reorderHeadshots}
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
