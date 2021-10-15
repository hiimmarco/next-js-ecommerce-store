import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../Components/Layout';
import { getParsedCookie } from '../util/cookies';

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

const summary = css`
  display: block;
  background-color: lightgrey;
  width: 400px;
  padding-left: 20px;
`;

// Create functional component

export default function Checkout(props) {
  const cookie = getParsedCookie('currentCookie') || '[]';

  // Create function for total price of burritos

  function totalBurritoPrice(arr) {
    return arr.reduce((acc, tour) => {
      return acc + parseFloat(tour.price) * tour.amount;
    }, 0);
  }

  // Including shipping

  function totalPrice() {
    return totalBurritoPrice(cookie) + 8;
  }

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
          <Layout cartItems={props.cartItems}>
            <h1>Shopping cart</h1>
            <div css={maincontent}>
              <label className="formlabel">
                <h3>Contact information</h3>

                <input placeholder="Email" value="Email" />
                <h3>Shipping adress</h3>
                <input placeholder="First Name" value="First Name" />
                <input placeholder="Last Name" value="Last Name" />
                <input placeholder="Adress" value="Adress" />
                <input placeholder="Apartment" value="Apartment" />
                <input placeholder="City" value="City" />
                <input placeholder="Country" value="Country" />
                <input placeholder="Postal code" value="Postal code" />
                <input
                  placeholder="Phone (optional)"
                  value="Phone (optional)"
                />
              </label>
              <Link href="/thankyou">
                <a>
                  <button>Place order</button>
                </a>
              </Link>
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
                <Link href="/thankyou">
                  <a>
                    <button>Place order</button>
                  </a>
                </Link>
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
