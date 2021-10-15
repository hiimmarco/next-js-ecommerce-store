import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../Components/Layout';

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
  useEffect(() => {
    Cookies.remove('currentCookie');
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
