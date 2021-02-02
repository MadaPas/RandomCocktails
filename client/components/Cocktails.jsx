/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import request from "superagent";

const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";
const cocktail = "mojito";

const imgStyle = {
  width: "280px",
  marginRight: "15px",
};
class Cocktails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      ingredients: [],
      instructions: "",
      glass: "",
    };
  }

  componentDidMount() {
    request
      .get(apiUrl)
      .query({ s: cocktail })
      .then((res) => {
        // console.log(res.body)
        const x = res.body.drinks[0];
        const { strDrink, strInstructions, strDrinkThumb } = x;
        const ingredients = [
          [x.strIngredient1, x.strMeasure1],
          [x.strIngredient2, x.strMeasure2],
          [x.strIngredient3, x.strMeasure3],
          [x.strIngredient4, x.strMeasure4],
          [x.strIngredient5, x.strMeasure5],
          [x.strIngredient6, x.strMeasure6],
          [x.strIngredient7, x.strMeasure7],
          [x.strIngredient8, x.strMeasure8],
          [x.strIngredient9, x.strMeasure9],
          [x.strIngredient10, x.strMeasure10],
          [x.strIngredient11, x.strMeasure11],
          [x.strIngredient12, x.strMeasure12],
          [x.strIngredient13, x.strMeasure13],
          [x.strIngredient14, x.strMeasure14],
          [x.strIngredient15, x.strMeasure15],
        ];

        const { strGlass } = x;
        // console.log(ingredients)
        this.setState({
          name: strDrink,
          image: strDrinkThumb,
          instructions: strInstructions,
          ingredients: ingredients,
          glass: strGlass,
        });
      });
  }

  render() {
    return (
      <>
        <div>
          <h2>{this.state.name}</h2>
        </div>
        <div className="container">
          <img
            src={this.state.image}
            style={imgStyle}
            alt={`image ${this.state.name}`}
          />
          <div className="container2">
            <div className="ingredients">
              <span id="title">Ingredients: </span>
              {console.log(this.state.ingredients)}
              <ul>
                {this.state.ingredients.map((ingredient, idx) => {
                  if (ingredient[0] !== null && ingredient[1] !== null) {
                    return (
                      <li key={idx}>
                        {ingredient[1]} {ingredient[0]}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="instructions">
              <span id="title">How to prepare: </span>
              <div>{this.state.instructions}</div>
            </div>
            <br></br>
            <div className="glass">
              <span id="title">Glass: </span>
              <div>{this.state.glass}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Cocktails;
