import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../Components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

// Create styles for component

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const image = css`
  width: 500px;
  height: auto;
`;

const buttons = css`
  display: flex;
`;

const infos = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Create function component

export default function Productdetail(props) {
  const [quantity, setQuantity] = useState(1);
  const [cookie, setCookie] = useState(getParsedCookie('currentCookie'));

  // Functions for in- or decreasing the quantitiy of the product

  const addCountHandler = () => {
    setQuantity(quantity + 1);
  };
  const removeCountHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  /* Set cookie with desired burrito and amount; 3 main steps:
   1. Check current state of cookie
   2. Create or update cookie (or remove content if something is there)
   3. Update state */

  function addToCart() {
    let currentCookie = cookie;

    // Check if cookie even exists and create one if not

    if (typeof currentCookie === 'undefined') {
      currentCookie = [
        {
          name: props.singleBurrito.name,
          price: props.singleBurrito.price,
          id: props.singleBurrito.id,
          img: props.singleBurrito.img,
          amount: quantity,
        },
      ];

      Cookies.set('currentCookie', JSON.stringify(currentCookie));

      // Update the existing cookie
    } else {
      // Check if the desired product is already inside the cookie

      const isBurritoInCart = currentCookie.some((burritos) => {
        return Number(burritos.id) === Number(props.singleBurrito.id);
      });

      // If the product is there, remove it first and add it again with new amount

      let newCookie;
      if (isBurritoInCart) {
        // Remove the product

        newCookie = currentCookie.filter((burritos) => {
          return Number(burritos.id) !== Number(props.singleBurrito.id);
        });
        // Add the product again with new amount

        newCookie = [
          ...newCookie,
          {
            name: props.singleBurrito.name,
            price: props.singleBurrito.price,
            id: props.singleBurrito.id,
            img: props.singleBurrito.img,
            amount: quantity,
          },
        ];
      } else {
        newCookie = [
          ...currentCookie,
          {
            name: props.singleBurrito.name,
            price: props.singleBurrito.price,
            id: props.singleBurrito.id,
            img: props.singleBurrito.img,
            amount: quantity,
          },
        ];
      }
      setParsedCookie('currentCookie', newCookie);
      setCookie(newCookie);
      console.log(newCookie);
    }
  }

  // Render page elements

  return (
    <div>
      <Layout cartItems={props.cartItems}>
        <Head>
          <title>{props.singleBurrito.name} - Burrito.me</title>
        </Head>
        <div css={wrapper}>
          <Image
            src={props.singleBurrito.img}
            alt="Picture of a burrito"
            css={image}
            width={800}
            height={500}
          />
          <div css={infos}>
            <h1>{props.singleBurrito.name} </h1>
            <p>{props.singleBurrito.desc}</p>
            <p>??? {props.singleBurrito.price}</p>
          </div>
          <div css={buttons}>
            <button onClick={removeCountHandler}>-</button>
            <p>{quantity}</p>
            <button onClick={addCountHandler}>+</button>
            <button
              onClick={() => {
                addToCart();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

// Get data from database and reduce to one object (by finding the unique ID provided in the link/URL)

export async function getServerSideProps(context) {
  const { burritos } = await import('../../util/database');

  const idFromUrl = context.query.product;

  const singleBurrito = burritos.find((burrito) => {
    return idFromUrl === burrito.id;
  });

  return {
    props: {
      singleBurrito,
    },
  };
}
