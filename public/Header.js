import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  width: 100vw;
`;

export default function Header() {
  return (
    <div css={headerStyles}>
      This is the header.
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
