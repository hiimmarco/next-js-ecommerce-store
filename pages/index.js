import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../Components/Layout';
import HeroImage from '../public/images/burritos-hero.jpg';

const herocomponent = css`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/burritos-hero.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 0px 32px;
  color: white;
`;

const herobutton = css`
  height: 48px;
  width: 16%;
  text-transform: uppercase;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

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
          <div css={herocomponent}>
            <h1>Welcome to Burrito.me</h1>

            <p>Burritos are what happens when your food hugs itself.</p>
            <button css={herobutton}>Shop all Burritos</button>
          </div>
        </Layout>
      </main>
    </div>
  );
}
