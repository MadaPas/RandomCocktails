import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Title from "./Title";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Cocktails from "./Cocktails";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={Title} />
        <Route exact path="/" component={Search} />
        <Route exact path="/results/:query" component={SearchResults} />
        <Route exact path="/cocktail/:name" component={Cocktails} />
      </div>
    </Router>
  );
};

export default App;
