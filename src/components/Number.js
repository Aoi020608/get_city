import React from "react";
import styled from "styled-components";

const Number = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <NumberStyled>
      <h1>数字の表示</h1>
      <ul>
        {numbers.map((n, index) => {
          return <li key={index}>{n},</li>;
        })}
      </ul>
    </NumberStyled>
  );
};

const NumberStyled = styled.div`
  text-align: center;
  padding: 1rem;
  margin-bottom: 3rem; 
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`

export default Number;
