/** @jsxImportSource @emotion/react */
import styled from './style';
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import { useGame } from '../../game/useGame';
import { useEffect } from 'react';

const Layout = () => {
  const { grid, score, bestScore, handleMove, resetGame } = useGame();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          handleMove('left');
          break;
        case 'ArrowRight':
          handleMove('right');
          break;
        case 'ArrowUp':
          handleMove('up');
          break;
        case 'ArrowDown':
          handleMove('down');
          break;
        default:
          return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleMove]);

  return (
    <div css={styled.container}>
      <Header score={score} bestScore={bestScore} resetGame={resetGame} />
      <Grid grid={grid} />
    </div>
  );
};

export default Layout;
