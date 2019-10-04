import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Headshot from "./components/Headshot";
import Score from "./components/Score";
import characters from "./characters.json";



class App extends Component {
  
    state = {
      characters,
      score: 0
    }; 

  reorderHeadshots = id => {
    let continueHappyPath = true;
    let score = this.state.score + 1;
    // Check if this image has been clicked
      // Else
    for (var i = 0; i < this.state.characters.length; i++) {
      if(this.state.characters[i].id === id && this.state.characters[i].clicked) {
         // If already clicked, end game
        // Reset score to zero
        score = 0;
        continueHappyPath = false;
        let characters = this.state.characters.map(item => {
          return {
            ...item,
            clicked: false
          };
        })
      }
    }
    
    // Update the clicked property of that component
    if(continueHappyPath) {
      let updatedCharacters = this.state.characters.map(item => {
        if (item.id === id) {
          item.clicked = true;
        }
        return item;
      });
    }
     
    let characters = this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random()
    });
    this.setState({ characters, score });
  };

  componentDidUpdate() {
    if(this.state.score === 12) {
      console.log("You won!");
    }
  }


  render() {
    return (
      <>
      <NavBar>
        <Score
        reorderHeadshots = {this.reorderHeadshots}
        score={this.state.score}
        />
      </NavBar>
      <Jumbotron></Jumbotron>
      <Wrapper>
      {this.state.characters.map(character => (
        <Headshot
          reorderHeadshots = {this.reorderHeadshots}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          clicked={character.clicked}
        />
      ))}
      </Wrapper>
      </>
    )
  }
}



export default App;
