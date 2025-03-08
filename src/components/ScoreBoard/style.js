import { css } from "@emotion/react";

export default {
  scoreBoard: css`
    display: flex;
    gap: 10px;
    align-items: center;
  `,

  scoreBox: css`
    background: #bbada0;
    padding: 10px 10px;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    min-width: 30px; /* 최소 너비 */
    width: auto; /* 내용에 따라 조정 */
    color: #eee4da;
  `,

  scoreValue: css`
    font-size: 24px;
    font-weight: bold;
    color: white;
    padding: 0 10px;
  `,
};
