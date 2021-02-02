import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Title from "./Title";
import Search from "./Search";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Title />
        <Search />
      </div>
    </Router>
  );
};

export default App;
