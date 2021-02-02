import React from "react";

const Title = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="title">
      <h1 onClick={refreshPage}>Cocktails</h1>
    </div>
  );
};

export default Title;
