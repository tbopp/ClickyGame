import React, { Component } from "react";
import Nav from "./components/Nav";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Header from "./components/Header";
import characters from "./characters.json";
import Footer from "./components/Footer";
import "./App.css";


// Shuffle (randomization) function of characters.
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    clicked: [],
    winLose: ""
  };

  // Initializes shuffle of cards upon loading of the componenet (the page)
  componentDidMount() {
    shuffleCards(characters);
  }

  // Event handler for clicking on card
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  // Function for keeping score until a max of 12 available cards are clicked.
  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      winLose: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    } else if (newScore === 12) {
      this.setState({
        winLose: "WooHoo!!"
      });
    }
    this.handleShuffle();
  };

  // Function to reset the game if a lose occures, resets score to zero.
  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      winLose: "D'OH!!",
      clicked: []
    });
    this.handleShuffle();
  };

  //shuffles the cards on page
  handleShuffle = () => {
    let shuffledCards = shuffleCards(characters);
    this.setState({
      characters: shuffledCards
    });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <div>
        <Nav 
        brand="Clicky Game" winLose={this.state.winLose} score={this.state.score} topScore={this.state.topScore} />
        <Header h1="Clicky Game!" h2="Click on an image to earn points, but don't click on any more than once!" />
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              removeCharacter={this.removeCharacter}
              id={character.id}
              key={character.id}
              image={character.image}
              handleClick={this.handleClick}
              handleScore={this.handleScore}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
            />
            ))}
        </Container>
        <Footer>
          Clicky Game!
        </Footer>
      </div>
    );
  }
}

export default App;
