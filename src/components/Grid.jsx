/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import Tile from "./Tile";

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
  background: #bbada0;
  padding: 10px;
  border-radius: 10px;
`;

const Grid = ({ grid }) => {
  return (
    <div css={gridStyle}>
      {grid.flat().map((cell, index) => (
        <Tile key={index} value={cell} />
      ))}
    </div>
  );
};


Grid.propTypes = {
  grid: PropTypes.array.isRequired,
};

export default Grid;
