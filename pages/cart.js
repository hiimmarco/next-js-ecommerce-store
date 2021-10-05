import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../Components/Layout';

const main = css`
  display: flex;
  flex-direction: column;
`;

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Burrito.me</title>
        <meta
          name="description"
          content="Burritos are what happens when your food hugs itself."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={main}>
        <Layout>
          <h1>Your shopping cart</h1>
          <div>Hello There.</div>
        </Layout>
      </main>
    </div>
  );
}
