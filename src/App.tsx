import React, { useState } from "react";
import Layout from "./components/Layout";

const SIZE = 4;

const App: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(
    Array(SIZE).fill(0).map(() => Array(SIZE).fill(0))
  );

  return <Layout grid={grid} setGrid={setGrid} />;
};

export default App;
