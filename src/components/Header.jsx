/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";

const headerContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const topContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

const titleStyle = css`
  font-size: 80px;
  font-weight: 900;
  color: #776e65;
  margin: 5px;
`;

const rightContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const infoContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

const descriptionStyle = css`
  font-size: 20px;
  font-weight: bold;
  color: #776e65;
  margin-top: -5px;
`;

const subDescriptionStyle = css`
  font-size: 18px;
  color: #776e65;
  margin-top: 0px;
`;

const Header = ({ onReset }) => {
  return (
    <div css={headerContainerStyle}>
      <div css={topContainerStyle}>
        <h1 css={titleStyle}>2048</h1>
        <div css={rightContainerStyle}>
          <ScoreBoard />
        </div>
      </div>

      
      <div css={infoContainerStyle}>
        <div>
          <div css={descriptionStyle}>Play 2048 Game Online</div>
          <div css={subDescriptionStyle}>
            Join the numbers and get to the <b>2048 tile!</b>
          </div>
        </div>
        <Button onClick={onReset}>New Game</Button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default Header;
