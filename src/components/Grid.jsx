/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { gridStyle, numberBoxStyle } from "../styles";

const SIZE = 4;

const Grid = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: SIZE }, () => Array(SIZE).fill(0))
  );

  const addRandomNumber = () => {
    const emptyCells = [];
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 0) emptyCells.push({ row: rowIndex, col: colIndex });
      });
    });

    if (emptyCells.length > 0) {
      const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((r) => [...r]);
        newGrid[row][col] = Math.random() < 0.9 ? 2 : 4;
        return newGrid;
      });
    }
  };

  useEffect(() => {
    addRandomNumber();
    addRandomNumber();
  }, []);

  return (
    <div css={gridStyle}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} css={numberBoxStyle(cell)}>
            {cell !== 0 ? cell : ""}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
