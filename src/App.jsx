/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SIZE = 4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #faf8ef;
  font-family: "Arial", sans-serif;
  color: #776e65;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const TextSection = styled.div`
  h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
    margin: 10px 0;
    font-weight: normal;
  }
`;

const Button = styled.button`
  background-color: #8f7a66;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #a07d65;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${SIZE}, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  width: 300px;
  background-color: #bbada0;
  padding: 10px;
  border-radius: 10px;
`;

const NumberBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.value ? "#f9f6f2" : "#cdc1b4")};
  border-radius: 5px;
  font-size: ${(props) => (props.value >= 1024 ? "16px" : "20px")};
  font-weight: bold;
  color: ${(props) => (props.value ? "#776e65" : "#cdc1b4")};
`;

function App() {
  const [grid, setGrid] = useState(
    Array(SIZE)
      .fill()
      .map(() => Array(SIZE).fill(0))
  );

  return (
    <Container>
      <Header>2048</Header>

      <GridContainer>
        <TextSection>
          <h2>Play 2048 Game Online</h2>
          <h3>Join the numbers and get to the 2048 tile!</h3>
        </TextSection>
        <Button onClick={() => setGrid(Array(SIZE).fill().map(() => Array(SIZE).fill(0)))}>
          New Game
        </Button>
      </GridContainer>

      <Grid>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <NumberBox key={`${rowIndex}-${colIndex}`} value={cell}>
              {cell !== 0 ? cell : ""}
            </NumberBox>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default App;
