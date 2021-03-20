import React from "react";

const Number = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <ul>
        {numbers.map((n, index) => {
          return <li key={index}>{n}</li>;
        })}
      </ul>
    </div>
  );
};

export default Number;
