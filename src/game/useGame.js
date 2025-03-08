import { useState, useEffect } from "react";
import { generateRandomTile, moveTiles } from "./gameLogic";

export const useGame = () => {
  const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill(0)));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setGrid((prevGrid) => generateRandomTile(prevGrid));
  }, []);

  const handleMove = (direction) => {
    const { newGrid, gainedPoints } = moveTiles(grid, direction);
    if (JSON.stringify(grid) !== JSON.stringify(newGrid)) {
      setGrid(generateRandomTile(newGrid));
      setScore((prevScore) => prevScore + gainedPoints);
      setBestScore((prevBest) => Math.max(prevBest, score + gainedPoints));
    }
  };

  const resetGame = () => {
    setGrid(Array(4).fill().map(() => Array(4).fill(0)));
    setScore(0);
    setGrid((prevGrid) => generateRandomTile(prevGrid));
  };

  return { grid, score, bestScore, handleMove, resetGame };
};
