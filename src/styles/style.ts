/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #faf8ef;
  font-family: "Arial", sans-serif;
  color: #776e65;
`;

export const headerStyle = css`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

export const gridContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

export const textSectionStyle = css`
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

export const buttonStyle = css`
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

export const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
  width: 400px;
  height: 400px;
  background-color: #bbada0;
  padding: 15px;
  border-radius: 15px;
`;

export const numberBoxStyle = (value: number) => css`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${value ? "#f9f6f2" : "#cdc1b4"};
  border-radius: 10px;
  font-size: ${value >= 1024 ? "20px" : "24px"};
  font-weight: bold;
  color: ${value ? "#776e65" : "#cdc1b4"};
`;
