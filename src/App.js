import React, { Component } from "react";
import Nav from "./components/Nav";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Header from "./components/Header";
import characters from "./characters.json";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score: 0,
    topScore: 0
  };

  removeCharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <div>
        <Nav brand="Clicky Game" score={this.state.score} topScore={this.state.topScore} />
        <Header h1="Clicky Game!" h2="Click on an image to earn points, but don't click on any more than once!" />
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              removeCharacter={this.removeCharacter}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
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
