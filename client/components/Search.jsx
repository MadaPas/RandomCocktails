/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-restricted-globals */
import React from "react";

import Cocktails from "./Cocktails";

const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

class Search extends React.Component {
  state = {
    query: "",
    drinks: [],
    cocktail: null,
  };

  updateQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  searchCocktails = () => {
    fetch(`${apiUrl}${this.state.query}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.drinks.length > 0) {
          const cocktail = json.drinks[0];
          this.setState({ cocktail: cocktail, drinks: json.drinks });
        }
      })
      .catch((error) => console.log(error.message));
  };

  handleKeyPress = () => {
    if (event.key === "Enter") {
      this.searchCocktails();
    }
  };

  randomCocktail = () => {};

  render() {
    return (
      <div className="searchContainer">
        <h1>{`It's beggining to look a lot like your favorite cocktail!`}</h1>
        <h2>{`Give the order, please!`}</h2>
        <div className="search">
          <input
            className="input"
            onKeyPress={this.handleKeyPress}
            onChange={this.updateQuery}
          />
          <br></br>
          <button className="button" onClick={this.searchCocktails}>
            Press for magic
          </button>
        </div>
        <div className="random">
          <button onClick={this.randomCocktail}>Or.. Be a risk taker</button>
        </div>
        <Cocktails cocktail={this.state.cocktail} drinks={this.state.drinks} />
      </div>
    );
  }
}

export default Search;
