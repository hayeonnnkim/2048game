/** @jsxImportSource @emotion/react */
import { gridContainerStyle, textSectionStyle } from "../styles";
import Header from "./Header";
import Button from "./Button";
import Grid from "./Grid";

const Layout = ({ grid, setGrid }) => {
  return (
    <div css={gridContainerStyle}>
      <Header />
      <div css={textSectionStyle}>
        <h2>Play 2048 Game Online</h2>
        <h3>Join the numbers and get to the 2048 tile!</h3>
        <Button onClick={() => setGrid(Array(4).fill().map(() => Array(4).fill(0)))} />
      </div>
      <Grid grid={grid} setGrid={setGrid} />
    </div>
  );
};

export default Layout;
