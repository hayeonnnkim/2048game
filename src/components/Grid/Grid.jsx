/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import styled from "./style";
import Title from "../Title/Title";

const Grid = ({ grid }) => {
  return (
    <div css={styled.gridContainer}>
      {grid.flat().map((cell, index) => (
        <Title key={index} value={cell} />
      ))}
    </div>
  );
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Grid;
