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
`;

export default function Products(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Overview - Burrito.me</title>
        </Head>
        <div css={wrapper}>
          <div>
            {props.burritos.map((burrito) => {
              return (
                <div key={`id-list-${burrito.id}`}>
                  <Productcard
                    name={burrito.name}
                    desc={burrito.desc}
                    price={burrito.price}
                    link={burrito.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const { burritos } = await import('../../util/database');
  return {
    props: {
      burritos: burritos,
    },
  };
}
