/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import Header from "./Header";
import Grid from "./Grid";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Layout = ({ grid, setGrid }) => {
  return (
    <div css={containerStyle}>
      <Header />
      <ScoreBoard />
      <Grid grid={grid} />
      <Button onClick={() => setGrid(Array(4).fill(0).map(() => Array(4).fill(0)))} />
    </div>
  );
};


Layout.propTypes = {
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
};

export default Layout;
