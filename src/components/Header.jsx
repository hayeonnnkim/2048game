/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  font-size: 80px;
  font-weight: Extra bold;
  color: #776e65;
`;

const Header = () => {
  return <h1 css={headerStyle}>2048</h1>;
};

export default Header;
