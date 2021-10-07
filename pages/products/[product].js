import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../Components/Layout';

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

export default function Productdetail(props) {
  const [quantity, setQuantity] = useState(1);
  // Functions for setting the count
  const addCountHandler = () => {
    setQuantity(quantity + 1);
  };
  const removeCountHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };
  // Set cookie with desired burrito and amount
  function addToCookie() {
    const selectedBurrito = [
      {
        name: props.singleBurrito.name,
        price: props.singleBurrito.price,
        id: props.singleBurrito.id,
        img: props.singleBurrito.img,
        amount: quantity,
      },
    ];
    console.log(selectedBurrito);
    console.log(Cookies.get('name'));
    // Insert set cookie here !!!!!!!!!!!
  }
  // Return page elements
  return (
    <div>
      <Layout>
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
            <p>€ {props.singleBurrito.price}</p>
          </div>
          <div css={buttons}>
            <button onClick={removeCountHandler}>-</button>
            <p>{quantity}</p>
            <button onClick={addCountHandler}>+</button>
            <button onClick={addToCookie}>Add to cart</button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

// Get data from database and reduce to one object (by finding the unique ID of the object via the URL)
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
