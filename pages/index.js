import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../Components/Layout';

export default function Home() {
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

      <main>
        <Layout>
          <h1>Welcome to Burrito.me</h1>

          <p>Burritos are what happens when your food hugs itself.</p>
        </Layout>
      </main>
    </div>
  );
}
