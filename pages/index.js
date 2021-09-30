import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../Components/Layout';

const herocomponent = css`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/burritos-hero.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
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

const button = css`
  display: flex;
  justify-content: center;
  color: rgb(184, 98, 0);
  background-color: rgb(255, 226, 194);
  text-decoration: none;
  text-transform: uppercase;
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
            <Link href="/products">
              <a>
                <button css={button}>Shop all Burritos</button>
              </a>
            </Link>
          </div>
        </Layout>
      </main>
    </div>
  );
}
