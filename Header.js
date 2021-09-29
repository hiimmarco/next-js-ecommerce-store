import { css } from '@emotion/react';

const headerStyles = css`
  width: 100vw;
`;

export default function Header() {
  return <div css={headerStyles}>This is the header.</div>;
}
