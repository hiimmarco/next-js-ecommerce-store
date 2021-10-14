import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../../Components/Layout';
import Productcard from '../../Components/Productcard';

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;

  flex-wrap: wrap;
`;

export default function Products(props) {
  return (
    <div>
      <Layout cartItems={props.cartItems}>
        <Head>
          <title>Overview - Burrito.me</title>
        </Head>

        <div css={wrapper}>
          {props.burritos.map((burrito) => {
            return (
              <div key={`id-list-${burrito.id}`}>
                <Productcard
                  name={burrito.name}
                  img={burrito.img}
                  desc={burrito.desc}
                  price={burrito.price}
                  link={burrito.id}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { burritos } = await import('../../util/database');

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
