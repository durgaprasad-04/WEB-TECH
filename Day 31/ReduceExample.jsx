import React from "react";

const ReduceExample = () => {
  const number = [10, 20, 30, 40, 50, 60];
  const total = number.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <>
      <h1>Reduce Example</h1>
      <h2>{total}</h2>
    </>
  );
};

export default ReduceExample;