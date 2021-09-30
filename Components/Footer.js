import { css } from '@emotion/react';

const header = css`
  background-color: black;
  height: 88px;
  width: 100%;
  font-family: 'Inter' sans-seri;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255, 0.5);
`;

export default function Footer() {
  return (
    <div css={header}>
      <footer>
        <p>©Burrito Benito</p>
      </footer>
    </div>
  );
}
