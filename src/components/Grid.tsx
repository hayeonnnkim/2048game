/** @jsxImportSource @emotion/react */
import { gridStyle } from "../styles";
import NumberBox from "./NumberBox";

type GridProps = {
  grid: number[][];
};

const Grid = ({ grid }: GridProps) => {
  return (
    <div css={gridStyle}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <NumberBox key={`${rowIndex}-${colIndex}`} value={cell} />
        ))
      )}
    </div>
  );
};

export default Grid;
