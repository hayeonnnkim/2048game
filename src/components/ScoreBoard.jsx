/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const scoreBoardStyle = css`
  display: flex;
  gap: 10px;
`;

const scoreBoxStyle = css`
  background: #bbada0;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const ScoreBoard = ({ score = 0, bestScore = 0 }) => {
  return (
    <div css={scoreBoardStyle}>
      <div css={scoreBoxStyle}>
        <div>SCORE</div>
        <div>{score}</div>
      </div>
      <div css={scoreBoxStyle}>
        <div>BEST</div>
        <div>{bestScore}</div>
      </div>
    </div>
  );
};

// ✅ eslint 오류 해결: PropTypes 추가
ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
