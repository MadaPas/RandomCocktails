import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Results from "./Results";
import Cocktails from "./Cocktails";
import Main from "./Main";
import Search from "./Search";

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
