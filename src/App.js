import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/app.scss";

import Results from "./components/Results";
import Cocktails from "./components/Cocktails";
import Main from "./components/Main";
import Search from "./components/Search";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={Main} />
        <Route exact path="/" component={Search} />
        <Route exact path="/results/:query" component={Results} />
        <Route exact path="/cocktail/:name" component={Cocktails} />
      </div>
    </Router>
  );
};

export default App;
