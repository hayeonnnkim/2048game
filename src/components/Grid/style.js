import { css } from "@emotion/react";

export default {
  gridContainer: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* ✅ 4개 칸으로 균등하게 설정 */
    grid-template-rows: repeat(4, 1fr);  /* ✅ 4줄 생성 */
    gap: 15px;  /* ✅ 간격 균등하게 */
    width: 500px;  /* ✅ 전체 크기 조정 */
    height: 500px;
    background: #bbada0;
    padding: 15px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  `,
};
