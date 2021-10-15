import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

// Add styles to component

const main = css`
  display: flex;
  flex-direction: column;
`;

const maincontent = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export default function Thankyou() {
  const [cookie, setCookie] = useState(getParsedCookie('currentCookie'));

  useEffect(() => {
    setParsedCookie('currentCookie', []);
    setCookie([]);
  }, []);

  return (
    <div>
      <Head>
        <title>Cart - Burrito.me</title>
        <meta
          name="description"
          content="Burritos are what happens when your food hugs itself."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={main}>
        <Layout>
          <h1>Shopping cart</h1>
          <div css={maincontent}>Thank you so much!</div>
        </Layout>
      </main>
    </div>
  );
}
