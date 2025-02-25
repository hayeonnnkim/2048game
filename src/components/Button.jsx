/** @jsxImportSource @emotion/react */
import { buttonStyle } from "../styles";

const Button = ({ onClick }) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      New Game
    </button>
  );
};

export default Button;
