/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const buttonStyle = css`
  padding: 10px 20px;
  font-size: 20px;
  background: #8f7a66;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #6f5b4c;
  }
`;

const Button = ({ onClick }) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      New Game
    </button>
  );
};


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
