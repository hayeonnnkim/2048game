/** @jsxImportSource @emotion/react */
import { containerStyle, gridContainerStyle, textSectionStyle } from "../styles";
import Header from "./Header";
import Button from "./Button";
import Grid from "./Grid";

type LayoutProps = {
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
};

const Layout = ({ grid, setGrid }: LayoutProps) => {
  return (
    <div css={containerStyle}>
      <Header />
      <div css={gridContainerStyle}>
        <div css={textSectionStyle}>
          <h2>Play 2048 Game Online</h2>
          <h3>Join the numbers and get to the 2048 tile!</h3>
        </div>
        <Button onClick={() => setGrid(Array(4).fill(0).map(() => Array(4).fill(0)))} />
      </div>
      <Grid grid={grid} />
    </div>
  );
};

export default Layout;
