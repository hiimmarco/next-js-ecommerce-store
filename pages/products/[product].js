import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../Components/Layout';
import Burrito from '../../public/images/burrito.jpeg';

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
`;

const image = css`
  width: 500px;
  height: auto;
`;

const buttons = css`
  display: flex;
`;

export default function Productdetail(props) {
  /*   const router = useRouter();
  const { product } = router.query; */
  return (
    <div>
      <Layout>
        <Head>
          <title> - Burrito.me</title>
        </Head>
        <div css={wrapper}>
          <Image src={Burrito} alt="Picture of a burrito" css={image} />

          <h1>Product Detail Page for </h1>
          <p>Hallo test. </p>
          <div css={buttons}>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { burritos } = await import('../../util/database');

  console.log(context.query.id);

  return {
    props: {
      burritos,
    },
  };
}