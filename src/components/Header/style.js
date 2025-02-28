import { css } from "@emotion/react";

export default {headerContainer: css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  margin-bottom: 10px;
  margin-top: 20px;}
`,
topContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  `,
  title: css`
  font-size: 80px;
  font-weight: 900;
  color: #776e65;
  margin: 5px;
`,
rightContainer: css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`,

infoContainer: css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`,
description: css`
  font-size: 20px;
  font-weight: bold;
  color: #776e65;
  margin-top: -5px;
`,
subDescription: css`
  font-size: 18px;
  color: #776e65;
  margin-top: 0px;
`,

}