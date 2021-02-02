import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <Link to="/">
        <h2>Cocktails4life</h2>
      </Link>
    </div>
  );
};

export default Title;
