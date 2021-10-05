import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../Components/Layout';

const wrapper = css`
  display: flex;
  flex-direction: column;
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

export default function Productdetail(props) {
  // This is for getting the query from the URL in the frontnend
  /*   const router = useRouter();
  const { product } = router.query; */

  const [count, setCount] = useState(0);

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
            width={900}
            height={600}
          />

          <h1>{props.singleBurrito.name} </h1>
          <p>{props.singleBurrito.desc}</p>
          <div css={buttons}>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button>Add to cart</button>
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
  console.log(singleBurrito);
  return {
    props: {
      singleBurrito,
    },
  };
}
