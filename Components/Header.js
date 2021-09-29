import { css } from '@emotion/react';
import Link from 'next/link';

const header = css`
  background-color: #fef8f0;
  height: 88px;
  width: 100vw;
  font-family: 'Inter' sans-seri;
  align-items: center;
`;

const headerContent = css`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  padding: 24px 32px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(55, 65, 81);
`;

const button = css`
  display: flex;
  justify-content: center;
  color: rgb(184, 98, 0);
  background-color: rgb(255, 226, 194);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.25rem;
  font-family: 'Inter' sans-serif;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    transform: scale(1.05) perspective(1px);
    transition-duration: 100ms;
    background-color: rgb(255, 207, 153);
  }
`;

export default function Header() {
  return (
    <div css={header}>
      <div css={headerContent}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a href="https://www.google.at" class="buttonLink">
          <button css={button}>Shopping cart</button>
        </a>
      </div>
    </div>
  );
}
