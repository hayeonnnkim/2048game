/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const tileStyle = (value) => css`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background: ${value ? "#f2b179" : "#cdc1b4"};
  color: white;
  border-radius: 5px;
`;

const Tile = ({ value }) => {
  return <div css={tileStyle(value)}>{value || ""}</div>;
};

// PropTypes 추가
Tile.propTypes = {
  value: PropTypes.number,
};

export default Tile;
