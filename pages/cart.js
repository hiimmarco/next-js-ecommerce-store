import { css } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

// Add styles to component

const main = css`
  display: flex;
  flex-direction: column;
`;

const buttons = css`
  display: flex;
`;

const image = css`
  width: 500px;
  height: auto;
`;

const productcard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
`;

// Create functional component

export default function Cart() {
  const [cookie, setCookie] = useState(
    getParsedCookie('currentCookie') || '[]',
  );

  // Write function for deleting product from the cookie
  /*
  const deleteProductFromCookie = () => {
    const isBurritoInCart = cookie.some((burritos) => {
      return Number(burritos.id) === Number(burrito.id);
    });
    console.log(isBurritoInCart);
    // If the product is there, remove it
    let newCookie = cookie.filter((burritos) => {
      return Number(burritos.id) !== Number(burrito.id);
      console.log(newCookie);
    });
  };
*/

  // Render two different states depending on the cooking being already there

  if (cookie === '[]') {
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
            {cookie.map((burrito) => {
              return (
                <div key={burrito.id} css={productcard}>
                  <img src={burrito.img} alt="Burrito" css={image} />
                  <h3>{burrito.name}</h3>
                  <p>€ {burrito.price}</p>
                  <div css={buttons}>
                    <p>Quantity: </p>
                    <button>-</button>
                    <p>{burrito.amount}</p>
                    <button>+</button>
                    <button>Delete</button>
                  </div>
                </div>
              );
            })}
          </Layout>
        </main>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { burritos } = await import('../util/database');

  const cookies = context.req.cookies.currentCookie || '[]';
  const currentCookie = JSON.parse(cookies);

  console.log(cookies);
  console.log(currentCookie);

  return {
    props: {
      burritos: burritos,
    },
  };
}
