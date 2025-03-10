export const generateRandomTile = (grid) => {
  let emptyTiles = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] === 0) {
        emptyTiles.push({ row, col });
      }
    }
  }

  if (emptyTiles.length === 0) return grid;

  const { row, col } =
    emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  grid[row][col] = Math.random() < 0.9 ? 2 : 4;
  return grid;
};

export const moveTiles = (grid, direction) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  let gainedPoints = 0;

  const combineRow = (row) => {
    let newRow = row.filter((val) => val !== 0);
    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
        newRow[i] *= 2;
        gainedPoints += newRow[i];
        newRow[i + 1] = 0;
      }
    }
    newRow = newRow.filter((val) => val !== 0);
    while (newRow.length < 4) newRow.push(0);
    return newRow;
  };

  if (direction === 'left') {
    for (let row = 0; row < 4; row++) {
      newGrid[row] = combineRow(newGrid[row]);
    }
  } else if (direction === 'right') {
    for (let row = 0; row < 4; row++) {
      newGrid[row] = combineRow(newGrid[row].reverse()).reverse();
    }
  } else if (direction === 'up') {
    for (let col = 0; col < 4; col++) {
      let column = [
        newGrid[0][col],
        newGrid[1][col],
        newGrid[2][col],
        newGrid[3][col],
      ];
      column = combineRow(column);
      for (let row = 0; row < 4; row++) newGrid[row][col] = column[row];
    }
  } else if (direction === 'down') {
    for (let col = 0; col < 4; col++) {
      let column = [
        newGrid[0][col],
        newGrid[1][col],
        newGrid[2][col],
        newGrid[3][col],
      ];
      column = combineRow(column.reverse()).reverse();
      for (let row = 0; row < 4; row++) newGrid[row][col] = column[row];
    }
  }

  return { newGrid, gainedPoints };
};
