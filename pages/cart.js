import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
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

const maincontent = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const image = css`
  width: 250px;
  height: auto;
  margin-right: 20px;
`;

const productcard = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 20px;
  width: 500px;
`;

const innercard = css`
  display: flex;
  flex-direction: column;
`;

const summary = css`
  display: block;
  background-color: lightgrey;
  width: 400px;
  padding-left: 20px;
`;

const wrapper = css`
  display: flex;
  flex-direction: row;
  width: 800px;
`;

// Create functional component

export default function Cart(props) {
  const [cookie, setCookie] = useState(
    getParsedCookie('currentCookie') || '[]',
  );

  // Write function for deleting product from the cart (& cookie)

  function deleteProductFromCookie(id) {
    const newCookie = cookie.filter((burritos) => {
      return Number(burritos.id) !== Number(id);
    });
    setParsedCookie('currentCookie', newCookie);
    setCookie(newCookie);
    console.log(newCookie);
  }

  // Write functions for changing the amount/quantity of the products in the cart (&cookie)

  function incrementQuantity(id) {
    const currentCookie = getParsedCookie('currentCookie');
    const newCookie = currentCookie.find((burritos) => {
      return burritos.id === id;
    });
    newCookie.amount += 1;
    setParsedCookie('currentCookie', currentCookie);
    setCookie(currentCookie);
    console.log(currentCookie);
  }

  function decrementQuantity(id) {
    const currentCookie = getParsedCookie('currentCookie');
    const newCookie = currentCookie.find((burritos) => {
      return burritos.id === id;
    });
    newCookie.amount -= 1;
    setParsedCookie('currentCookie', currentCookie);
    setCookie(currentCookie);
    console.log(currentCookie);
  }

  // Create function for total price of burritos

  function totalBurritoPrice(arr) {
    return arr.reduce((acc, tour) => {
      return acc + parseFloat(tour.price) * tour.amount;
    }, 0);
  }

  function totalPrice() {
    return totalBurritoPrice(cookie) + 8;
  }

  // Render two different states depending on the cooking being already there

  if (cookie === '[]') {
    return (
      <Layout cartItems={props.cartItems}>
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
          <Layout cartItems={props.cartItems}>
            <h1>Shopping cart</h1>
            <div css={wrapper}>
              <div css={maincontent}>
                {cookie.map((burrito) => {
                  return (
                    <div key={burrito.id} css={productcard}>
                      <img src={burrito.img} alt="Burrito" css={image} />
                      <div css={innercard}>
                        <h3>{burrito.name}</h3>
                        <p>€ {burrito.price}</p>
                        <div css={buttons}>
                          <p>Quantity: </p>
                          <button
                            onClick={() => {
                              decrementQuantity(burrito.id);
                            }}
                          >
                            -
                          </button>
                          <p>{burrito.amount}</p>
                          <button
                            onClick={() => {
                              incrementQuantity(burrito.id);
                            }}
                          >
                            +
                          </button>
                          <button
                            onClick={() => {
                              deleteProductFromCookie(burrito.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div css={summary}>
                  <h2>Order summary</h2>
                  <p>
                    Burritos: <span>{totalBurritoPrice(cookie)}</span>
                  </p>
                  <p>
                    Shipping: <sp>8€</sp>
                  </p>
                  <p>
                    Total costs: <span>{totalPrice()}</span>
                  </p>
                  <Link href="/checkout">
                    <a>
                      <button>checkout</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
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
