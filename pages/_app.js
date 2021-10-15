import { css, Global } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [totalAmount, setTotalAmount] = useState(0);

  async function getCookie() {
    const getCookiesFunction = await Cookies.get('currentCookie');
    const cookies = getCookiesFunction ? JSON.parse(getCookiesFunction) : [];
    if (cookies.length > 0) {
      setTotalAmount(cookies.reduce((sum, cookie) => sum + cookie.amount, 0));
    }
  }
  useEffect(() => {
    getCookie();
  }, []);

  console.log('This is appjs');

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Global
        styles={css`
          body {
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Component {...pageProps} cartItems={totalAmount} />
    </>
  );
}

export default MyApp;
