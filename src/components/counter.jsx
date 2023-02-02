import React from "react";
const Counter = () => {
  const count = 0;
  const formatCount = () => {
    return count === 0 ? <h1>empty</h1> : count;
  };
  return (
    <>
      <span>{formatCount()}</span>
      <button>+</button>
    </>
  );
};

export default Counter;
