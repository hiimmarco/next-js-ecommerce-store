import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Headerlogo from '../public/images/logo.png';

const header = css`
  background-color: black;
  height: 88px;
  width: 100%;
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

const headerlogo = css`
  width: 180px;
  padding-top: 6px;
`;

export default function Header() {
  const [totalAmount, setTotalAmount] = useState(0);

  async function getCookie() {
    const getCookiesFunction = await Cookies.get('currentCookie');
    const cookies = getCookiesFunction ? JSON.parse(getCookiesFunction) : [];
    setTotalAmount(cookies.reduce((sum, cookie) => sum + cookie.amount, 0));
  }
  getCookie();
  console.log('this is header');
  console.log(totalAmount);
  return (
    <div css={header}>
      <div css={headercontent}>
        <div css={headerlogo}>
          <Link href="/">
            <a>
              <Image
                src={Headerlogo}
                alt="This is the burrito logo"
                css={headerlogo}
              />
            </a>
          </Link>
        </div>
        <Link href="/cart">
          <a>
            <button css={button}>Items: {totalAmount}</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
