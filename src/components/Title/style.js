import { css } from '@emotion/react';

export default {
  title: (value) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 54px;
    font-weight: bold;
    border-radius: 5px;
    color: ${value >= 8 ? 'white' : '#776e65'}; /* 8 이상일 때 흰색 */
    background: ${(() => {
      switch (value) {
        case 2:
          return '#eee4da';
        case 4:
          return '#ede0c8';
        case 8:
          return '#f2b179';
        case 16:
          return '#f59563';
        case 32:
          return '#f67c5f';
        case 64:
          return '#f65e3b';
        case 128:
          return '#edcf72';
        case 256:
          return '#edcc61';
        case 512:
          return '#edc850';
        case 1024:
          return '#edc53f';
        case 2048:
          return '#edc22e';
        default:
          return '#cdc1b4';
      }
    })()};
  `,
};
