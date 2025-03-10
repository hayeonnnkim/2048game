import { css } from '@emotion/react';

export default {
  gridContainer: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 15px;
    width: 500px;
    height: 500px;
    background: #bbada0;
    padding: 15px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  `,
};
