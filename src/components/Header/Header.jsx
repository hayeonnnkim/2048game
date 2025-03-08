/** @jsxImportSource @emotion/react */
import styled from "./style";
import PropTypes from "prop-types";

const Header = ({ score, bestScore, resetGame }) => {
  return (
    <div css={styled.headerContainer}>
      {/* 2048 + ScoreBoard */}
      <div css={styled.topRow}>
        <div css={styled.gametitle}>2048</div>
        <div css={styled.scoreBoardContainer}>
          <div css={styled.scoreBox}>
            <div className="label">SCORE</div>
            <div className="value">{score}</div>
          </div>
          <div css={styled.scoreBox}>
            <div className="label">BEST</div>
            <div className="value">{bestScore}</div>
          </div>
        </div>
      </div>

      {/* 설명 + New Game 버튼 */}
      <div css={styled.gameInfoRow}>
        <div css={styled.gameDescriptionContainer}>
          <div css={styled.description}>Play 2048 Game Online</div>
          <div css={styled.subdescription}>
            Join the numbers and get to the <strong>2048 tile!</strong>
          </div>
        </div>
        <button onClick={resetGame} css={styled.newGameButton}>
          New Game
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Header;
