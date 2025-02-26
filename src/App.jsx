import { useState } from "react";
import Layout from "./components/Layout";


const SIZE = 4;

const App = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: SIZE }, () => Array(SIZE).fill(0))
  );

  return <Layout grid={grid} setGrid={setGrid} />;
};

export default App;
