import { useState } from "react";
import Layout from "./components/Layout/Layout";

const SIZE = 4;

const App = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: SIZE }, () => Array(SIZE).fill(0))
  );

  const [score, setScore] = useState(0); // ✅ 현재 점수 상태 추가
  const [bestScore, setBestScore] = useState(0); // ✅ 최고 점수 상태 추가

  // 점수 업데이트 함수
  const updateScore = (newPoints) => {
    setScore((prevScore) => prevScore + newPoints);
    setBestScore((prevBest) => Math.max(prevBest, score + newPoints));
  };

  // 새 게임 시작 (점수 초기화)
  const resetGame = () => {
    setScore(0);
    setGrid(Array.from({ length: SIZE }, () => Array(SIZE).fill(0)));
  };

  return (
    <Layout
      grid={grid}
      setGrid={setGrid}
      score={score}
      bestScore={bestScore}
      updateScore={updateScore}
      resetGame={resetGame}
    />
  );
};

export default App;
