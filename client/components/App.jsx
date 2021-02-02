import React from "react";

import Cocktails from "./Cocktails";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Home />
      <Cocktails />
      {/* <Route path='/' component={Home} /> */}
      {/* <Route exact path='/cocktail' component={Cocktails} /> */}
    </>
  );
};
export default App;
