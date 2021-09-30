import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Headerlogo from '../public/images/logo.png';

const header = css`
  background-color: black;
  height: 88px;
  width: 100vw;
  font-family: 'Inter' sans-seri;
  align-items: center;
`;

const headercontent = css`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 88px;
  padding: 24px 32px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(55, 65, 81);
`;

const liststyle = css`
  list-style-type: none;
  padding: 0;
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

const navelement = css`
  color: white;
  margin: 0;
  padding: 0;
`;

const headerlogo = css`
  width: 180px;
  padding-top: 6px;
`;

export default function Header() {
  return (
    <div css={header}>
      <div css={headercontent}>
        <div css={headerlogo}>
          <Image
            src={Headerlogo}
            alt="This is the burrito logo"
            css={headerlogo}
          />
        </div>
        <nav>
          <ul css={liststyle}>
            <li>
              <Link href="/">
                <a css={navelement}>All products</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a href="https://www.google.at" className="buttonLink">
          <button css={button}>Shopping cart</button>
        </a>
      </div>
    </div>
  );
}
