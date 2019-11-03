import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Headshot from "./components/Headshot";
import Score from "./components/Score";
import characters from "./characters.json";
import victoryMusic from "./GoT_Victory.mp3";
import ReactModal from "react-modal";
ReactModal.setAppElement("#modal");

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#d4af37',
    height                : '200px',
    width                 : '300px',
    border                : '2px solid black',
    textAlign             : 'center'
  },
  button : {
    backgroundColor       : '#ddd',
    marginTop             : '40px',
    borderRadius          : '.25rem',
    border                : '1px solid black'
  }
};

class App extends Component {
  
    state = {
      characters,
      score: 0,
      showModal: false
    }; 
    

  reorderHeadshots = id => {
    let continueHappyPath = true;
    let score = this.state.score + 1;
    // Check if this image has been clicked
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
  this.myRef = React.createRef();
  // Lowering win threshold for testing
  if(this.state.score === 3 && this.state.showModal === false) {
    this.handleOpenModal();
    // Play music cue for victory
    this.player.src = victoryMusic;
    this.player.play();
  }
}

  // Modal-related functionality
handleOpenModal = () => {
  this.setState({ showModal: true });
}

handleCloseModal = () => {
  // Reset all characters to clicked false for a new game
  let characters = this.state.characters.map(item => {
    return {
      ...item,
      clicked: false
    };
  })
    this.setState({ showModal: false, score: 0, characters });
    // If it's still running, end music
    this.player.pause();
};


  render() {
    return (
      <>
      <NavBar>
        <audio ref={ref => this.player = ref} />
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
      <ReactModal 
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
            contentLabel="Victory Modal"
            >
            <h3>You Won!</h3>
            <button 
              onClick={this.handleCloseModal}
              style={customStyles.button}>
              New Game
            </button>
        </ReactModal>   
      </>
    )
  }
}



export default App;
