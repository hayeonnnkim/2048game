/** @jsxImportSource @emotion/react */

import styled from "./style";
import PropTypes from "prop-types";
import ScoreBoard from "../ScoreBoard";
import Button from "../Button";
// import { toUnitless } from "@mui/material/styles/cssUtils"; 확인



const Header = ({ onReset }) => {
  return (
    <div css={styled.headerContainer}>
      <div css={styled.topContainer}>
        <h1 css={styled.toUnitles}>2048</h1>
        <div css={styled.rightContainer}>
          <ScoreBoard />
        </div>
      </div>

      
      <div css={styled.infoContainer}>
        <div>
          <div css={styled.description}>Play 2048 Game Online</div>
          <div css={styled.subDescription}>
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
