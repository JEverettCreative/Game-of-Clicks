import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Headshot from "./components/Headshot";
import Score from "./components/Score";
import characters from "./characters.json";



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      characters,
      score: 0
    };
  }

  reorderHeadshots = id => {
    const characters = this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random()
    });

    if(!this.state.clicked) {
      this.setState(prevState => ({
        clicked: !prevState.clicked
      }));
      this.setState({ score: this.state.score + 1 });
      this.setState({ characters });
      console.log(this.state.score);
      console.log(this.state.clicked);
    } 
    if (this.state.clicked) {
      this.setState(prevState => ({
        clicked: !prevState.clicked
      }));
      // this.setState({ score: this.state.score - 1 })
      console.log(this.state.clicked);
    }
    
    this.setState({ characters });
  };


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
      {this.state.characters.map(characters => (
        <Headshot
          reorderHeadshots = {this.reorderHeadshots}
          id={characters.id}
          key={characters.id}
          name={characters.name}
          image={characters.image}
          clicked={characters.clicked}
        />
      ))}
      </Wrapper>
      </>
    )
  }
}



export default App;
