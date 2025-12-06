import React from "react";

const FilterExample = () => {
  const number = [10, 20, 30, 40, 50, 60];
  const filteredData = number.filter((x) => {
    return x > 30;
  });
  return (
    <>
      <h1>Filter Example</h1>
      <ol>
        {filteredData.map((x) => {
          return <li>{x}</li>;
        })}
      </ol>
    </>
  );
};
export default FilterExample;