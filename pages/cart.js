import { css } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

const main = css`
  display: flex;
  flex-direction: column;
`;

export default function Cart() {
  const [cookie, setCookie] = useState(getParsedCookie('currentCookie'));

  useEffect(() => {});

  if (cookie === 'undefined') {
    return (
      <Layout>
        <div>Your cart is empty.</div>
      </Layout>
    );
  } else {
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
            <h1>Your shopping cart</h1>
            <div>Here are your products.</div>
          </Layout>
        </main>
      </div>
    );
  }
}
