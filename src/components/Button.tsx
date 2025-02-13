/** @jsxImportSource @emotion/react */
import { buttonStyle } from "../styles";

type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      New Game
    </button>
  );
};

export default Button;
