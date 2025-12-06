import React from "react";

const MapExample = () => {
  let names = ["na", "je", "du", "as"];
  console.log(name);
  return (
    <>
      <h1>Map Example</h1>
      <ol>
        {names.map((x) => {
          return <li>{x}</li>;
        })}
      </ol>
    </>
  );
};
export default MapExample;