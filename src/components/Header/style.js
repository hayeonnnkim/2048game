import { css } from '@emotion/react';

export default {
  headerContainer: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 좌측 정렬 */
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 40px;
  `,

  topRow: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,

  gametitle: css`
    font-size: 80px;
    font-weight: bold;
    color: #776e65;
  `,

  scoreBoardContainer: css`
    display: flex;
    gap: 10px;
  `,

  scoreBox: css`
    background: #bbada0;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    min-width: 70px;
    font-weight: bold;

    .label {
      font-size: 14px;
      color: #eee4da;
    }

    .value {
      font-size: 24px;
      color: white;
    }
  `,

  gameInfoRow: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 10px;
  `,

  gameDescriptionContainer: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  newGameButton: css`
    background: #8f7a66;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #9f8b77;
    }
  `,

  description: css`
    font-size: 18px;
    font-weight: bold;
    color: #776e65;
  `,

  subdescription: css`
    font-size: 18px;
    color: #776e65;
  `,
};
