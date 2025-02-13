/** @jsxImportSource @emotion/react */
import { numberBoxStyle } from "../styles";

type NumberBoxProps = {
  value: number;
};

const NumberBox = ({ value }: NumberBoxProps) => {
  return <div css={numberBoxStyle(value)}>{value !== 0 ? value : ""}</div>;
};

export default NumberBox;
