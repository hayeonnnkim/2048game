/** @jsxImportSource @emotion/react */
import styled from "./style";
import PropTypes from "prop-types";

const ScoreBoard = ({ score = 0, bestScore = 0 }) => {
  return (
    <div css={styled.scoreBoard}>
      <div css={styled.scoreBox}>
        <div css={styled.scoreTitle}>SCORE</div>
        <div css={styled.scoreValue}>{score}</div>
      </div>
      <div css={styled.scoreBox}>
        <div css={styled.scoreTitle}>BEST</div>
        <div css={styled.scoreValue}>{bestScore}</div>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};

export default ScoreBoard;
