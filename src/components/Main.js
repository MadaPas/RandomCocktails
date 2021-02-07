import React from "react";

const Main = () => {
  const reload = () => {
    window.location.reload(false);
  };

  return (
    <div className="title">
      <h1 onClick={reload}>Cocktails</h1>
    </div>
  );
};

export default Main;
