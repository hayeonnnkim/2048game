import { css } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #faf8ef;
    color: #776e65;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 20px; /* 상단 여백 추가 */
  }
`;

export default globalStyles;
